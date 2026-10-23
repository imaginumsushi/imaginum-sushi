// IMAGINUM — ponte entre a página /reserva e a planilha (Google Apps Script).
// O token fica só no servidor (variável de ambiente), nunca no navegador.
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const API = process.env.RESERVA_API_URL || '';
const TOKEN = process.env.RESERVA_TOKEN || '';

function naoConfigurado() {
  return NextResponse.json({ ok: false, erro: 'nao_configurado' }, { status: 503 });
}

// GET /api/reserva → datas, turnos, horários e vagas
export async function GET() {
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
    return NextResponse.json(data, { status: data.ok ? 200 : 409 });
  } catch {
    return NextResponse.json({ ok: false, erro: 'falha_conexao' }, { status: 502 });
  }
}
