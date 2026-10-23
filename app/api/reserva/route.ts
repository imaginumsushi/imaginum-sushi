// IMAGINUM — ponte entre a página /reserva e a planilha (Google Apps Script).
// O token fica só no servidor (variável de ambiente), nunca no navegador.
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const API = process.env.RESERVA_API_URL || '';
const TOKEN = process.env.RESERVA_TOKEN || '';
// GA4 via Measurement Protocol (servidor -> Google). Só envia se GA4_API_SECRET estiver cadastrado na Vercel.
const GA_ID = process.env.GA4_MEASUREMENT_ID || 'G-9Z1G7EWZZX';
const GA_SECRET = process.env.GA4_API_SECRET || '';

async function enviaGa4(body: Record<string, unknown>, data: Record<string, unknown>) {
  if (!GA_SECRET) return;
  const cid = String(body.ga_client_id || '') || Date.now() + '.' + Math.floor(Math.random() * 1e9);
  const sid = Number(body.ga_session_id || 0);
  const utm = (typeof body.utm === 'object' && body.utm ? body.utm : {}) as Record<string, string>;
  const params: Record<string, unknown> = {
    currency: 'BRL',
    value: Number(data.valor || 0),
    transaction_id: String(data.codigo || ''),
    pessoas: Number(data.pessoas || 0),
    data_reserva: String(data.data || ''),
    origem: utm.utm_source || '(direto)',
    campanha: utm.utm_campaign || '',
    engagement_time_msec: 1,
  };
  if (sid) params.session_id = sid;
  try {
    await fetch('https://www.google-analytics.com/mp/collect?measurement_id=' + GA_ID + '&api_secret=' + GA_SECRET, {
      method: 'POST',
      body: JSON.stringify({ client_id: cid, events: [{ name: 'generate_lead', params }] }),
      cache: 'no-store',
    });
  } catch { /* medição nunca derruba a reserva */ }
}

function naoConfigurado() {
  return NextResponse.json({ ok: false, erro: 'nao_configurado' }, { status: 503 });
}

// GET /api/reserva → datas, turnos, horários e vagas
export async function GET(req: NextRequest) {
  // DIAGNÓSTICO TEMPORÁRIO do GA4 (remover depois): não mostra a chave, só tamanho e impressão digital
  if (req.nextUrl.searchParams.get('diag') === 'ga4-7319') {
    let hs = 0;
    for (const c of GA_SECRET) hs = (hs * 31 + (c.codePointAt(0) || 0)) >>> 0;
    const corpo = JSON.stringify({ client_id: '555.777', events: [{ name: 'teste_diag_mp', params: { engagement_time_msec: 1 } }] });
    const dbg = await fetch('https://www.google-analytics.com/debug/mp/collect?measurement_id=' + GA_ID + '&api_secret=' + GA_SECRET, { method: 'POST', body: corpo, cache: 'no-store' }).then((r) => r.json()).catch((e) => String(e));
    const prod = await fetch('https://www.google-analytics.com/mp/collect?measurement_id=' + GA_ID + '&api_secret=' + GA_SECRET, { method: 'POST', body: corpo, cache: 'no-store' }).then((r) => r.status).catch((e) => String(e));
    return NextResponse.json({ tamanho: GA_SECRET.length, impressao: hs, gaId: GA_ID, debug: dbg, envio: prod });
  }
  if (!API || !TOKEN) return naoConfigurado();
  try {
    const r = await fetch(`${API}?action=calendario&token=${encodeURIComponent(TOKEN)}`, {
      cache: 'no-store',
      redirect: 'follow',
    });
    const data = await r.json();
    return NextResponse.json(data, { headers: { 'Cache-Control': 'no-store' } });
  } catch {
    return NextResponse.json({ ok: false, erro: 'falha_conexao' }, { status: 502 });
  }
}

// POST /api/reserva → cria a reserva
export async function POST(req: NextRequest) {
  if (!API || !TOKEN) return naoConfigurado();
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, erro: 'pedido_invalido' }, { status: 400 });
  }
  // campo-armadilha anti-robô: humanos não preenchem
  if (body.site) return NextResponse.json({ ok: false, erro: 'pedido_invalido' }, { status: 400 });

  const payload = {
    token: TOKEN,
    data: String(body.data || ''),
    turno: String(body.turno || ''),
    chegada: String(body.chegada || ''),
    pessoas: Number(body.pessoas || 0),
    nome: String(body.nome || '').slice(0, 80),
    whatsapp: String(body.whatsapp || '').slice(0, 25),
    email: String(body.email || '').slice(0, 120),
    obs: String(body.obs || '').slice(0, 300),
    utm: typeof body.utm === 'object' && body.utm ? body.utm : {},
  };

  try {
    const r = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      redirect: 'follow',
      cache: 'no-store',
    });
    const data = await r.json();
    if (data.ok) await enviaGa4(body, data);
    return NextResponse.json(data, { status: data.ok ? 200 : 409 });
  } catch {
    return NextResponse.json({ ok: false, erro: 'falha_conexao' }, { status: 502 });
  }
}
