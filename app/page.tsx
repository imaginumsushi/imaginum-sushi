import Nav from '@/components/Nav'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const destaques = [
  { emoji: '🍱', nome: 'Ceviche', desc: 'Polvo, salmão, tilápia, cheiro verde e cebola roxa com molho da casa. 200g', preco: 'R$ 59,00', cat: 'Happy Hour' },
  { emoji: '🍣', nome: 'Uramaki Misto', desc: '8 unid — Filadélfia, Filadélfia Especial, Imaginum, Ebi Especial', preco: 'R$ 43,00', cat: 'Uramakis' },
  { emoji: '🔥', nome: 'Hot Balls', desc: 'Salmão e especiarias em massa crocante — 4 ou 8 unidades', preco: 'a partir de R$ 19,00', cat: 'Hots' },
  { emoji: '🐟', nome: 'Tuna Tartar', desc: 'Atum, cebola roxa, leite de coco, coentros e especiarias com chips de banana da terra', preco: 'R$ 69,00', cat: 'Entradas' },
  { emoji: '🦐', nome: 'Rock Shrimp Spicy', desc: 'Camarões em tempurá, maionese de Sriracha, ovas e cebolinha', preco: 'R$ 69,00', cat: 'Entradas' },
  { emoji: '🍜', nome: 'Yakissoba Frango', desc: 'Massa fresca com legumes', preco: 'R$ 54,00', cat: 'Yakissoba' },
]

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero section">
        <div className="container">
          <div className="hero-photo" />
          <div className="hero-gradient" />
          <div className="hero-waves" />
          <div className="hero-content">
            <p className="hero-eyebrow">Japanese Fusion Food · Curitiba</p>
            <h1 className="hero-title">
              O melhor sushi<br />de <em>Curitiba</em><br />está na Vila Izabel
            </h1>
            <p className="hero-desc">
              Combinados frescos, temakis artesanais, hot rolls e sashimis preparados com ingredientes selecionados diariamente. Almoço e jantar na Rua Tabajaras, 714.
            </p>
            <div className="hero-actions">
              <a href="https://imaginumsushi.menudino.com/" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Peça Aqui 🛒</a>
              <a href="https://wa.me/554130823093" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Reservar via WhatsApp 📲</a>
            </div>
            <div className="hero-bar">
              <div className="hero-bar-item"><strong>Rua Tabajaras, 714</strong>Vila Izabel — Curitiba/PR</div>
              <div className="hero-bar-item"><strong>(41) 3082-3093</strong>Reservas e WhatsApp</div>
              <div className="hero-bar-item"><strong>Seg–Sáb</strong>11h30–23h30</div>
              <div className="hero-bar-item"><strong>Delivery</strong>menudino.com</div>
            </div>
          </div>
        </div>
      </section>

      <div className="wave-bar" />

      {/* DESTAQUES */}
      <section className="section section-dark">
        <div className="container">
          <div className="destaques-grid">
            <div className="destaque-item"><div className="destaque-icon">🍣</div><h3 className="c-gold">Ingredientes frescos</h3><p>Salmão, atum e frutos do mar selecionados diariamente para garantir frescor em cada peça.</p></div>
            <div className="destaque-item"><div className="destaque-icon">🚀</div><h3 className="c-blue">Delivery próprio</h3><p>App exclusivo na App Store e Google Play. Também no iFood. Entregamos em Curitiba e região.</p></div>
            <div className="destaque-item"><div className="destaque-icon">🏮</div><h3 className="c-orange">Ambiente sofisticado</h3><p>Espaço aconchegante na Vila Izabel, ideal para almoços de negócios e jantares especiais.</p></div>
            <div className="destaque-item"><div className="destaque-icon">📅</div><h3 className="c-green">Reservas fáceis</h3><p>Reserve pelo (41) 3082-3093 ou WhatsApp. Atendemos grupos e eventos sob consulta.</p></div>
          </div>
        </div>
      </section>

      <div className="wave-bar" />

      {/* SOBRE */}
      <section className="section section-light">
        <div className="container">
          <div className="sobre-grid">
            <div>
              <p className="tag-pill" style={{color:'var(--gold-dk)',borderColor:'var(--gold-dk)'}}>Sobre o restaurante</p>
              <h2 style={{color:'var(--black)',marginBottom:'1.25rem'}}>Japanese Fusion Food no coração de Curitiba</h2>
              <p style={{marginBottom:'1rem'}}>O Imaginum Sushi nasceu da paixão pela culinária japonesa e do desejo de trazer uma experiência gastronômica completa para Curitiba. Localizado na Rua Tabajaras, 714, na Vila Izabel, somos referência em Japanese Fusion Food na cidade.</p>
              <p style={{marginBottom:'1rem'}}>Trabalhamos com ingredientes frescos selecionados diariamente — salmão, atum e frutos do mar que garantem o sabor autêntico em cada combinado, temaki e hot roll que preparamos.</p>
              <p>Além do salão sofisticado, oferecemos delivery pelo nosso site e pelo iFood.</p>
              <div className="sobre-stats">
                <div className="stat"><div className="stat-num">4.8★</div><div className="stat-label">Nota no Google</div></div>
                <div className="stat"><div className="stat-num">App</div><div className="stat-label">iOS e Android</div></div>
                <div className="stat"><div className="stat-num">2×</div><div className="stat-label">Almoço e Jantar</div></div>
                <div className="stat"><div className="stat-num">Vila<br/>Izabel</div><div className="stat-label">Curitiba/PR</div></div>
              </div>
            </div>
            <div className="sobre-logo">
              <Image src="/logo.png" alt="Imaginum Sushi — Japanese Fusion Food Curitiba" width={280} height={120} style={{objectFit:'contain'}} />
            </div>
          </div>
        </div>
      </section>

      <div className="wave-bar" />

      {/* CARDÁPIO PREVIEW */}
      <section className="section">
        <div className="container">
          <p className="tag-pill">Nosso cardápio</p>
          <h2 style={{marginBottom:'0.75rem'}}>Destaques do <em className="gold">menu</em></h2>
          <p style={{marginBottom:'2.5rem',maxWidth:520}}>Uma seleção do que há de melhor em Japanese Fusion Food. Veja o cardápio completo com todos os pratos e preços.</p>
          <div className="cardapio-grid">
            {destaques.map((p,i) => (
              <article key={i} className="prato-card">
                <div className="prato-emoji" role="img" aria-label={p.nome}>{p.emoji}</div>
                <div className="prato-body">
                  <h3>{p.nome}</h3>
                  <p>{p.desc}</p>
                  <div className="prato-footer">
                    <span className="prato-preco">{p.preco}</span>
                    <span className="prato-cat">{p.cat}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div style={{textAlign:'center',marginTop:'2.5rem'}}>
            <Link href="/cardapio" className="btn btn-gold">Ver cardápio completo</Link>
          </div>
        </div>
      </section>

      <div className="wave-bar" />

      {/* FAQ */}
      <FAQ />

      <div className="wave-bar" />

      {/* LOCALIZAÇÃO */}
      <section className="section section-light">
        <div className="container">
          <div className="local-grid">
            <div>
              <p className="tag-pill" style={{color:'var(--gold-dk)',borderColor:'var(--gold-dk)'}}>Como nos encontrar</p>
              <h2 style={{color:'var(--black)',marginBottom:'2rem'}}>Venha nos visitar em <em style={{color:'var(--gold-dk)',fontStyle:'normal'}}>Curitiba</em></h2>
              <div className="local-info">
                <div className="local-row">
                  <div className="local-icon gold">📍</div>
                  <div><h3 className="gold">Endereço</h3><p>Rua Tabajaras, 714 — Vila Izabel<br/>Curitiba/PR — CEP 80035-270</p></div>
                </div>
                <div className="local-row">
                  <div className="local-icon blue">🕐</div>
                  <div><h3 className="blue">Horários</h3><p>Seg–Sáb: 11h30–23h30<br/>Domingo: Fechado</p></div>
                </div>
                <div className="local-row">
                  <div className="local-icon green">📞</div>
                  <div><h3 className="green">Contato</h3><p><a href="tel:+554130823093" style={{color:'var(--gray-700)'}}>(41) 3082-3093</a><br/>Reservas e WhatsApp</p></div>
                </div>
                <div className="local-row">
                  <div className="local-icon gold">💳</div>
                  <div><h3 className="gold">Pagamento</h3><p>Dinheiro · Pix · Cartão de crédito e débito</p></div>
                </div>
              </div>
            </div>
            <div>
              <div className="map-box">
                <span style={{fontSize:'2rem'}}>🗺️</span>
                <p>Substitua por iframe do Google Maps<br/>Rua Tabajaras, 714 — Curitiba/PR</p>
              </div>
              <div style={{marginTop:'1rem',display:'flex',gap:'0.75rem',flexWrap:'wrap'}}>
                <a href="https://maps.google.com/?q=Imaginum+Sushi+Curitiba" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{fontSize:'0.84rem',padding:'10px 20px'}}>Ver no Google Maps</a>
                <Link href="/reservas" className="btn btn-outline-dark" style={{fontSize:'0.84rem',padding:'10px 20px'}}>Reservar mesa</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
