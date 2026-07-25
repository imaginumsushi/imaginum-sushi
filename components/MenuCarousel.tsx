'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface MenuItem {
  cat: string
  nome: string
  desc: string
  preco: string
  foto?: string
  fotos?: string[]
}

function CardCarousel({ item }: { item: MenuItem }) {
  const fotos = item.fotos || (item.foto ? [item.foto] : [])
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (fotos.length <= 1) return
    const t = setInterval(() => setIdx(i => (i + 1) % fotos.length), 2500)
    return () => clearInterval(t)
  }, [fotos.length])

  return (
    <div className="menu-item" style={{padding:0,overflow:'hidden'}}>
      <div style={{position:'relative',height:200,overflow:'hidden'}}>
        {fotos.map((src, i) => (
          <div key={src} style={{position:'absolute',inset:0,opacity:i===idx?1:0,transition:'opacity 0.8s ease'}}>
            <Image src={src} alt={`${item.nome} — Imaginum Sushi Curitiba`} fill style={{objectFit:'cover'}} sizes="(max-width:768px) 100vw, 33vw" />
          </div>
        ))}
        <div style={{position:'absolute',inset:0,background:'linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 60%)',zIndex:1}} />
        <p className="menu-item-cat" style={{position:'absolute',top:12,left:16,zIndex:2}}>{item.cat}</p>
        {fotos.length > 1 && (
          <div style={{position:'absolute',bottom:10,right:12,zIndex:2,display:'flex',gap:4}}>
            {fotos.map((_,i) => (
              <span key={i} onClick={()=>setIdx(i)} style={{width:5,height:5,borderRadius:'50%',background:i===idx?'var(--gold)':'rgba(255,255,255,0.4)',transition:'background 0.3s',cursor:'pointer',display:'block'}} />
            ))}
          </div>
        )}
      </div>
      <div style={{padding:'1.25rem 1.5rem'}}>
        <h3>{item.nome}</h3>
        <p>{item.desc}</p>
        <p className="menu-item-price">{item.preco}</p>
      </div>
    </div>
  )
}

const menuDestaques: MenuItem[] = [
  { cat:'Combinados', nome:'Combinado Misto', desc:'Sashimis, uramakis, niguiris e muito mais — a experiência completa', preco:'a partir de R$ 149,00', foto:'/fotos/combinado-misto.jpg' },
  { cat:'Combinados de Salmão', nome:'Combinado Salmão', desc:'Sashimis, uramakis filadélfia, hossomakis e Joe braseado', preco:'a partir de R$ 99,00', foto:'/fotos/combinado-salmao.jpg' },
  { cat:'Sashimis', nome:'Sashimis Especiais', desc:'Fatias frescas de salmão, atum, polvo e muito mais', preco:'a partir de R$ 37,00', foto:'/fotos/sashimi.jpg' },
  { cat:'Carpaccios', nome:'Carpaccio Usuzukuri', desc:'Finas fatias de peixe branco, ovas, limão, cebola roxa e especiarias', preco:'a partir de R$ 45,50', foto:'/fotos/carpaccio-usuzukuri.jpg' },
  { cat:'Exclusivos', nome:'Joe Brie', desc:'Massa fina e queijo Brie enrolando peixe, geleia de pimenta artesanal e rúcula — 5 unid', preco:'R$ 62,00', foto:'/fotos/joe-brie.jpg' },
  {
    cat:'Entradas',
    nome:'Entradas Especiais',
    desc:'Casquinha, Ceviche do Chef, Edamame, Guioza, Kimchee, Missoshiro, Shitake, Sunomono e muito mais',
    preco:'a partir de R$ 12,00',
    fotos:[
      '/fotos/entradas/casquinha.jpg',
      '/fotos/entradas/ceviche.jpg',
      '/fotos/entradas/cubinhos.jpg',
      '/fotos/entradas/edamame.jpg',
      '/fotos/entradas/entradas-mistas.jpg',
      '/fotos/entradas/guioza.jpg',
      '/fotos/entradas/kimchee.jpg',
      '/fotos/entradas/missoshiro.jpg',
      '/fotos/entradas/shitake.jpg',
      '/fotos/entradas/sunomono.jpg',
    ],
  },
]

export default function MenuCarousel() {
  return (
    <section style={{paddingTop:'5rem',paddingBottom:0}}>
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
        {menuDestaques.map((item, i) => <CardCarousel key={i} item={item} />)}
      </div>
    </section>
  )
}
