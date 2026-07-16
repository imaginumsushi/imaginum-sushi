import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Reservas — Imaginum Sushi Curitiba',
  description: 'Reserve sua mesa no Imaginum Sushi em Curitiba via WhatsApp. Atendemos grupos e eventos na Vila Izabel. (41) 3082-3093.',
  alternates: { canonical: '/reservas' },
}

export default function Reservas() {
  return (
    <>
      <Nav />
      <main style={{paddingTop:'6rem',minHeight:'100vh'}}>
        <section className="section">
          <div className="container" style={{maxWidth:700}}>
            <p className="tag-pill">Reserve sua mesa</p>
            <h1>Reservas — <em className="gold">Imaginum Sushi</em></h1>
            <p style={{marginTop:'1rem',fontSize:'1.05rem'}}>
              Faça sua reserva pelo WhatsApp ou telefone. Recomendamos reservar com antecedência, especialmente nos fins de semana.
            </p>

            <div style={{display:'flex',flexDirection:'column',gap:'1.5rem',marginTop:'2.5rem'}}>

              <div style={{background:'rgba(37,211,102,0.08)',border:'1.5px solid rgba(37,211,102,0.3)',borderRadius:12,padding:'1.75rem'}}>
                <h3 style={{color:'#25d366',marginBottom:'0.5rem',fontSize:'1rem',textTransform:'uppercase',letterSpacing:'0.08em'}}>📲 WhatsApp</h3>
                <p style={{fontSize:'1.6rem',color:'var(--white)',fontWeight:700,fontFamily:'var(--font-display)'}}>(41) 3082-3093</p>
                <p style={{marginTop:'0.5rem',fontSize:'0.9rem',color:'rgba(255,255,255,0.55)'}}>Resposta rápida para reservas e informações</p>
                <a
                  href="https://wa.me/554130823093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{marginTop:'1.25rem',background:'#25d366',color:'#fff',fontSize:'0.9rem',padding:'12px 24px'}}
                >
                  Reservar via WhatsApp 📲
                </a>
              </div>

              <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:12,padding:'1.5rem'}}>
                <h3 style={{color:'var(--gold)',marginBottom:'0.75rem'}}>🕐 Horários de funcionamento</h3>
                <p><strong style={{color:'var(--white)'}}>Segunda a Sábado:</strong> 11h30 às 23h30</p>
                <p style={{marginTop:'0.5rem',color:'rgba(255,255,255,0.5)'}}>Domingo: Fechado</p>
              </div>

              <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:12,padding:'1.5rem'}}>
                <h3 style={{color:'var(--gold)',marginBottom:'0.75rem'}}>📍 Endereço</h3>
                <p>Rua Tabajaras, 714 — Vila Izabel, Curitiba/PR</p>
                <a href="https://maps.google.com/?q=Imaginum+Sushi+Curitiba" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{marginTop:'1rem',fontSize:'0.85rem',padding:'10px 20px'}}>Ver no Google Maps</a>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
