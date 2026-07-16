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
              Para garantir sua mesa, entre em contato pelo telefone ou WhatsApp.
              Recomendamos reservar com antecedência, especialmente nos fins de semana.
            </p>

            <div style={{display:'flex',flexDirection:'column',gap:'1.5rem',marginTop:'2.5rem'}}>

              <div style={{background:'rgba(37,211,102,0.08)',border:'1.5px solid rgba(37,211,102,0.3)',borderRadius:12,padding:'1.75rem'}}>
                <h3 style={{color:'#25d366',marginBottom:'0.5rem',fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em',fontFamily:'var(--font-body)'}}>📞 Telefone e WhatsApp</h3>
                <p style={{fontSize:'1.6rem',color:'var(--white)',fontWeight:700,fontFamily:'var(--font-display)'}}>(41) 3082-3093</p>
                <p style={{marginTop:'0.5rem',fontSize:'0.9rem',color:'rgba(255,255,255,0.55)'}}>Atendemos reservas por ligação e WhatsApp</p>
                <div style={{display:'flex',gap:'0.75rem',marginTop:'1.25rem',flexWrap:'wrap'}}>
                  <a
                    href="https://wa.me/554130823093"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{background:'#25d366',color:'#fff',fontSize:'0.88rem',padding:'11px 22px'}}
                  >
                    Entrar no WhatsApp 📲
                  </a>
                  <a
                    href="tel:+554130823093"
                    className="btn btn-outline"
                    style={{fontSize:'0.88rem',padding:'11px 22px'}}
                  >
                    Ligar agora 📞
                  </a>
                </div>
              </div>

              <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:12,padding:'1.5rem'}}>
                <h3 style={{color:'var(--gold)',marginBottom:'0.75rem',fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em',fontFamily:'var(--font-body)'}}>🕐 Horários de funcionamento</h3>
                <p><strong style={{color:'var(--white)'}}>Seg–Sáb:</strong> 11h30–23h30</p>
                <p style={{marginTop:'0.5rem',color:'rgba(255,255,255,0.5)'}}>Domingo: Fechado</p>
              </div>

              <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',borderRadius:12,padding:'1.5rem'}}>
                <h3 style={{color:'var(--gold)',marginBottom:'0.75rem',fontSize:'0.8rem',textTransform:'uppercase',letterSpacing:'0.1em',fontFamily:'var(--font-body)'}}>📍 Endereço</h3>
                <p>Rua Tabajaras, 714 — Vila Izabel, Curitiba/PR</p>
                <a
                  href="https://maps.google.com/?q=Imaginum+Sushi+Curitiba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{marginTop:'1rem',fontSize:'0.85rem',padding:'10px 20px'}}
                >
                  Ver no Google Maps
                </a>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
