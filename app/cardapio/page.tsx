import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cardápio — Imaginum Sushi | Culinária Japonesa em Curitiba',
  description: 'Cardápio completo do Imaginum Sushi em Curitiba: entradas, hots, temakis, uramakis, sashimis, combinados, yakissoba, bentô box, sobremesas e bebidas.',
  alternates: { canonical: '/cardapio' },
}

const cardapio = [
  {
    secao: 'Entradas Frios e Quentes',
    emoji: '🥢',
    cor: 'var(--green)',
    itens: [
      { nome: 'Carpaji', desc: 'Cogumelos Shimeji enroladinhos em fina fatia de salmão braseado com fio de molho tarê', preco: 'R$ 49,00' },
      { nome: 'Casquinhas do Chef', desc: 'Casquinha com salmão, cebolinha e ovas, ligeiramente picante — 2 unid', preco: 'R$ 39,00' },
      { nome: 'Ceviche do Chef', desc: 'Peixe cru incrementado com limão, anéis de lula e especiarias', preco: 'R$ 59,00' },
      { nome: 'Cubinhos de Salmão Picante', desc: 'Salmão em cubos temperado com pimenta japonesa e cheiro verde. 200g', preco: 'R$ 69,00' },
      { nome: 'Edamame', desc: 'Grãos de soja imaturos temperados com sal rosa', preco: 'R$ 29,00' },
      { nome: 'Guiozas', desc: 'Pastelzinho japonês artesanal — 4 unidades', preco: 'a partir de R$ 29,00' },
      { nome: 'Joe Brie', desc: 'Massa fina e queijo Brie enrolando peixe, geleia de pimenta artesanal e rúcula — 5 unid', preco: 'R$ 62,00' },
      { nome: 'Kimuche do Cheff', desc: 'Atum, camarão e polvo apimentados com toque de alho francês. 200g', preco: 'R$ 79,00' },
      { nome: 'La Mare', desc: 'Camarões e lulinhas salteadas no azeite, acompanha pão italiano', preco: 'R$ 79,00' },
      { nome: 'Missohiro', desc: 'Caldo a base de soja c/ alho francês', preco: 'R$ 12,00' },
      { nome: 'Missohiro Especial', desc: 'Caldo a base de soja com camarão e salmão, cebolinha e pimenta', preco: 'R$ 19,00' },
      { nome: 'Shimeji na Manteiga', desc: 'Shimeji na manteiga', preco: 'R$ 34,00' },
      { nome: 'Shimeji no Alumínio', desc: 'Com molho salgado. 200g. Acompanha arroz Gohan', preco: 'R$ 34,00' },
      { nome: 'Shitake na Manteiga', desc: 'Com molho agridoce. 200g. Acompanha arroz gohan', preco: 'R$ 36,00' },
      { nome: 'Shitake no Alumínio', desc: 'Com molho salgado. 200g. Acompanha arroz Gohan', preco: 'R$ 36,00' },
      { nome: 'Sunomono', desc: 'Salada de pepino marinado com kani e cubinhos de salmão na crosta de gergelim. 150g', preco: 'R$ 29,00' },
      { nome: 'Tempurás', desc: 'Empanados crocantes com farinha pankô — acompanha trilogia de molhos', preco: 'a partir de R$ 49,00' },
      { nome: 'Tuna Mustard Sauce', desc: 'Sashimi de atum c/ molho de mostarda e mel, coberto com farofinha de gengibre', preco: 'R$ 42,90' },
    ],
  },
  {
    secao: 'Hots e Temakis',
    emoji: '🔥',
    cor: 'var(--gold-dk)',
    itens: [
      { nome: 'Hot Ebi Hot', desc: 'Salmão, camarão e cream cheese — low carb, exclusividade da casa', preco: 'a partir de R$ 35,40' },
      { nome: 'Hot Filadélfia', desc: 'O hot mais crocante e delicioso da cidade', preco: 'a partir de R$ 22,20' },
      { nome: 'Hot Special One', desc: 'Recheio de salmão e cream cheese, coberto com cream cheese, alho poró e molho tarê artesanal', preco: 'a partir de R$ 22,20' },
      { nome: 'Temakis', desc: 'Tamanho único — aproximadamente 250g', preco: 'a partir de R$ 30,00' },
    ],
  },
  {
    secao: 'Joe e Niguiri',
    emoji: '🍣',
    cor: 'var(--gold)',
    itens: [
      { nome: 'Ebi Joe', desc: 'Camarão empanado envolvido em salmão, cream cheese e pepino japonês — 4 unidades', preco: 'R$ 49,00' },
      { nome: 'Joe Atum com Especiarias', desc: 'Atum temperado com pimenta kimuchi, cebolinha e gergelim', preco: 'R$ 21,00' },
      { nome: 'Joe Kappa', desc: 'Envolvido em pepino japonês, kani e alho poró — 2 unid', preco: 'R$ 14,00' },
      { nome: 'Joe Passion', desc: 'Salmão, ovas e limão — 2 unid', preco: 'R$ 26,00' },
      { nome: 'Joe Peixe Branco', desc: 'Peixe branco com lichia e amêndoas', preco: 'R$ 19,00' },
      { nome: 'Joe Salmão', desc: 'Pastinha de salmão com cream cheese e alho poró, cebolinha e gergelim', preco: 'a partir de R$ 13,00' },
      { nome: 'Joe Salmão Braseado', desc: 'Pastinha de salmão com cream cheese e alho poró braseado com molho tarê', preco: 'a partir de R$ 15,00' },
      { nome: 'Niguiri Atum Fusion', desc: '2 unidades — selado com gergelim, gengibre e geleia de pimenta', preco: 'R$ 26,00' },
      { nome: 'Niguiri Especial', desc: '2 unidades — camarão em fina fatia de salmão braseado, cream cheese e molho tarê', preco: 'R$ 26,00' },
      { nome: 'Niguiri Fresh', desc: 'Peixe branco com molho pesto e tomatinho — 2 unid', preco: 'R$ 17,00' },
      { nome: 'Niguiri Peixe do Dia Especial', desc: '2 unidades — cebolinha e raspinhas de limão', preco: 'R$ 17,00' },
      { nome: 'Niguiri Salmão Especial', desc: '2 unidades — com ovas e cream cheese', preco: 'R$ 26,00' },
      { nome: 'Niguiri Salmão Trufado', desc: '2 unidades — barriga de salmão com azeite trufado e sal rosa', preco: 'R$ 26,00' },
      { nome: 'Niguiri Tradicional', desc: 'Arroz coberto com peixe', preco: 'a partir de R$ 13,00' },
      { nome: 'Niguiri Vieira', desc: 'Niguiri de vieira fresca', preco: 'R$ 35,00' },
      { nome: 'Trilogia Niguiri', desc: 'Escolha 3 pares favoritos', preco: 'R$ 59,00' },
    ],
  },
  {
    secao: 'Uramaki e Hossomaki',
    emoji: '🍱',
    cor: 'var(--blue)',
    itens: [
      { nome: 'Hossomakis', desc: 'Rolinhos tradicionais', preco: 'a partir de R$ 16,20' },
      { nome: 'Uramaki Califórnia', desc: '8 unidades — kani, pepino e manga, contém gergelim', preco: 'a partir de R$ 16,20' },
      { nome: 'Uramaki Califórnia II', desc: 'Arroz, camarão, abacate e salmão', preco: 'a partir de R$ 29,40' },
      { nome: 'Uramaki Ebi Especial', desc: 'Camarão crocante com cream cheese e pepino japonês coberto com fatia de salmão e molho tarê', preco: 'a partir de R$ 25,80' },
      { nome: 'Uramaki Ebi Spicy', desc: 'Camarão crocante e cream cheese enrolado no abacate, coberto com geleia de pimenta artesanal', preco: 'R$ 43,00' },
      { nome: 'Uramaki Filadélfia', desc: 'Salmão e cream cheese, gergelim', preco: 'a partir de R$ 23,50' },
      { nome: 'Uramaki Filadélfia Especial', desc: 'Salmão e cream cheese coberto com fatia de salmão braseado e gergelim, acompanha molho tarê', preco: 'a partir de R$ 25,80' },
      { nome: 'Uramaki Filadélfia Especial sem Alga', desc: 'Salmão e cream cheese coberto com fina fatia de salmão e gergelim — 8 unid', preco: 'R$ 39,00' },
      { nome: 'Uramaki IMAGINUM', desc: 'Peixe branco empanado e cream cheese envolvido em raspas de limão', preco: 'a partir de R$ 25,20' },
      { nome: 'Uramaki Joemaki', desc: 'Salmão temperado com pimenta japonesa e cebolinha', preco: 'a partir de R$ 25,80' },
      { nome: 'Uramaki Niramaki', desc: 'Ovas de tobiko, cebolinha, salmão e cream cheese', preco: 'a partir de R$ 27,00' },
      { nome: 'Uramaki Romeu e Julieta', desc: 'Uramaki adocicado com goiabada e cream cheese', preco: 'a partir de R$ 21,00' },
      { nome: 'Uramaki Skin', desc: 'Pele de salmão grelhada, pepino japonês e molho tarê', preco: 'a partir de R$ 17,40' },
      { nome: 'Uramaki Spice Tuna', desc: 'Atum temperado com pimenta japonesa e cebolinha', preco: 'a partir de R$ 25,80' },
    ],
  },
  {
    secao: 'Sashimis e Carpaccios',
    emoji: '🐟',
    cor: 'var(--green)',
    itens: [
      { nome: 'Barriga de Salmão Trufado', desc: 'Corte nobre da parte inferior do salmão, macio e suculento, finalizado com toque trufado', preco: 'R$ 89,00' },
      { nome: 'Carpaccio Salmão ao Molho Pesto', desc: 'Salmão ao molho pesto com pimenta japonesa', preco: 'a partir de R$ 47,40' },
      { nome: 'Carpaccio Salmão Especial', desc: 'Finas fatias de salmão com molho especial da casa e ovas', preco: 'a partir de R$ 56,00' },
      { nome: 'Carpaccio Salmão Trufado', desc: 'Carpaccio de salmão braseado e regado com azeite trufado, sal rosa e limão siciliano', preco: 'a partir de R$ 47,40' },
      { nome: 'Carpaccio Tilápia em Molho Especial', desc: 'Finas fatias de tilápia em molho da casa especial', preco: 'a partir de R$ 39,00' },
      { nome: 'Carpaccio Usuzukuri', desc: 'Finas fatias de peixe branco, ovas, limão, cebola roxa e especiarias', preco: 'a partir de R$ 45,50' },
      { nome: 'Polvo com Limão', desc: 'Fatias de polvo com limão e gergelim', preco: 'a partir de R$ 39,00' },
      { nome: 'Salmão Crispy', desc: 'Sashimi de salmão na crosta de gergelim coberto com geleia de pimenta artesanal e crispy de couve — 5 unid', preco: 'R$ 51,00' },
      { nome: 'Sashimi Kani', desc: '5 unidades', preco: 'R$ 15,00' },
      { nome: 'Sashimi na Crosta de Gergelim', desc: 'Irresistível sashimi na crosta de gergelim com molho tarê cítrico', preco: 'a partir de R$ 47,00' },
      { nome: 'Sashimis', desc: 'Deliciosas fatias de peixe fresco', preco: 'consulte o garçom' },
      { nome: 'Tatakis', desc: 'Sashimi braseado com molho tarê artesanal, cheiro verde e gergelim — atum ou salmão', preco: 'a partir de R$ 47,40' },
    ],
  },
  {
    secao: 'Combinados de Salmão',
    emoji: '🎌',
    cor: 'var(--gold)',
    itens: [
      { nome: 'Take 10 PÇS', desc: '4 Uramaki Filadélfia, 4 Hossomaki salmão e 2 niguiris de salmão', preco: 'R$ 47,00' },
      { nome: 'Matsu 14 PÇS', desc: '4 Uramaki Filadélfia, 4 Hossomaki salmão, 4 niguiris de salmão e 2 Joe braseado', preco: 'R$ 67,00' },
      { nome: 'Comb Minizinho Joe 9 PÇS', desc: '3 Sashimis, 4 Uramaki Filadélfia e 2 Niguiris ou 2 Joe braseado', preco: 'R$ 59,00' },
      { nome: 'Comb Minizinho Niguiri 9 PÇS', desc: '3 Sashimis, 4 Uramaki Filadélfia e 2 Niguiris', preco: 'R$ 59,00' },
      { nome: 'Comb Mini Salmão 17 PÇS', desc: '5 Sashimis, 4 Uramaki Filadélfia, 4 Hossomaki salmão, 2 Niguiris e 2 Joe braseado', preco: 'R$ 99,00' },
      { nome: 'Comb Salmão 26 PÇS', desc: '10 Sashimis, Uramakis: 4 Filadélfia e 4 Filadélfia Especial, 4 Hossomaki, 2 Niguiris e 2 Joe braseado', preco: 'R$ 149,00' },
      { nome: 'Comb Salmão 35 PÇS', desc: '15 Sashimis, Uramakis: 4 Filadélfia e 4 Filadélfia Especial, 4 Hossomaki, 4 Niguiris e 4 Joe braseado', preco: 'R$ 199,00' },
      { nome: 'Comb Salmão XXL 52 PÇS', desc: '20 Sashimis, Uramakis: 8 Filadélfia, 4 Filadélfia Especial, 4 Niramaki, 4 Niguiris, 4 Joe braseado', preco: 'R$ 279,00' },
      { nome: 'Combo do Chef 24 PÇS', desc: '22 peças + 150g de cubinhos de salmão picante. 10 sashimis: 5 salmão e 5 salmão na crosta de gergelim', preco: 'R$ 224,00' },
    ],
  },
  {
    secao: 'Combinados Mistos',
    emoji: '🍣',
    cor: 'var(--gold-dk)',
    itens: [
      { nome: 'Makimono 20 PÇS', desc: '2 Filadélfia, 2 Filadélfia Especial, 2 Ebi Especial, 2 Imaginum, ½ Hossomaki de salmão e ½ Hossomaki de manga', preco: 'R$ 89,00' },
      { nome: 'Comb 1 — 26 PÇS', desc: '10 Sashimis: salmão, atum, tilápia e polvo. Uramakis: 2 Filadélfia, 2 Filadélfia Especial, 2 Ebi e 2 Imaginum. 2 Niguiris e 2 Joe braseado', preco: 'R$ 149,00' },
      { nome: 'Comb 2 HOT — 26 PÇS', desc: '10 Sashimis + hots. Uramakis: 2 Filadélfia, 2 Filadélfia Especial, 2 Ebi e 2 Imaginum. 2 Niguiris e 2 Joe braseado', preco: 'R$ 159,00' },
      { nome: 'Comb 3 Misto — 35 PÇS', desc: '15 Sashimis: salmão, atum, tilápia e polvo. Uramakis: 2 Filadélfia, 2 Filadélfia Especial, 2 Ebi e 2 Imaginum. 4 Hossomaki, 4 Niguiris e 4 Joe braseado', preco: 'R$ 199,00' },
      { nome: 'Comb 4 — 52 PÇS', desc: '20 Sashimis: salmão, atum, tilápia e polvo. Uramakis: 4 Filadélfia, 4 Filadélfia Especial, 4 Ebi e 4 Imaginum. 4 Niguiris e 4 Joe braseado', preco: 'R$ 289,00' },
      { nome: 'Comb Osaka — 32 PÇS', desc: '12 Sashimis (4 crispy, 4 salmão, 4 tataki). Uramakis: 2 Filadélfia, 2 Filadélfia Especial, 2 Ebi Especial e 2 Imaginum. 2 Niguiris barriga trufado, 2 Joe, 2 Joe braseado, 6 Hot ebi hot', preco: 'R$ 249,00' },
      { nome: 'Sushi Vegetariano — 16 PÇS', desc: '8 uramakis com legumes: ½ Hossomaki de pepino e ½ Hossomaki de manga', preco: 'R$ 69,00' },
    ],
  },
  {
    secao: 'Yakissoba',
    emoji: '🍜',
    cor: 'var(--blue)',
    itens: [
      { nome: 'Yakissoba Camarão', desc: 'Massa fresca com legumes', preco: 'R$ 59,00' },
      { nome: 'Yakissoba Camarão e Frango', desc: 'Massa fresca com legumes', preco: 'R$ 59,00' },
      { nome: 'Yakissoba Carne', desc: 'Massa fresca com legumes', preco: 'R$ 54,00' },
      { nome: 'Yakissoba Carne e Camarão', desc: 'Massa fresca com legumes', preco: 'R$ 69,00' },
      { nome: 'Yakissoba Carne e Frango', desc: 'Massa fresca com legumes', preco: 'R$ 59,00' },
      { nome: 'Yakissoba Frutos do Mar', desc: 'Massa fresca com legumes, lula e camarão', preco: 'R$ 69,00' },
      { nome: 'Yakissoba Vegetariano', desc: 'Massa fresca com legumes e cogumelo shitake', preco: 'R$ 54,00' },
    ],
  },
  {
    secao: 'Bentô Box',
    emoji: '📦',
    cor: 'var(--green)',
    itens: [
      { nome: 'Bentô', desc: 'Arroz yakimeshi + legumes salteados + 4 Hot filadélfia + 1 proteína a sua escolha', preco: 'a partir de R$ 69,00' },
    ],
  },
  {
    secao: 'Sobremesas',
    emoji: '🍡',
    cor: 'var(--gold)',
    itens: [
      { nome: 'Bola de Sorvete', desc: 'Sorvete Kibon, sabor creme', preco: 'R$ 12,00' },
      { nome: 'Especial do Chef', desc: '8 unidades — Morangos e cream cheese enrolados em massa tempurá coberto com leite condensado', preco: 'R$ 42,00' },
      { nome: 'Harumaki Nutella c/ Sorvete', desc: '2 harumakis recheados com Nutella e 1 bola de sorvete de creme', preco: 'R$ 29,00' },
      { nome: 'Hot Banana', desc: '6 unidades — sushi frito com recheio de banana, coberto com chocolate e leite condensado', preco: 'R$ 29,00' },
      { nome: 'Hot Romeu e Julieta', desc: '6 unidades — sushi frito com recheio de goiabada, morango e cream cheese, coberto com chocolate', preco: 'R$ 29,00' },
      { nome: 'Petit Gateau com Sorvete', desc: 'Petit gateau com sorvete de creme', preco: 'R$ 49,00' },
    ],
  },
  {
    secao: 'Porções e Extras',
    emoji: '🫘',
    cor: 'var(--blue)',
    itens: [
      { nome: 'Escolha os seus Extras', desc: 'Molhos, arroz e acompanhamentos adicionais', preco: 'consulte' },
      { nome: 'Porção de Proteína', desc: 'Proteína grelhada ou empanada de sua escolha', preco: 'a partir de R$ 27,90' },
      { nome: 'Prato Kids', desc: '1 proteína e 1 acompanhamento a sua escolha', preco: 'a partir de R$ 39,00' },
    ],
  },
  {
    secao: 'Vinhos e Sake',
    emoji: '🍷',
    cor: 'var(--gold)',
    itens: [
      { nome: 'Vinho Branco', desc: 'Seleção de vinhos brancos', preco: 'consulte' },
      { nome: 'Vinho Rosé', desc: 'Seleção de vinhos rosé', preco: 'consulte' },
      { nome: 'Vinho Espumante', desc: 'Seleção de espumantes', preco: 'consulte' },
      { nome: 'Vinho Tinto', desc: 'Seleção de vinhos tintos', preco: 'consulte' },
      { nome: 'Sake', desc: 'Sake tradicional japonês', preco: 'consulte' },
    ],
  },
  {
    secao: 'Bebidas',
    emoji: '🥤',
    cor: 'var(--blue)',
    itens: [
      { nome: 'Águas', desc: 'Água mineral com ou sem gás', preco: 'a partir de R$ 9,00' },
      { nome: 'Long Neck', desc: 'Cervejas importadas e nacionais', preco: 'a partir de R$ 12,90' },
      { nome: 'Refrigerante', desc: 'Lata — diversas opções', preco: 'consulte' },
      { nome: 'Soda Italiana', desc: 'A sua soda preferida também no delivery', preco: 'R$ 19,00' },
      { nome: 'Suco Natural', desc: '420ml — sabores variados', preco: 'a partir de R$ 13,00' },
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
              <a href="https://imaginumsushi.menudino.com/" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{fontSize:'0.84rem',padding:'10px 20px'}}>Peça Aqui 🛒</a>
              <a href="tel:+554130823093" className="btn btn-outline" style={{fontSize:'0.84rem',padding:'10px 20px'}}>(41) 3082-3093</a>
            </div>
          </div>
        </section>

        <div className="wave-bar" />

        {cardapio.map((s, i) => (
          <section key={i} className={'section' + (i % 2 === 1 ? ' section-dark' : '')} style={{paddingTop:'2.5rem',paddingBottom:'2.5rem'}}>
            <div className="container">
              <div style={{display:'flex',alignItems:'center',gap:'0.75rem',marginBottom:'1.75rem'}}>
                <span style={{fontSize:'1.6rem'}}>{s.emoji}</span>
                <h2 style={{fontSize:'1.5rem',color:i%2===1?'var(--white)':'var(--black)',borderLeft:`3px solid ${s.cor}`,paddingLeft:'0.75rem'}}>{s.secao}</h2>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'1px',background:'rgba(128,128,128,0.1)',borderRadius:'10px',overflow:'hidden'}}>
                {s.itens.map((item, j) => (
                  <div key={j} style={{background:i%2===1?'rgba(255,255,255,0.03)':'rgba(0,0,0,0.02)',padding:'1.1rem 1.25rem',display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:'1rem'}}>
                    <div style={{flex:1}}>
                      <h3 style={{color:i%2===1?'var(--white)':'var(--black)',fontSize:'0.95rem',marginBottom:'0.25rem'}}>{item.nome}</h3>
                      {item.desc && item.desc !== 'consulte' && <p style={{fontSize:'0.81rem',color:i%2===1?'rgba(255,255,255,0.48)':'var(--gray-500)',lineHeight:'1.5'}}>{item.desc}</p>}
                    </div>
                    <span style={{fontFamily:'var(--font-display)',fontSize:'1rem',color:'var(--gold)',fontWeight:700,flexShrink:0,whiteSpace:'nowrap'}}>{item.preco}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <div className="wave-bar" />

        {/* MENU DEGUSTAÇÃO DESTAQUE */}
        <section className="section" style={{background:'var(--surface)',paddingTop:'3rem',paddingBottom:'3rem'}}>
          <div className="container">
            <div style={{maxWidth:700,margin:'0 auto',textAlign:'center'}}>
              <span style={{fontSize:'2rem'}}>🎴</span>
              <h2 style={{margin:'0.75rem 0',color:'var(--white)'}}>Menu <em className="gold">Degustação</em></h2>
              <p style={{marginBottom:'2rem',color:'rgba(255,255,255,0.6)'}}>
                Há quem chame de Rodízio, Festival ou Sequência.<br/>
                Aqui no Imaginum chamamos de <strong style={{color:'var(--white)'}}>Menu Degustação</strong>.<br/>
                Individual e para consumo no local.
              </p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'1px',background:'rgba(220,160,60,0.2)',borderRadius:'12px',overflow:'hidden',marginBottom:'1.5rem'}}>
                <div style={{background:'var(--dark)',padding:'1.5rem',textAlign:'center'}}>
                  <p style={{fontSize:'0.72rem',textTransform:'uppercase',letterSpacing:'0.12em',color:'var(--green)',marginBottom:'0.5rem',fontWeight:600}}>Almoço</p>
                  <p style={{fontSize:'0.84rem',color:'rgba(255,255,255,0.6)',marginBottom:'0.75rem'}}>Seg–Sex<br/><span style={{fontSize:'0.75rem'}}>exceto feriados</span></p>
                  <p style={{fontFamily:'var(--font-display)',fontSize:'1.6rem',color:'var(--gold)',fontWeight:700}}>R$ 189,90</p>
                  <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.4)'}}>por pessoa</p>
                </div>
                <div style={{background:'var(--dark)',padding:'1.5rem',textAlign:'center'}}>
                  <p style={{fontSize:'0.72rem',textTransform:'uppercase',letterSpacing:'0.12em',color:'var(--blue)',marginBottom:'0.5rem',fontWeight:600}}>Jantar</p>
                  <p style={{fontSize:'0.84rem',color:'rgba(255,255,255,0.6)',marginBottom:'0.75rem'}}>Seg–Qui<br/><span style={{fontSize:'0.75rem'}}>exceto feriados</span></p>
                  <p style={{fontFamily:'var(--font-display)',fontSize:'1.6rem',color:'var(--gold)',fontWeight:700}}>R$ 199,90</p>
                  <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.4)'}}>por pessoa</p>
                </div>
                <div style={{background:'var(--dark)',padding:'1.5rem',textAlign:'center'}}>
                  <p style={{fontSize:'0.72rem',textTransform:'uppercase',letterSpacing:'0.12em',color:'var(--gold-dk)',marginBottom:'0.5rem',fontWeight:600}}>Sex, Sáb e Feriados</p>
                  <p style={{fontSize:'0.84rem',color:'rgba(255,255,255,0.6)',marginBottom:'0.75rem'}}>Almoço e Jantar</p>
                  <p style={{fontFamily:'var(--font-display)',fontSize:'1.6rem',color:'var(--gold)',fontWeight:700}}>R$ 219,90</p>
                  <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.4)'}}>por pessoa</p>
                </div>
              </div>
              <a href="tel:+554130823093" className="btn btn-gold">Reservar para o Degustação</a>
            </div>
          </div>
        </section>

        <div className="wave-bar" />

        <section className="section" style={{textAlign:'center',paddingTop:'2.5rem',paddingBottom:'3rem'}}>
          <div className="container">
            <h2 style={{marginBottom:'0.75rem'}}>Pronto para pedir?</h2>
            <p style={{marginBottom:'2rem'}}>Delivery pelo app, iFood ou ligue para reservar sua mesa.</p>
            <div style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap'}}>
              <a href="https://imaginumsushi.menudino.com/" target="_blank" rel="noopener noreferrer" className="btn btn-gold">Peça Aqui 🛒</a>
              <a href="tel:+554130823093" className="btn btn-outline">(41) 3082-3093</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
