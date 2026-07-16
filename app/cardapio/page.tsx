import type { Metadata } from 'next'
import Script from 'next/script'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cardápio — Combinados, Temakis, Hot Rolls e Sashimis em Curitiba',
  description: 'Cardápio completo do Imaginum Sushi: combinados, temakis artesanais, hot rolls, sashimis, yakissoba, entradas e bebidas. Delivery em Curitiba.',
  alternates: { canonical: '/cardapio' },
}

const cardapio = [
  {
    secao: 'Happy Hour — Seg e Ter (Consumo no Local)',
    desc: 'Promoções especiais às segundas e terças para consumo no salão',
    emoji: '🍻',
    cor: 'var(--blue)',
    itens: [
      { nome: 'Ceviche', desc: 'Polvo, salmão, tilápia, cheiro verde e cebola roxa com molho da casa. 200g', preco: 'R$ 59,00' },
      { nome: 'Hot Balls — 4 unidades', desc: 'Salmão e especiarias em massa crocante', preco: 'R$ 19,00' },
      { nome: 'Hot Balls — 8 unidades', desc: 'Salmão e especiarias em massa crocante', preco: 'R$ 39,00' },
      { nome: 'Lakasa 16 Peças', desc: 'Uramakis: 2 Filadélfia, 2 Filadélfia Especial, 2 Ebi Especial, 2 Imaginum, 4 Hot Special One, 2 Niguiris de salmão e 2 Joe braseado', preco: 'R$ 79,00' },
      { nome: 'Rock Shrimp Spicy', desc: 'Camarões em tempurá, maionese de Sriracha, ovas e cebolinha', preco: 'R$ 69,00' },
      { nome: 'Trilogia de Joe', desc: '3 pares a sua escolha', preco: 'R$ 65,00' },
      { nome: 'Tuna Tartar', desc: 'Mix de atum, cebola roxa, leite de coco, coentros e especiarias com chips de banana da terra', preco: 'R$ 69,00' },
      { nome: 'Uramaki Misto', desc: '8 unid — Filadélfia, 2 Filadélfia Especial, 2 Imaginum, 2 Ebi Especial', preco: 'R$ 43,00' },
      { nome: 'Yakissoba Frango', desc: 'Massa fresca com legumes', preco: 'R$ 54,00' },
    ],
  },
  {
    secao: 'Entradas Frios e Quentes',
    desc: 'Para começar com o melhor da culinária japonesa',
    emoji: '🫘',
    cor: 'var(--green)',
    itens: [],
  },
  {
    secao: 'Hots e Temakis',
    desc: 'Hot rolls crocantes e temakis artesanais preparados na hora',
    emoji: '🔥',
    cor: 'var(--gold-dk)',
    itens: [],
  },
  {
    secao: 'Joe e Niguiri',
    desc: 'Peças clássicas da culinária japonesa',
    emoji: '🍣',
    cor: 'var(--gold)',
    itens: [],
  },
  {
    secao: 'Uramaki e Hossomaki',
    desc: 'Rolinhos tradicionais com ingredientes frescos',
    emoji: '🍱',
    cor: 'var(--blue)',
    itens: [],
  },
  {
    secao: 'Sashimis e Carpaccios',
    desc: 'Fatias de peixe fresco fatiadas na hora',
    emoji: '🐟',
    cor: 'var(--green)',
    itens: [],
  },
  {
    secao: 'Combinados de Salmão',
    desc: 'Combinados especiais com salmão fresco',
    emoji: '🍱',
    cor: 'var(--gold)',
    itens: [],
  },
  {
    secao: 'Combinados Mistos',
    desc: 'Variedade de peças selecionadas',
    emoji: '🍣',
    cor: 'var(--gold-dk)',
    itens: [],
  },
  {
    secao: 'Yakissoba',
    desc: 'Massa fresca com legumes e proteína',
    emoji: '🍜',
    cor: 'var(--blue)',
    itens: [],
  },
  {
    secao: 'Bentô Box',
    desc: 'Caixas completas para um almoço especial',
    emoji: '📦',
    cor: 'var(--green)',
    itens: [],
  },
  {
    secao: 'Sobremesas',
    desc: 'Para finalizar com doçura',
    emoji: '🍡',
    cor: 'var(--gold)',
    itens: [],
  },
  {
    secao: 'Bebidas',
    desc: 'Vinhos, sakê e bebidas selecionadas',
    emoji: '🍷',
    cor: 'var(--blue)',
    itens: [],
  },
]

export default function Cardapio() {
  return (
    <>
      <Nav />
      <main style={{paddingTop:'5rem',minHeight:'100vh'}}>
        <section className="section" style={{paddingBottom:'2rem'}}>
          <div className="container">
            <p className="tag-pill">Japanese Fusion Food · Curitiba</p>
            <h1>Cardápio <em className="gold">Imaginum Sushi</em></h1>
            <p style={{marginTop:'1rem',maxWidth:560,fontSize:'1.05rem'}}>
              Ingredientes frescos selecionados diariamente. Disponível no salão, para retirada ou delivery pelo nosso app e iFood.
            </p>
          </div>
        </section>

        <div className="wave-bar" />

        {cardapio.map((s, i) => (
          <section key={i} className={'section' + (i % 2 === 1 ? ' section-dark' : '')} style={{paddingTop:'2.5rem',paddingBottom:'2.5rem'}}>
            <div className="container">
              <div style={{display:'flex',alignItems:'center',gap:'0.75rem',marginBottom:'1.5rem'}}>
                <span style={{fontSize:'1.5rem'}}>{s.emoji}</span>
                <div>
                  <h2 style={{fontSize:'1.5rem',color:i%2===1?'var(--white)':'var(--black)'}}>{s.secao}</h2>
                  <p style={{fontSize:'0.84rem',marginTop:0,color:i%2===1?'rgba(255,255,255,0.45)':'var(--gray-500)'}}>{s.desc}</p>
                </div>
              </div>
              {s.itens.length > 0 ? (
                <div className="cardapio-grid">
                  {s.itens.map((item, j) => (
                    <article key={j} className="prato-card" style={i%2===1?{background:'rgba(255,255,255,0.04)'}:{background:'rgba(0,0,0,0.04)',borderColor:'rgba(0,0,0,0.1)'}}>
                      <div className="prato-body" style={{padding:'1.25rem'}}>
                        <h3 style={{color:i%2===1?'var(--white)':'var(--black)'}}>{item.nome}</h3>
                        <p style={{color:i%2===1?'rgba(255,255,255,0.5)':'var(--gray-700)'}}>{item.desc}</p>
                        <div className="prato-footer" style={{marginTop:'1rem'}}>
                          <span className="prato-preco">{item.preco}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <p style={{color:'rgba(255,255,255,0.35)',fontStyle:'italic',fontSize:'0.9rem'}}>
                  Em breve — acesse nosso app ou ligue (41) 3082-3093 para conferir os itens disponíveis.
                </p>
              )}
            </div>
          </section>
        ))}

        <div className="wave-bar" />

        <section className="section" style={{paddingTop:'2rem',paddingBottom:'3rem',textAlign:'center'}}>
          <div className="container">
            <h2 style={{marginBottom:'1rem'}}>Pronto para pedir?</h2>
            <p style={{marginBottom:'2rem'}}>Delivery pelo app, iFood ou ligue para reservar sua mesa.</p>
            <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn btn-gold">App Store</a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-blue">Google Play</a>
              <a href="tel:+554130823093" className="btn btn-outline">(41) 3082-3093</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
