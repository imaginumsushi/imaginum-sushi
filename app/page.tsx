import Nav from '@/components/Nav'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Link from 'next/link'

const pratosDestaque = [
  { emoji: '🍱', nome: 'Combinado Executivo', desc: '20 peças: uramakis, niguiris e sashimi de salmão', preco: 'R$ 59,90', cat: 'Combinados' },
  { emoji: '🍣', nome: 'Temaki Philadelphia', desc: 'Salmão fresco, cream cheese e cebolinha', preco: 'R$ 24,90', cat: 'Temakis' },
  { emoji: '🔥', nome: 'Hot Roll Salmão', desc: '8 peças empanadas com salmão e cream cheese', preco: 'R$ 32,90', cat: 'Hot Rolls' },
  { emoji: '🐟', nome: 'Sashimi de Salmão', desc: '10 fatias de salmão fresco fatiado na hora', preco: 'R$ 44,90', cat: 'Sashimis' },
  { emoji: '🫘', nome: 'Edamame', desc: 'Grãos de soja cozidos no vapor com sal', preco: 'R$ 14,90', cat: 'Entradas' },
  { emoji: '🥟', nome: 'Guioza', desc: '6 pastéis japoneses grelhados com carne e legumes', preco: 'R$ 24,90', cat: 'Entradas' },
]

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <div className="hero-bg" />
          <div className="hero-content">
            <p className="hero-eyebrow">Japanese Fusion Food · Curitiba</p>
            <h1 className="hero-title">
              O melhor sushi<br />de <em>Curitiba</em><br />está na Vila Izabel
            </h1>
            <p className="hero-desc">
              Combinados frescos, temakis artesanais e hot rolls crocantes preparados com ingredientes selecionados diariamente. Almoço e jantar na Rua Tabajaras, 714.
            </p>
            <div className="hero-actions">
              <Link href="/cardapio" className="btn btn-gold">Ver cardápio completo</Link>
              <Link href="/reservas" className="btn btn-outline">Reservar mesa</Link>
            </div>
            <div className="hero-detail">
              <div className="hero-detail-item">
                <strong>Rua Tabajaras, 714</strong>
                Vila Izabel — Curitiba/PR
              </div>
              <div className="hero-detail-item">
                <strong>(41) 3082-3093</strong>
                Reservas e WhatsApp
              </div>
              <div className="hero-detail-item">
                <strong>Seg–Sáb</strong>
                Almoço e Jantar
              </div>
              <div className="hero-detail-item">
                <strong>App próprio</strong>
                App Store · Google Play
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="section">
        <div className="container">
          <div className="destaques-grid">
            <div className="destaque-item">
              <div className="destaque-icon">🍣</div>
              <h3>Ingredientes frescos</h3>
              <p>Salmão, atum e frutos do mar selecionados e entregues diariamente para garantir frescor em cada peça.</p>
            </div>
            <div className="destaque-item">
              <div className="destaque-icon">🚀</div>
              <h3>Delivery próprio</h3>
              <p>App exclusivo na App Store e Google Play. Peça pelo iFood também. Entregamos em Curitiba e região.</p>
            </div>
            <div className="destaque-item">
              <div className="destaque-icon">🏮</div>
              <h3>Ambiente sofisticado</h3>
              <p>Espaço aconchegante e bem decorado na Vila Izabel, ideal para almoços de negócios e jantares especiais.</p>
            </div>
            <div className="destaque-item">
              <div className="destaque-icon">📅</div>
              <h3>Reservas fáceis</h3>
              <p>Reserve pelo telefone (41) 3082-3093 ou WhatsApp. Atendemos grupos e eventos sob consulta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="section section-cream">
        <div className="container">
          <div className="sobre-grid">
            <div>
              <p className="tag-pill" style={{ color: 'var(--gold-dark)', borderColor: 'var(--gold-dark)' }}>Sobre o restaurante</p>
              <h2 style={{ color: 'var(--black)', marginBottom: '1.25rem' }}>
                Japanese Fusion Food no coração de Curitiba
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                O Imaginum Sushi nasceu da paixão pela culinária japonesa e pelo desejo de trazer uma experiência gastronômica completa para Curitiba. Localizado na Vila Izabel, na Rua Tabajaras, 714, somos referência em Japanese Fusion Food na cidade.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Trabalhamos com ingredientes frescos selecionados diariamente — salmão, atum, frutos do mar e vegetais de qualidade que garantem o sabor autêntico em cada combinado, temaki e hot roll.
              </p>
              <p>
                Além do salão sofisticado e aconchegante, oferecemos delivery próprio pelo nosso aplicativo exclusivo e pelo iFood, levando a experiência Imaginum até a sua casa.
              </p>
              <div className="sobre-stats">
                <div className="stat">
                  <div className="stat-num">4.8★</div>
                  <div className="stat-label">Nota no Google</div>
                </div>
                <div className="stat">
                  <div className="stat-num">App</div>
                  <div className="stat-label">iOS e Android</div>
                </div>
                <div className="stat">
                  <div className="stat-num">2×</div>
                  <div className="stat-label">Almoço e Jantar</div>
                </div>
                <div className="stat">
                  <div className="stat-num">Vila<br />Izabel</div>
                  <div className="stat-label">Curitiba/PR</div>
                </div>
              </div>
            </div>
            <div className="sobre-img-placeholder">
              {/* Substitua por <Image src="/sobre.jpg" alt="Ambiente interno Imaginum Sushi Curitiba" fill /> */}
              Adicione aqui uma foto do ambiente ou equipe<br />(substitua este bloco por um componente Image)
            </div>
          </div>
        </div>
      </section>

      {/* CARDÁPIO PREVIEW */}
      <section className="section">
        <div className="container">
          <p className="tag-pill">Nosso cardápio</p>
          <h2 style={{ marginBottom: '0.75rem' }}>Destaques do <em className="gold">menu</em></h2>
          <p style={{ marginBottom: '2.5rem', maxWidth: 520 }}>
            Uma seleção do que há de melhor em Japanese Fusion Food. Confira o cardápio completo com todos os pratos e preços.
          </p>
          <div className="cardapio-grid">
            {pratosDestaque.map((p, i) => (
              <article key={i} className="prato-card">
                <div className="prato-img" role="img" aria-label={`${p.nome} — ${p.cat} Imaginum Sushi Curitiba`}>
                  {p.emoji}
                </div>
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
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/cardapio" className="btn btn-gold">Ver cardápio completo</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* LOCALIZAÇÃO */}
      <section className="section section-cream">
        <div className="container">
          <div className="local-grid">
            <div>
              <p className="tag-pill" style={{ color: 'var(--gold-dark)', borderColor: 'var(--gold-dark)' }}>Como nos encontrar</p>
              <h2 style={{ color: 'var(--black)', marginBottom: '2rem' }}>Venha nos visitar em <em style={{ color: 'var(--gold-dark)', fontStyle: 'normal' }}>Curitiba</em></h2>
              <div className="local-info">
                <div className="local-row">
                  <div className="local-icon" style={{ background: 'rgba(160,120,64,0.12)' }}>📍</div>
                  <div>
                    <h3>Endereço</h3>
                    <p>Rua Tabajaras, 714 — Vila Izabel<br />Curitiba/PR — CEP 80035-270</p>
                  </div>
                </div>
                <div className="local-row">
                  <div className="local-icon" style={{ background: 'rgba(160,120,64,0.12)' }}>🕐</div>
                  <div>
                    <h3>Horários</h3>
                    <p>
                      <strong>Almoço:</strong> Seg–Sex 11h30–14h30 · Sáb e feriados 11h30–15h<br />
                      <strong>Jantar:</strong> Seg–Sáb 18h–23h30
                    </p>
                  </div>
                </div>
                <div className="local-row">
                  <div className="local-icon" style={{ background: 'rgba(160,120,64,0.12)' }}>📞</div>
                  <div>
                    <h3>Contato</h3>
                    <p><a href="tel:+554130823093" style={{ color: 'var(--gray-700)' }}>(41) 3082-3093</a><br />Reservas e WhatsApp</p>
                  </div>
                </div>
                <div className="local-row">
                  <div className="local-icon" style={{ background: 'rgba(160,120,64,0.12)' }}>💳</div>
                  <div>
                    <h3>Pagamento</h3>
                    <p>Dinheiro · Pix · Cartão de crédito e débito</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="map-placeholder">
                {/* Substitua por iframe do Google Maps */}
                {/* <iframe src="https://maps.google.com/maps?q=Rua+Tabajaras+714+Curitiba&output=embed" width="100%" height="100%" style={{border:0}} loading="lazy" /> */}
                <span style={{ fontSize: '2rem' }}>🗺️</span>
                <p>Insira aqui o embed do Google Maps<br />(Rua Tabajaras, 714 — Curitiba/PR)</p>
              </div>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href="https://maps.google.com/?q=Imaginum+Sushi+Curitiba" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ fontSize: '0.85rem', padding: '10px 20px' }}>
                  Ver no Google Maps
                </a>
                <Link href="/reservas" className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '10px 20px', borderColor: 'rgba(0,0,0,0.3)', color: 'var(--black)' }}>
                  Reservar mesa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
