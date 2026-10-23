'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import s from './reserva.module.css';

/* ---------------- tipos ---------------- */
type Turno = {
  id: string; nome: string; inicio: string; fim: string; horarios: string[];
  limite: number | null; vagas: number | null; esgotado: boolean;
};
type Dia = { data: string; dia: string; turnos: Turno[] };
type Calendario = {
  ok: boolean; erro?: string; campanha_ativa?: boolean; datas: Dia[];
  preco_pessoa: number; preco_cheio: number; max_pessoas_reserva?: number; whatsapp_restaurante?: string;
};
type Confirmacao = {
  ok: true; codigo: string; data: string; dia: string; turno: string; chegada: string;
  pessoas: number; valor: number; whatsapp_restaurante: string;
};
type Utm = Record<string, string>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const WHATS_PADRAO = '554130823093';
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'];

const ERROS: Record<string, string> = {
  sem_vagas: 'Esse turno acabou de lotar para essa quantidade de pessoas. Escolha outro turno ou data.',
  duplicada: 'Você já tem uma reserva nesse dia e turno.',
  data_indisponivel: 'Essa data não está mais disponível. Escolha outra.',
  turno_indisponivel: 'Esse turno não está mais disponível. Escolha outro.',
  horario_indisponivel: 'Esse horário não está mais disponível. Escolha outro.',
  nome_invalido: 'Informe seu nome.',
  whatsapp_invalido: 'Informe um WhatsApp válido com DDD.',
  pessoas_invalido: 'Quantidade de pessoas inválida.',
  nao_configurado: 'Reservas online em configuração. Fale conosco pelo WhatsApp.',
};

/* ---------------- utilitários ---------------- */
const brl = (n: number) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const ddmm = (ymd: string) => `${ymd.slice(8, 10)}/${ymd.slice(5, 7)}`;
const curto = (dia: string) => dia.slice(0, 3);
const mascaraFone = (v: string) => {
  const d = v.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};
const somaHoras = (hm: string, h: number) => {
  const [a, b] = hm.split(':').map(Number);
  const t = a * 60 + b + h * 60;
  return `${String(Math.floor(t / 60) % 24).padStart(2, '0')}${String(t % 60).padStart(2, '0')}00`;
};

function capturaUtm(): Utm {
  const out: Utm = {};
  try {
    const q = new URLSearchParams(window.location.search);
    UTM_KEYS.forEach((k) => { const v = q.get(k); if (v) out[k] = v; });
    out.landing = window.location.pathname + window.location.search;
    out.referrer = document.referrer || '';
    // primeiro toque da sessão vence (se o cliente navegar e voltar sem UTM, não perdemos a origem)
    const salvo = sessionStorage.getItem('imaginum_utm');
    if (salvo) {
      const prev = JSON.parse(salvo) as Utm;
      if (prev.utm_source || prev.fbclid || prev.gclid) return prev;
    }
    sessionStorage.setItem('imaginum_utm', JSON.stringify(out));
  } catch { /* navegador sem storage: segue com o que tem */ }
  return out;
}

function track(evento: string, params: Record<string, unknown>, eventID?: string) {
  try {
    if (window.fbq) window.fbq('track', evento, params, eventID ? { eventID } : undefined);
  } catch { /* noop */ }
}

/* ---------------- componente ---------------- */
export default function ReservaForm() {
  const [cal, setCal] = useState<Calendario | null>(null);
  const [erroCal, setErroCal] = useState('');
  const [data, setData] = useState('');
  const [turnoId, setTurnoId] = useState('');
  const [chegada, setChegada] = useState('');
  const [pessoas, setPessoas] = useState(2);
  const [nome, setNome] = useState('');
  const [fone, setFone] = useState('');
  const [email, setEmail] = useState('');
  const [obs, setObs] = useState('');
  const [aceite, setAceite] = useState(false);
  const [armadilha, setArmadilha] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState('');
  const [ok, setOk] = useState<Confirmacao | null>(null);
  const [utm, setUtm] = useState<Utm>({});

  const carregar = useCallback(async () => {
    setErroCal('');
    try {
      const r = await fetch('/api/reserva', { cache: 'no-store' });
      const j = (await r.json()) as Calendario;
      if (!j.ok) throw new Error(j.erro || 'erro');
      setCal(j);
    } catch (e) {
      const cod = e instanceof Error ? e.message : '';
      setErroCal(ERROS[cod] || 'Não conseguimos carregar as datas agora. Tente novamente em instantes.');
    }
  }, []);

  useEffect(() => {
    setUtm(capturaUtm());
    carregar();
    track('ViewContent', { content_name: 'Menu Degustação 179,90', content_category: 'reserva' });
  }, [carregar]);

  const dia = useMemo(() => cal?.datas.find((d) => d.data === data), [cal, data]);
  const turno = useMemo(() => dia?.turnos.find((t) => t.id === turnoId), [dia, turnoId]);
  const preco = cal?.preco_pessoa ?? 179.9;
  const precoCheio = cal?.preco_cheio ?? 209;
  const maxPorReserva = cal?.max_pessoas_reserva ?? 20;
  const whats = cal?.whatsapp_restaurante || WHATS_PADRAO;
  const maxPessoas = Math.max(1, Math.min(maxPorReserva, turno?.vagas ?? maxPorReserva));

  useEffect(() => { if (pessoas > maxPessoas) setPessoas(maxPessoas); }, [maxPessoas, pessoas]);

  // Com um único período no dia (ex.: 50 pessoas/dia), o turno é escolhido automaticamente
  const turnoUnico = !!dia && dia.turnos.length === 1;
  const escolherData = (d: string) => {
    setData(d); setErro('');
    const ts = cal?.datas.find((x) => x.data === d)?.turnos || [];
    if (ts.length === 1 && !ts[0].esgotado) { setTurnoId(ts[0].id); setChegada(ts[0].horarios[0] || ''); }
    else { setTurnoId(''); setChegada(''); }
  };
  const escolherTurno = (t: Turno) => {
    if (t.esgotado) return;
    setTurnoId(t.id); setChegada(t.horarios[0] || ''); setErro('');
    track('InitiateCheckout', { content_name: t.nome, value: preco * pessoas, currency: 'BRL' });
  };

  const podeEnviar = !!(data && turnoId && chegada && pessoas >= 1 && nome.trim().length >= 2 &&
    fone.replace(/\D/g, '').length >= 10 && aceite && !enviando);

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!podeEnviar) return;
    setEnviando(true); setErro('');
    try {
      const r = await fetch('/api/reserva', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data, turno: turnoId, chegada, pessoas, nome, whatsapp: fone, email, obs, utm, site: armadilha }),
      });
      const j = await r.json();
      if (!j.ok) {
        setErro(ERROS[j.erro] ? ERROS[j.erro] + (j.codigo ? ` (código ${j.codigo})` : '') : 'Não foi possível concluir. Tente de novo ou chame no WhatsApp.');
        if (['sem_vagas', 'data_indisponivel', 'turno_indisponivel', 'horario_indisponivel'].includes(j.erro)) carregar();
        return;
      }
      const conf = j as Confirmacao;
      setOk(conf);
      // ---- conversões ----
      track('Schedule', { value: conf.valor, currency: 'BRL', content_name: 'Menu Degustação 179,90', num_items: conf.pessoas }, conf.codigo);
      try {
        window.gtag?.('event', 'generate_lead', { value: conf.valor, currency: 'BRL', reserva_id: conf.codigo, pessoas: conf.pessoas, turno: conf.turno });
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'reserva_confirmada', reserva_id: conf.codigo, value: conf.valor, currency: 'BRL', pessoas: conf.pessoas, turno: conf.turno, data_reserva: conf.data });
      } catch { /* noop */ }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setErro('Falha de conexão. Verifique a internet e tente de novo.');
    } finally {
      setEnviando(false);
    }
  }

  /* ---------- tela de confirmação ---------- */
  if (ok) {
    const ymd = ok.data.replace(/-/g, '');
    const gcal = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Imaginum Sushi — Menu Degustação')}&dates=${ymd}T${ok.chegada.replace(':', '')}00/${ymd}T${somaHoras(ok.chegada, 2)}&ctz=America/Sao_Paulo&details=${encodeURIComponent(`Reserva ${ok.codigo} · ${ok.pessoas} pessoa(s)`)}`;
    return (
      <main className={s.page}>
        <section className={s.card}>
          <p className={s.kicker}>Reserva confirmada</p>
          <h1 className={s.titulo}>Te esperamos! 🍣</h1>
          <p className={s.codigo}>{ok.codigo}</p>
          <ul className={s.resumo}>
            <li><span>Data</span><b>{ok.dia}, {ddmm(ok.data)}</b></li>
            <li><span>Turno</span><b>{ok.turno}</b></li>
            <li><span>Chegada</span><b>{ok.chegada}</b></li>
            <li><span>Pessoas</span><b>{ok.pessoas}</b></li>
            <li><span>Menu Degustação</span><b>{brl(ok.valor)} <small>({brl(preco)} p/ pessoa)</small></b></li>
          </ul>
          <a className={s.btn} href={gcal} target="_blank" rel="noopener noreferrer">Adicionar à minha agenda</a>
          <p className={s.nota}>Apresente o código <b>{ok.codigo}</b> ao chegar. Para cancelar ou alterar, fale conosco pelo WhatsApp.</p>
        </section>
      </main>
    );
  }

  /* ---------- formulário ---------- */
  return (
    <main className={s.page}>
      <header className={s.hero}>
        <p className={s.kicker}>Imaginum Sushi · Curitiba</p>
        <h1 className={s.titulo}>Menu Degustação</h1>
        <p className={s.preco}>
          <span className={s.de}>de {brl(precoCheio)}</span> por <strong>{brl(preco)}</strong> <span className={s.pp}>por pessoa</span>
        </p>
        <p className={s.regras}>Segunda a quarta · 11h30 às 23h30 · exceto feriados · <b>válido somente com reserva</b></p>
      </header>

      {erroCal && (
        <div className={s.alerta}>
          {erroCal}{' '}
          <button type="button" className={s.link} onClick={carregar}>Tentar de novo</button> ou{' '}
          <a className={s.link} href={`https://wa.me/${whats}`} target="_blank" rel="noopener noreferrer">chame no WhatsApp</a>.
        </div>
      )}
      {!cal && !erroCal && <p className={s.carregando}>Carregando datas disponíveis…</p>}
      {cal && cal.campanha_ativa === false && <div className={s.alerta}>Esta campanha foi encerrada. Fique de olho no nosso Instagram para as próximas! 💛</div>}

      {cal && cal.campanha_ativa !== false && (
        <form className={s.card} onSubmit={enviar} noValidate>
          {/* 1. Data */}
          <fieldset className={s.bloco}>
            <legend><span className={s.num}>1</span> Escolha o dia</legend>
            {cal.datas.length === 0 ? (
              <p className={s.vazio}>Sem datas disponíveis no momento.</p>
            ) : (
              <div className={s.chips} role="listbox" aria-label="Datas">
                {cal.datas.map((d) => {
                  const lotado = d.turnos.every((t) => t.esgotado);
                  return (
                    <button key={d.data} type="button" role="option" aria-selected={data === d.data} disabled={lotado}
                      className={`${s.chipData} ${data === d.data ? s.ativo : ''}`} onClick={() => escolherData(d.data)}>
                      <small>{curto(d.dia)}</small>
                      <b>{ddmm(d.data)}</b>
                      {lotado && <em>esgotado</em>}
                    </button>
                  );
                })}
              </div>
            )}
          </fieldset>

          {/* 2. Turno */}
          {dia && turnoUnico && turno && (
            <p className={turno.vagas !== null && turno.vagas <= 15 ? s.urgente : s.ok} style={{ margin: '-14px 0 22px' }}>
              {turno.vagas !== null && turno.vagas <= 15 ? `Últimos ${turno.vagas} lugares para este dia` : 'Vagas disponíveis para este dia'}
            </p>
          )}
          {dia && !turnoUnico && (
            <fieldset className={s.bloco}>
              <legend><span className={s.num}>2</span> Escolha o turno</legend>
              <div className={s.turnos}>
                {dia.turnos.map((t) => (
                  <button key={t.id} type="button" disabled={t.esgotado}
                    className={`${s.turno} ${turnoId === t.id ? s.ativo : ''}`} onClick={() => escolherTurno(t)}>
                    <b>{t.nome}</b>
                    <span className={t.esgotado ? s.esgotado : t.vagas !== null && t.vagas <= 20 ? s.urgente : s.ok}>
                      {t.esgotado ? 'Esgotado' : t.vagas !== null && t.vagas <= 20 ? `Últimos ${t.vagas} lugares` : 'Vagas disponíveis'}
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {/* 3. Horário e pessoas */}
          {turno && (
            <fieldset className={s.bloco}>
              <legend><span className={s.num}>{turnoUnico ? 2 : 3}</span> Horário de chegada e pessoas</legend>
              <div className={s.chips}>
                {turno.horarios.map((h) => (
                  <button key={h} type="button" className={`${s.chipHora} ${chegada === h ? s.ativo : ''}`} onClick={() => setChegada(h)}>{h}</button>
                ))}
              </div>
              <div className={s.pessoas}>
                <span>Pessoas</span>
                <div className={s.stepper}>
                  <button type="button" aria-label="Menos" onClick={() => setPessoas((p) => Math.max(1, p - 1))} disabled={pessoas <= 1}>−</button>
                  <output aria-live="polite">{pessoas}</output>
                  <button type="button" aria-label="Mais" onClick={() => setPessoas((p) => Math.min(maxPessoas, p + 1))} disabled={pessoas >= maxPessoas}>+</button>
                </div>
                <span className={s.total}>Total estimado: <b>{brl(preco * pessoas)}</b></span>
              </div>
              {pessoas >= maxPorReserva && (
                <p className={s.nota}>Grupo maior que {maxPorReserva}? <a className={s.link} href={`https://wa.me/${whats}?text=${encodeURIComponent('Olá! Quero reservar o Menu Degustação para um grupo grande.')}`} target="_blank" rel="noopener noreferrer">Fale com a gente no WhatsApp</a>.</p>
              )}
            </fieldset>
          )}

          {/* 4. Dados */}
          {turno && (
            <fieldset className={s.bloco}>
              <legend><span className={s.num}>{turnoUnico ? 3 : 4}</span> Seus dados</legend>
              <label className={s.campo}>Nome completo
                <input value={nome} onChange={(e) => setNome(e.target.value)} autoComplete="name" required maxLength={80} />
              </label>
              <label className={s.campo}>WhatsApp com DDD
                <input value={fone} onChange={(e) => setFone(mascaraFone(e.target.value))} inputMode="tel" autoComplete="tel" placeholder="(41) 99999-9999" required />
              </label>
              <label className={s.campo}>E-mail <small>(opcional)</small>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" maxLength={120} />
              </label>
              <label className={s.campo}>Observações <small>(aniversário, restrição alimentar…)</small>
                <textarea value={obs} onChange={(e) => setObs(e.target.value)} rows={2} maxLength={300} />
              </label>
              {/* anti-robô: invisível para pessoas */}
              <input className={s.hp} tabIndex={-1} autoComplete="off" value={armadilha} onChange={(e) => setArmadilha(e.target.value)} name="site" aria-hidden="true" />
              <label className={s.aceite}>
                <input type="checkbox" checked={aceite} onChange={(e) => setAceite(e.target.checked)} />
                <span>Concordo em receber a confirmação da reserva pelo WhatsApp e com o uso dos meus dados para esta reserva (LGPD).</span>
              </label>
            </fieldset>
          )}

          {erro && <div className={s.alerta} role="alert">{erro}</div>}

          {turno && (
            <button type="submit" className={s.btn} disabled={!podeEnviar}>
              {enviando ? 'Reservando…' : `Reservar ${pessoas} ${pessoas > 1 ? 'lugares' : 'lugar'} · ${dia ? `${curto(dia.dia)} ${ddmm(dia.data)}` : ''} às ${chegada}`}
            </button>
          )}
        </form>
      )}

      <p className={s.rodape}>Promoção válida de segunda a quarta, exceto feriados, mediante reserva e sujeita à disponibilidade. Preço por pessoa.</p>
    </main>
  );
}
