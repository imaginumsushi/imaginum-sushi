'use client'
import { useState } from 'react'

const faqs = [
  { q: 'Qual o endereço do Imaginum Sushi em Curitiba?', a: 'Rua Tabajaras, 714, Vila Izabel, Curitiba/PR.' },
  { q: 'Qual o horário de funcionamento?', a: 'Seg–Sáb: 11h30–23h30. Domingo: Fechado.' },
  { q: 'O Imaginum Sushi faz delivery em Curitiba?', a: 'Sim! Faça seu pedido em imaginumsushi.menudino.com ou pelo iFood. Entregamos em Curitiba e região.' },
  { q: 'Como fazer reservas?', a: 'Via WhatsApp (41) 3082-3093. Recomendamos reservar com antecedência nos fins de semana.' },
  { q: 'Quais formas de pagamento são aceitas?', a: 'Dinheiro, Pix, cartão de crédito e débito de todas as bandeiras.' },
  { q: 'Tem opções vegetarianas?', a: 'Sim! Temos temakis e uramakis vegetarianos com pepino, abacate, legumes e muito mais. Consulte nosso cardápio completo.' },
  { q: 'O que é o Menu Degustação?', a: 'Nosso rodízio exclusivo. Almoço seg–sex R$ 189,90/pessoa; Jantar seg–qui R$ 199,90/pessoa; Sex, sáb e feriados R$ 219,90/pessoa. Individual e para consumo no local.' },
  { q: 'Que tipo de culinária o Imaginum Sushi serve?', a: 'Japanese Fusion Food: combinados, temakis artesanais, hot rolls, sashimis, yakissoba, bentô box e sobremesas japonesas.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="section" id="faq">
      <div className="container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:'6rem',alignItems:'start'}}>
          <div>
            <p className="tag-pill">Dúvidas</p>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:'clamp(2rem,4vw,3rem)',fontWeight:300,color:'var(--white)',lineHeight:1.15}}>
              Perguntas<br /><em style={{fontStyle:'italic',color:'var(--gold)'}}>frequentes</em>
            </h2>
          </div>
          <div>
            {faqs.map((item, i) => (
              <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                  {item.q}
                  <span className="faq-icon">{open === i ? '−' : '+'}</span>
                </button>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
