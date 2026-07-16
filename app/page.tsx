import Nav from '@/components/Nav'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const menuDestaques = [
  { cat: 'Exclusivos', nome: 'Carpaji', desc: 'Cogumelos Shimeji enroladinhos em fina fatia de salmão braseado com molho tarê', preco: 'R$ 49,00' },
  { cat: 'Exclusivos', nome: 'Ceviche do Chef', desc: 'Peixe cru incrementado com limão, anéis de lula e especiarias da casa', preco: 'R$ 59,00' },
  { cat: 'Hots', nome: 'Hot Special One', desc: 'Salmão e cream cheese, coberto com alho poró e molho tarê artesanal', preco: 'a partir de R$ 22,20' },
  { cat: 'Sashimis', nome: 'Salmão Crispy', desc: 'Sashimi na crosta de gergelim com geleia de pimenta e crispy de couve', preco: 'R$ 51,00' },
  { cat: 'Combinados', nome: 'Comb Osaka 32 PÇS', desc: '12 Sashimis, uramakis e hots — a seleção mais pedida da casa', preco: 'R$ 249,00' },
  { cat: 'Sobremesas', nome: 'Petit Gateau', desc: 'Petit gateau com sorvete de creme', preco: 'R$ 49,00' },
]

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO FULLSCREEN */}
      <section className="hero">
        <Image
          src="/hero.jpg"
          alt="Imaginum Sushi — Fachada Vila Izabel Curitiba"
          fill
          priority
          style={{objectFit:'cover',objectPosition:'center 30%',zIndex:0}}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-eyebrow">Japanese Fusion Food · Vila Izabel, Curitiba</p>
            <h1 className="hero-title">
              O sushi<br />que alimenta<br /><em>até a alma</em>
            </h1>
            <p className="hero-subtitle">
              Ingredientes frescos selecionados diariamente.<br />
              Rua Tabajaras, 714 — desde 2013.
            </p>
            <div className="hero-actions">
              <a href="https://imaginumsushi.menudino.com/" target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
                Peça Aqui
              </a>
              <a href="https://wa.me/554130823093" target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">
                Reservar 📲
              </a>
              <Link href="/cardapio" className="btn-hero-ghost">Ver Cardápio</Link>
            </div>
          </div>
          <div className="hero-info">
            <span><strong>Seg–Sáb</strong></span>
            <span>11h30–23h30</span>
            <span style={{marginTop:'0.5rem'}}><strong>Dom</strong></span>
            <span>Fechado</span>
            <span style={{marginTop:'0.5rem'}}><strong>(41) 3082-3093</strong></span>
          </div>
        </div>
      </section>

      <div className="wave-bar" />

      {/* DESTAQUES */}
      <section className="section" style={{padding:'0'}}>
        <div className="destaques-grid">
          <div className="destaque-item">
            <div className="destaque-icon">🍣</div>
            <h3>Ingredientes frescos</h3>
            <p>Selecionados e entregues diariamente para garantir frescor em cada peça.</p>
          </div>
          <div className="destaque-item">
            <div className="destaque-icon">🛒</div>
            <h3>Delivery online</h3>
            <p>Peça pelo nosso site interativo de delivery. Entregamos em Curitiba e região.</p>
          </div>
          <div className="destaque-item">
            <div className="destaque-icon">🎴</div>
            <h3>Menu Degustação</h3>
            <p>A partir de R$ 189,90/pessoa. De seg a sex no almoço — exceto feriados.</p>
          </div>
          <div className="destaque-item">
            <div className="destaque-icon">📲</div>
            <h3>Reservas fáceis</h3>
            <p>Reserve via WhatsApp com rapidez. Atendemos grupos e eventos especiais.</p>
          </div>
        </div>
      </section>

      <div className="wave-bar" />

      {/* SOBRE */}
      <section className="section">
        <div className="container">
          <div className="sobre-grid">
            <div>
              <p className="tag-pill">Sobre o Imaginum</p>
              <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:300,color:'var(--white)',lineHeight:1.15,marginBottom:'1.5rem'}}>
                Japanese Fusion Food<br /><em style={{fontStyle:'italic',color:'var(--gold)'}}>no coração de Curitiba</em>
              </h2>
              <p style={{marginBottom:'1rem'}}>
                O Imaginum Sushi nasceu da paixão pela culinária japonesa e do desejo de criar uma experiência gastronômica completa em Curitiba. Localizado na Rua Tabajaras, 714, na Vila Izabel, somos referência em Japanese Fusion Food na cidade.
              </p>
              <p>
                Trabalhamos com ingredientes frescos selecionados diariamente — salmão, atum e frutos do mar que garantem o sabor autêntico em cada peça que preparamos.
              </p>
              <div className="sobre-stats">
                <div className="stat"><div className="stat-num">4.8★</div><div className="stat-label">Nota no Google</div></div>
                <div className="stat"><div className="stat-num">2013</div><div className="stat-label">Fundação</div></div>
                <div className="stat"><div className="stat-num">100+</div><div className="stat-label">Itens no cardápio</div></div>
                <div className="stat"><div className="stat-num">Vila<br/>Izabel</div><div className="stat-label">Curitiba/PR</div></div>
              </div>
            </div>
            <div className="sobre-img">
              <Image
                src="/hero.jpg"
                alt="Ambiente interno do Imaginum Sushi em Curitiba, Vila Izabel"
                fill
                style={{objectFit:'cover',objectPosition:'center'}}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="wave-bar" />

      {/* MENU PREVIEW */}
      <section className="section" style={{paddingTop:'5rem',paddingBottom:'0'}}>
        <div className="container" style={{marginBottom:'2.5rem'}}>
          <p className="tag-pill">Nosso cardápio</p>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:'1rem'}}>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:300,color:'var(--white)',lineHeight:1.15}}>
              Destaques do <em style={{fontStyle:'italic',color:'var(--gold)'}}>menu</em>
            </h2>
            <Link href="/cardapio" className="btn btn-outline">Cardápio completo</Link>
          </div>
        </div>
        <div className="menu-grid">
          {menuDestaques.map((item, i) => (
            <div key={i} className="menu-item">
              <p className="menu-item-cat">{item.cat}</p>
              <h3>{item.nome}</h3>
              <p>{item.desc}</p>
              <p className="menu-item-price">{item.preco}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="wave-bar" style={{marginTop:0}} />

      {/* MENU DEGUSTAÇÃO */}
      <section className="section">
        <div className="container">
          <p className="tag-pill">Menu Degustação</p>
          <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:300,color:'var(--white)',lineHeight:1.15,marginBottom:'0.75rem'}}>
            Há quem chame de <em style={{fontStyle:'italic',color:'var(--gold)'}}>Rodízio</em>
          </h2>
          <p style={{marginBottom:'3rem',maxWidth:520,fontSize:'0.88rem'}}>
            Aqui no Imaginum chamamos de Menu Degustação. Individual e para consumo no local. Iniciamos com entradas e seguimos com sushis e sashimis — você escolhe como continuar.
          </p>
          <div className="degust-grid">
            <div className="degust-item">
              <p className="degust-label" style={{color:'var(--gold)'}}>Almoço</p>
              <p className="degust-period">Seg–Sex<br/><span style={{fontSize:'0.72rem',opacity:0.6}}>exceto feriados</span></p>
              <p className="degust-price">189<span style={{fontSize:'1.4rem'}}>,90</span></p>
              <p className="degust-per">por pessoa</p>
            </div>
            <div className="degust-item">
              <p className="degust-label" style={{color:'#3c64b4'}}>Jantar</p>
              <p className="degust-period">Seg–Qui<br/><span style={{fontSize:'0.72rem',opacity:0.6}}>exceto feriados</span></p>
              <p className="degust-price">199<span style={{fontSize:'1.4rem'}}>,90</span></p>
              <p className="degust-per">por pessoa</p>
            </div>
            <div className="degust-item">
              <p className="degust-label" style={{color:'var(--orange)'}}>Sex, Sáb e Feriados</p>
              <p className="degust-period">Almoço e Jantar</p>
              <p className="degust-price">219<span style={{fontSize:'1.4rem'}}>,90</span></p>
              <p className="degust-per">por pessoa</p>
            </div>
          </div>
          <div style={{marginTop:'2rem',textAlign:'center'}}>
            <a href="https://wa.me/554130823093" target="_blank" rel="noopener noreferrer" className="btn btn-green">
              Reservar para o Degustação 📲
            </a>
          </div>
        </div>
      </section>

      <div className="wave-bar" />

      {/* FAQ */}
      <FAQ />

      <div className="wave-bar" />

      {/* LOCALIZAÇÃO */}
      <section className="section">
        <div className="container">
          <div className="local-grid">
            <div>
              <p className="tag-pill">Como nos encontrar</p>
              <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:300,color:'var(--white)',lineHeight:1.15,marginBottom:'2.5rem'}}>
                Venha nos visitar<br /><em style={{fontStyle:'italic',color:'var(--gold)'}}>em Curitiba</em>
              </h2>
              <div>
                <div className="local-row">
                  <span className="local-row-icon">📍</span>
                  <div><h3>Endereço</h3><p>Rua Tabajaras, 714 — Vila Izabel<br/>Curitiba/PR</p></div>
                </div>
                <div className="local-row">
                  <span className="local-row-icon">🕐</span>
                  <div><h3>Horários</h3><p>Seg–Sáb: 11h30–23h30<br/>Domingo: Fechado</p></div>
                </div>
                <div className="local-row">
                  <span className="local-row-icon">📞</span>
                  <div><h3>Contato</h3><p><a href="tel:+554130823093">(41) 3082-3093</a><br/><a href="https://wa.me/554130823093" target="_blank" rel="noopener noreferrer">WhatsApp</a></p></div>
                </div>
                <div className="local-row">
                  <span className="local-row-icon">💳</span>
                  <div><h3>Pagamento</h3><p>Dinheiro · Pix · Cartão de crédito e débito</p></div>
                </div>
              </div>
              <div style={{display:'flex',gap:'0.75rem',marginTop:'2rem',flexWrap:'wrap'}}>
                <a href="https://maps.google.com/?q=Imaginum+Sushi+Curitiba" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Ver no Maps</a>
                <a href="https://wa.me/554130823093" target="_blank" rel="noopener noreferrer" className="btn btn-green">Reservar 📲</a>
              </div>
            </div>
            <div>
              <div className="map-box">
                <span style={{fontSize:'2rem',opacity:0.3}}>🗺️</span>
                <p style={{fontSize:'0.78rem',opacity:0.4,textAlign:'center'}}>Insira o iframe do Google Maps<br/>Rua Tabajaras, 714 — Curitiba/PR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
