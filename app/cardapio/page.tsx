import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cardápio — Imaginum Sushi | Culinária Japonesa em Curitiba',
  description: 'Cardápio completo do Imaginum Sushi: entradas, hots, temakis, uramakis, sashimis, combinados, yakissoba, sobremesas, vinhos, sakê e bebidas. Delivery em Curitiba.',
  alternates: { canonical: '/cardapio' },
}

const cardapio = [
  {
    secao: 'Entradas — Frios e Quentes',
    emoji: '🥢',
    cor: 'var(--green)',
    itens: [
      { nome: 'Ceviche', desc: 'Polvo, salmão, tilápia, cheiro verde e cebola roxa com molho da casa. 200g', preco: 'R$ 59,00' },
      { nome: 'Tuna Tartar', desc: 'Mix de atum, cebola roxa, leite de coco, coentros e especiarias com chips de banana da terra', preco: 'R$ 69,00' },
      { nome: 'Rock Shrimp Spicy', desc: 'Camarões em tempurá, maionese de Sriracha, ovas e cebolinha', preco: 'R$ 69,00' },
      { nome: 'Trilogia de Joe', desc: '3 pares a sua escolha', preco: 'R$ 65,00' },
      { nome: 'Uramaki Misto', desc: '8 unid — Filadélfia, Filadélfia Especial, Imaginum, Ebi Especial', preco: 'R$ 43,00' },
      { nome: 'Lakasa 16 Peças', desc: 'Uramakis: 2 Filadélfia, 2 Filadélfia Especial, 2 Ebi Especial, 2 Imaginum, 4 Hot Special One, 2 Niguiris de salmão e 2 Joe braseado', preco: 'R$ 79,00' },
    ],
  },
  {
    secao: 'Hots e Temakis',
    emoji: '🔥',
    cor: 'var(--gold-dk)',
    itens: [
      { nome: 'Hot Balls 4 unidades', desc: 'Salmão e especiarias em massa crocante', preco: 'R$ 19,00' },
      { nome: 'Hot Balls 8 unidades', desc: 'Salmão e especiarias em massa crocante', preco: 'R$ 39,00' },
      { nome: 'Hot Love', desc: 'Salmão, cream cheese, cebolinha e ovas em massa crocante — 8 unid', preco: 'R$ 55,00' },
      { nome: 'Hot Special One', desc: 'Camarão, cream cheese, cebolinha e ovas empanado — 8 unid', preco: 'R$ 59,00' },
      { nome: 'Temaki Salmão', desc: 'Salmão fresco com arroz e alga crocante', preco: 'R$ 35,00' },
      { nome: 'Temaki Filadélfia', desc: 'Salmão, cream cheese e cebolinha', preco: 'R$ 38,00' },
      { nome: 'Temaki Filadélfia Especial', desc: 'Salmão maçaricado, cream cheese, ovas e cebolinha', preco: 'R$ 42,00' },
      { nome: 'Temaki Ebi Especial', desc: 'Camarão, cream cheese, ovas e cebolinha', preco: 'R$ 42,00' },
      { nome: 'Temaki Imaginum', desc: 'Salmão, cream cheese, ovas, cebolinha e molho especial da casa', preco: 'R$ 45,00' },
    ],
  },
  {
    secao: 'Joe e Niguiri',
    emoji: '🍣',
    cor: 'var(--gold)',
    itens: [
      { nome: 'Joe Clássico', desc: 'Par de Joe de salmão grelhado', preco: 'R$ 22,00' },
      { nome: 'Joe Braseado', desc: 'Par de Joe de salmão flambado com molho teriyaki', preco: 'R$ 25,00' },
      { nome: 'Joe Especial', desc: 'Par com cream cheese, ovas e cebolinha', preco: 'R$ 28,00' },
      { nome: 'Niguiri Salmão', desc: 'Par de niguiri de salmão fresco', preco: 'R$ 22,00' },
      { nome: 'Niguiri Atum', desc: 'Par de niguiri de atum premium', preco: 'R$ 25,00' },
      { nome: 'Niguiri Camarão', desc: 'Par de niguiri de camarão', preco: 'R$ 24,00' },
    ],
  },
  {
    secao: 'Uramaki e Hossomaki',
    emoji: '🍱',
    cor: 'var(--blue)',
    itens: [
      { nome: 'Filadélfia', desc: 'Salmão, cream cheese e cebolinha — 8 unid', preco: 'R$ 38,00' },
      { nome: 'Filadélfia Especial', desc: 'Salmão maçaricado, cream cheese e ovas — 8 unid', preco: 'R$ 44,00' },
      { nome: 'Ebi Especial', desc: 'Camarão, cream cheese e ovas — 8 unid', preco: 'R$ 44,00' },
      { nome: 'Imaginum', desc: 'Salmão, cream cheese, ovas e molho especial da casa — 8 unid', preco: 'R$ 48,00' },
      { nome: 'Spicy Tuna', desc: 'Atum, maionese de Sriracha e cebolinha — 8 unid', preco: 'R$ 46,00' },
      { nome: 'Hossomaki Salmão', desc: 'Rolo simples de salmão — 8 unid', preco: 'R$ 28,00' },
      { nome: 'Hossomaki Pepino', desc: 'Rolo simples de pepino — 8 unid', preco: 'R$ 22,00' },
    ],
  },
  {
    secao: 'Sashimis e Carpaccios',
    emoji: '🐟',
    cor: 'var(--green)',
    itens: [
      { nome: 'Sashimi de Salmão 10 fatias', desc: 'Salmão fresco fatiado na hora', preco: 'R$ 65,00' },
      { nome: 'Sashimi de Atum 10 fatias', desc: 'Atum premium fatiado na hora', preco: 'R$ 72,00' },
      { nome: 'Sashimi Misto 10 fatias', desc: 'Mix de salmão e atum', preco: 'R$ 68,00' },
      { nome: 'Carpaccio de Salmão', desc: 'Finas fatias de salmão com azeite, alcaparras e ervas', preco: 'R$ 58,00' },
      { nome: 'Carpaccio de Atum', desc: 'Finas fatias de atum com molho ponzu e gergelim', preco: 'R$ 65,00' },
    ],
  },
  {
    secao: 'Combinados de Salmão',
    emoji: '🎌',
    cor: 'var(--gold)',
    itens: [
      { nome: 'Combinado Salmão P — 18 peças', desc: '6 niguiris, 4 hossomakis, 4 filadélfia, 4 sashimis de salmão', preco: 'R$ 85,00' },
      { nome: 'Combinado Salmão M — 26 peças', desc: '8 niguiris, 6 hossomakis, 6 filadélfia, 6 sashimis de salmão', preco: 'R$ 119,00' },
      { nome: 'Combinado Salmão G — 36 peças', desc: '10 niguiris, 8 hossomakis, 8 filadélfia, 10 sashimis de salmão', preco: 'R$ 159,00' },
    ],
  },
  {
    secao: 'Combinados Mistos',
    emoji: '🍣',
    cor: 'var(--gold-dk)',
    itens: [
      { nome: 'Combinado Misto P — 20 peças', desc: 'Mix de niguiris, uramakis, hots e sashimis', preco: 'R$ 95,00' },
      { nome: 'Combinado Misto M — 30 peças', desc: 'Mix de niguiris, uramakis, hots e sashimis com variedade ampliada', preco: 'R$ 135,00' },
      { nome: 'Combinado Misto G — 42 peças', desc: 'A seleção completa da casa com os melhores itens do cardápio', preco: 'R$ 185,00' },
      { nome: 'Lakasa 16 Peças', desc: 'Uramakis: 2 Filadélfia, 2 Filadélfia Especial, 2 Ebi Especial, 2 Imaginum, 4 Hot Special One, 2 Niguiris salmão, 2 Joe braseado', preco: 'R$ 79,00' },
    ],
  },
  {
    secao: 'Yakissoba',
    emoji: '🍜',
    cor: 'var(--blue)',
    itens: [
      { nome: 'Yakissoba Frango', desc: 'Massa fresca com frango e legumes salteados no shoyu', preco: 'R$ 54,00' },
      { nome: 'Yakissoba Camarão', desc: 'Massa fresca com camarão e legumes salteados', preco: 'R$ 68,00' },
      { nome: 'Yakissoba Misto', desc: 'Massa fresca com frango, camarão e legumes', preco: 'R$ 72,00' },
    ],
  },
  {
    secao: 'Bentô Box',
    emoji: '📦',
    cor: 'var(--green)',
    itens: [
      { nome: 'Bentô Salmão', desc: 'Arroz japonês, salmão grelhado, missoshiru, guioza e salada', preco: 'R$ 68,00' },
      { nome: 'Bentô Frango Teriyaki', desc: 'Arroz japonês, frango teriyaki, missoshiru, guioza e salada', preco: 'R$ 62,00' },
      { nome: 'Bentô Misto', desc: 'Arroz japonês, salmão + frango teriyaki, missoshiru e guioza', preco: 'R$ 72,00' },
    ],
  },
  {
    secao: 'Sobremesas',
    emoji: '🍡',
    cor: 'var(--gold)',
    itens: [
      { nome: 'Mochi de Morango', desc: 'Bolinho de arroz japonês recheado com sorvete de morango', preco: 'R$ 18,00' },
      { nome: 'Mochi de Matcha', desc: 'Bolinho de arroz japonês recheado com sorvete de matcha', preco: 'R$ 18,00' },
      { nome: 'Cheesecake de Maracujá', desc: 'Cheesecake cremoso com calda de maracujá', preco: 'R$ 22,00' },
      { nome: 'Temakeria de Nutella', desc: 'Cone de massa frita com Nutella e morango', preco: 'R$ 24,00' },
    ],
  },
  {
    secao: 'Porções e Extras',
    emoji: '🫘',
    cor: 'var(--green)',
    itens: [
      { nome: 'Edamame', desc: 'Grãos de soja cozidos no vapor com flor de sal', preco: 'R$ 22,00' },
      { nome: 'Missoshiru', desc: 'Sopa de misso com tofu, wakame e cebolinha', preco: 'R$ 18,00' },
      { nome: 'Guioza 6 unid', desc: 'Pastéis japoneses grelhados recheados com frango e legumes', preco: 'R$ 28,00' },
      { nome: 'Gyoza Ebi 6 unid', desc: 'Pastéis japoneses recheados com camarão', preco: 'R$ 34,00' },
      { nome: 'Porção de Arroz Japonês', desc: 'Arroz japonês temperado', preco: 'R$ 15,00' },
    ],
  },
  {
    secao: 'Vinhos',
    emoji: '🍷',
    cor: 'var(--blue)',
    itens: [
      { nome: 'Vinho Branco — Taça', desc: 'Seleção de vinhos brancos da casa', preco: 'R$ 28,00' },
      { nome: 'Vinho Branco — Garrafa', desc: 'Seleção de vinhos brancos da casa', preco: 'R$ 95,00' },
      { nome: 'Vinho Rosé — Taça', desc: 'Seleção de vinhos rosé da casa', preco: 'R$ 28,00' },
      { nome: 'Vinho Rosé — Garrafa', desc: 'Seleção de vinhos rosé da casa', preco: 'R$ 95,00' },
      { nome: 'Vinho Tinto — Taça', desc: 'Seleção de vinhos tintos da casa', preco: 'R$ 28,00' },
      { nome: 'Vinho Tinto — Garrafa', desc: 'Seleção de vinhos tintos da casa', preco: 'R$ 95,00' },
      { nome: 'Espumante — Taça', desc: 'Espumante brut gelado', preco: 'R$ 30,00' },
      { nome: 'Espumante — Garrafa', desc: 'Espumante brut gelado', preco: 'R$ 99,00' },
    ],
  },
  {
    secao: 'Sakê e Bebidas',
    emoji: '🍵',
    cor: 'var(--gold)',
    itens: [
      { nome: 'Sakê Quente', desc: 'Sakê tradicional japonês servido quente', preco: 'R$ 28,00' },
      { nome: 'Sakê Gelado', desc: 'Sakê premium servido gelado', preco: 'R$ 32,00' },
      { nome: 'Chá Verde Gelado 500ml', desc: 'Chá verde japonês sem adição de açúcar', preco: 'R$ 12,00' },
      { nome: 'Água Mineral 500ml', desc: 'Com ou sem gás', preco: 'R$ 8,00' },
      { nome: 'Refrigerante Lata', desc: 'Coca-Cola, Guaraná, Soda Limonada', preco: 'R$ 9,00' },
      { nome: 'Limonada Suíça', desc: 'Limonada cremosa com leite condensado', preco: 'R$ 18,00' },
    ],
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
            <p style={{marginTop:'1rem',maxWidth:580,fontSize:'1.02rem'}}>
              Ingredientes frescos selecionados diariamente. Disponível no salão,
              para retirada ou delivery pelo app e iFood.
            </p>
            <div style={{display:'flex',gap:'0.75rem',marginTop:'1.5rem',flexWrap:'wrap'}}>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{fontSize:'0.84rem',padding:'10px 20px'}}>App Store</a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="btn btn-blue" style={{fontSize:'0.84rem',padding:'10px 20px'}}>Google Play</a>
              <a href="tel:+554130823093" className="btn btn-outline" style={{fontSize:'0.84rem',padding:'10px 20px'}}>(41) 3082-3093</a>
            </div>
          </div>
        </section>

        <div className="wave-bar" />

        {cardapio.map((s, i) => (
          <section
            key={i}
            className={'section' + (i % 2 === 1 ? ' section-dark' : '')}
            style={{paddingTop:'2.5rem',paddingBottom:'2.5rem'}}
            id={s.secao.toLowerCase().replace(/[^a-z0-9]/g,'-')}
          >
            <div className="container">
              <div style={{display:'flex',alignItems:'center',gap:'0.75rem',marginBottom:'1.75rem'}}>
                <span style={{fontSize:'1.6rem'}}>{s.emoji}</span>
                <div>
                  <h2 style={{fontSize:'1.5rem',color: i%2===1?'var(--white)':'var(--black)',borderLeft:`3px solid ${s.cor}`,paddingLeft:'0.75rem'}}>{s.secao}</h2>
                </div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'1px',background:'rgba(128,128,128,0.1)',borderRadius:'10px',overflow:'hidden'}}>
                {s.itens.map((item, j) => (
                  <div
                    key={j}
                    style={{
                      background: i%2===1 ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                      padding:'1.1rem 1.25rem',
                      display:'flex',
                      justifyContent:'space-between',
                      alignItems:'flex-start',
                      gap:'1rem'
                    }}
                  >
                    <div style={{flex:1}}>
                      <h3 style={{color: i%2===1?'var(--white)':'var(--black)',fontSize:'0.95rem',marginBottom:'0.25rem'}}>{item.nome}</h3>
                      {item.desc && <p style={{fontSize:'0.81rem',color: i%2===1?'rgba(255,255,255,0.48)':'var(--gray-500)',lineHeight:'1.5'}}>{item.desc}</p>}
                    </div>
                    <span style={{fontFamily:'var(--font-display)',fontSize:'1rem',color:'var(--gold)',fontWeight:700,flexShrink:0,whiteSpace:'nowrap'}}>{item.preco}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <div className="wave-bar" />

        <section className="section" style={{textAlign:'center',paddingTop:'2.5rem',paddingBottom:'3rem'}}>
          <div className="container">
            <h2 style={{marginBottom:'0.75rem'}}>Pronto para pedir?</h2>
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
