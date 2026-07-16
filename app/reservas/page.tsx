import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Reservas — Imaginum Sushi Curitiba',
  description: 'Reserve sua mesa no Imaginum Sushi em Curitiba. Ligue (41) 3082-3093 ou use o WhatsApp. Atendemos grupos e eventos na Vila Izabel.',
  alternates: { canonical: '/reservas' },
}

export default function Reservas() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '6rem', minHeight: '100vh' }}>
        <section className="section">
          <div className="container" style={{ maxWidth: 700 }}>
            <p className="tag-pill">Reserve sua mesa</p>
            <h1>Reservas — <em className="gold">Imaginum Sushi</em></h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem' }}>
              Para garantir sua mesa, entre em contato pelo telefone ou WhatsApp. Recomendamos reservar com antecedência, especialmente nos fins de semana.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1.5rem' }}>
                <h3 style={{ color: 'var(--gold)', marginBottom: '0.5rem' }}>📞 Telefone e WhatsApp</h3>
                <p style={{ fontSize: '1.5rem', color: 'var(--white)', fontWeight: 600 }}>(41) 3082-3093</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>Atendemos reservas por ligação e WhatsApp</p>
                <a href="tel:+554130823093" className="btn btn-gold" style={{ marginTop: '1rem', fontSize: '0.85rem', padding: '10px 20px' }}>Ligar agora</a>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1.5rem' }}>
                <h3 style={{ color: 'var(--gold)', marginBottom: '0.75rem' }}>🕐 Horários de funcionamento</h3>
                <p><strong style={{ color: 'var(--white)' }}>Almoço:</strong> Seg–Sex 11h30 às 14h30 · Sáb e feriados 11h30 às 15h</p>
                <p style={{ marginTop: '0.5rem' }}><strong style={{ color: 'var(--white)' }}>Jantar:</strong> Seg–Sáb 18h às 23h30</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1.5rem' }}>
                <h3 style={{ color: 'var(--gold)', marginBottom: '0.75rem' }}>📍 Endereço</h3>
                <p>Rua Tabajaras, 714 — Vila Izabel, Curitiba/PR</p>
                <a href="https://maps.google.com/?q=Imaginum+Sushi+Curitiba" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ marginTop: '1rem', fontSize: '0.85rem', padding: '10px 20px' }}>Ver no Google Maps</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
