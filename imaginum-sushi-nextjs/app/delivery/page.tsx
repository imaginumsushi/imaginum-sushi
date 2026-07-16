import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Delivery — Imaginum Sushi em Curitiba pelo App e iFood',
  description: 'Delivery do Imaginum Sushi em Curitiba. Peça pelo nosso app exclusivo (App Store e Google Play) ou pelo iFood. Entregamos em Curitiba e região.',
  alternates: { canonical: '/delivery' },
}

export default function Delivery() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '6rem', minHeight: '100vh' }}>
        <section className="section">
          <div className="container" style={{ maxWidth: 700, textAlign: 'center' }}>
            <p className="tag-pill">Peça sem sair de casa</p>
            <h1>Delivery <em className="gold">Imaginum Sushi</em> em Curitiba</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem' }}>Leve a experiência Imaginum até a sua casa. Delivery próprio pelo app ou pelo iFood, com entrega em Curitiba e região.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Baixar na App Store</a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Disponível no Google Play</a>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>Também disponível no iFood</p>
          </div>
        </section>
        <section className="section section-cream" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
          <div className="container" style={{ maxWidth: 700 }}>
            <h2 style={{ color: 'var(--black)', marginBottom: '1.5rem' }}>Bairros atendidos em Curitiba</h2>
            <p>Atendemos Vila Izabel, Água Verde, Batel, Bigorrilho, Mercês, Campo Comprido, Portão, Prado Velho, Rebouças, Seminário e regiões próximas. Para confirmar sua área, ligue para <a href="tel:+554130823093" style={{ color: 'var(--gold-dark)', fontWeight: 600 }}>(41) 3082-3093</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
