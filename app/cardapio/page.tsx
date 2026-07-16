import type { Metadata } from 'next'
import Script from 'next/script'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cardápio — Combinados, Temakis e Hot Rolls em Curitiba',
  description: 'Cardápio completo do Imaginum Sushi: combinados de 20 a 50 peças, temakis artesanais, sashimis frescos, hot rolls, entradas e bebidas. Delivery em Curitiba.',
  alternates: { canonical: '/cardapio' },
}

const cardapio = [
  {
    secao: 'Combinados',
    desc: 'Seleções especiais de sushi e sashimi com ingredientes frescos',
    emoji: '🍱',
    itens: [
      { nome: 'Combinado Executivo 20 peças', desc: '10 uramakis + 6 niguiris + 4 sashimis de salmão', preco: 'R$ 59,90' },
      { nome: 'Combinado Especial 30 peças', desc: 'Seleção premium com hot roll, philadelphia e sashimi', preco: 'R$ 89,90' },
      { nome: 'Combinado Família 50 peças', desc: 'Variedade completa para compartilhar', preco: 'R$ 139,90' },
    ],
  },
  {
    secao: 'Temakis',
    desc: 'Cones artesanais de alga com arroz japonês preparados na hora',
    emoji: '🍣',
    itens: [
      { nome: 'Temaki Salmão', desc: 'Cone de alga com arroz japonês e salmão fresco', preco: 'R$ 22,90' },
      { nome: 'Temaki Philadelphia', desc: 'Salmão, cream cheese e cebolinha', preco: 'R$ 24,90' },
      { nome: 'Temaki Camarão Empanado', desc: 'Camarão crocante, cream cheese e molho especial', preco: 'R$ 26,90' },
      { nome: 'Temaki Vegetariano', desc: 'Pepino, abacate, cream cheese e gergelim', preco: 'R$ 20,90' },
    ],
  },
  {
    secao: 'Hot Rolls',
    desc: 'Uramakis empanados e crocantes, servidos quentinhos',
    emoji: '🔥',
    itens: [
      { nome: 'Hot Roll Salmão (8 peças)', desc: 'Uramaki frito com recheio de salmão e cream cheese', preco: 'R$ 32,90' },
      { nome: 'Hot Roll Atum (8 peças)', desc: 'Uramaki frito com atum e cebolinha', preco: 'R$ 34,90' },
      { nome: 'Hot Roll Camarão (8 peças)', desc: 'Uramaki frito com camarão e cream cheese', preco: 'R$ 36,90' },
    ],
  },
  {
    secao: 'Sashimis',
    desc: 'Fatias de peixe fresco fatiadas na hora, sem arroz',
    emoji: '🐟',
    itens: [
      { nome: 'Sashimi de Salmão (10 fatias)', desc: 'Salmão fresco fatiado na hora', preco: 'R$ 44,90' },
      { nome: 'Sashimi de Atum (10 fatias)', desc: 'Atum fresco premium', preco: 'R$ 49,90' },
      { nome: 'Sashimi Misto (10 fatias)', desc: 'Mix de salmão e atum', preco: 'R$ 47,90' },
    ],
  },
  {
    secao: 'Entradas',
    desc: 'Para começar a refeição com o melhor da culinária japonesa',
    emoji: '🫘',
    itens: [
      { nome: 'Edamame', desc: 'Grãos de soja cozidos no vapor com sal', preco: 'R$ 14,90' },
      { nome: 'Missoshiru', desc: 'Sopa de misso com tofu e cebolinha', preco: 'R$ 12,90' },
      { nome: 'Guioza (6 unidades)', desc: 'Pastéis japoneses grelhados com carne e legumes', preco: 'R$ 24,90' },
    ],
  },
  {
    secao: 'Bebidas',
    desc: 'Bebidas selecionadas para acompanhar sua refeição',
    emoji: '🍵',
    itens: [
      { nome: 'Saquê Tradicional', desc: 'Bebida japonesa de arroz', preco: 'R$ 18,90' },
      { nome: 'Chá Verde (500ml)', desc: 'Chá verde japonês gelado ou quente', preco: 'R$ 9,90' },
      { nome: 'Refrigerante Lata', desc: 'Diversas opções', preco: 'R$ 7,90' },
      { nome: 'Água Mineral (500ml)', desc: 'Com ou sem gás', preco: 'R$ 5,90' },
    ],
  },
]

const schemaMenu = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  '@id': 'https://www.imaginumsushi.com.br/cardapio/#catalog',
  name: 'Cardápio Imaginum Sushi',
  url: 'https://www.imaginumsushi.com.br/cardapio',
  inLanguage: 'pt-BR',
  hasMenuSection: cardapio.map(s => ({
    '@type': 'MenuSection',
    name: s.secao,
    description: s.desc,
    hasMenuItem: s.itens.map(item => ({
      '@type': 'MenuItem',
      name: item.nome,
      description: item.desc,
      offers: { '@type': 'Offer', price: item.preco.replace('R$ ', '').replace(',', '.'), priceCurrency: 'BRL' },
    })),
  })),
}

export default function Cardapio() {
  return (
    <>
      <Script id="schema-menu" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMenu) }} />
      <Nav />
      <main style={{ paddingTop: '5rem', minHeight: '100vh' }}>
        <section className="section" style={{ paddingBottom: '2rem' }}>
          <div className="container">
            <p className="tag-pill">Japanese Fusion Food · Curitiba</p>
            <h1>Cardápio <em className="gold">Imaginum Sushi</em></h1>
            <p style={{ marginTop: '1rem', maxWidth: 560, fontSize: '1.05rem' }}>
              Ingredientes frescos selecionados diariamente. Disponível no salão, para retirada ou delivery pelo nosso app.
            </p>
          </div>
        </section>

        {cardapio.map((s, i) => (
          <section key={i} className={`section${i % 2 === 1 ? ' section-cream' : ''}`} style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
            <div className="container">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>{s.emoji}</span>
                <div>
                  <h2 style={{ fontSize: '1.6rem', color: i % 2 === 1 ? 'var(--black)' : 'var(--white)' }}>{s.secao}</h2>
                  <p style={{ fontSize: '0.85rem', marginTop: 0, color: i % 2 === 1 ? 'var(--gray-700)' : 'rgba(255,255,255,0.5)' }}>{s.desc}</p>
                </div>
              </div>
              <div className="cardapio-grid">
                {s.itens.map((item, j) => (
                  <article key={j} className="prato-card" style={{ background: i % 2 === 1 ? 'rgba(0,0,0,0.04)' : undefined, borderColor: i % 2 === 1 ? 'rgba(0,0,0,0.1)' : undefined }}>
                    <div className="prato-body" style={{ padding: '1.25rem' }}>
                      <h3 style={{ color: i % 2 === 1 ? 'var(--black)' : 'var(--white)' }}>{item.nome}</h3>
                      <p style={{ color: i % 2 === 1 ? 'var(--gray-700)' : undefined }}>{item.desc}</p>
                      <div className="prato-footer" style={{ marginTop: '1rem' }}>
                        <span className="prato-preco">{item.preco}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="section" style={{ paddingTop: '2rem', paddingBottom: '3rem', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ marginBottom: '1rem' }}>Pronto para pedir?</h2>
            <p style={{ marginBottom: '2rem' }}>Delivery pelo app, iFood ou ligue para reservar sua mesa.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn btn-gold">App Store</a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Google Play</a>
              <a href="tel:+554130823093" className="btn btn-outline">(41) 3082-3093</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
