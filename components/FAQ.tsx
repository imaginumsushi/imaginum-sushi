'use client'
import { useState } from 'react'

const faqs = [
  { q: 'O Imaginum Sushi fica em qual endereço em Curitiba?', a: 'O Imaginum Sushi fica na Rua Tabajaras, 714, Vila Izabel, Curitiba/PR. Referência: próximo ao bairro Água Verde.' },
  { q: 'Qual o horário de funcionamento do Imaginum Sushi?', a: 'Seg–Sáb: 11h30–23h30. Domingo: Fechado.' },
  { q: 'O Imaginum Sushi faz delivery em Curitiba?', a: 'Sim! Temos app próprio disponível na App Store e Google Play. Também estamos presentes no iFood. Entregamos em Curitiba e região.' },
  { q: 'O Imaginum Sushi aceita reservas?', a: 'Sim, aceitamos reservas pelo telefone (41) 3082-3093 e pelo WhatsApp. Recomendamos reservar com antecedência nos fins de semana.' },
  { q: 'Quais formas de pagamento são aceitas?', a: 'Aceitamos dinheiro, Pix, cartão de crédito e débito de todas as bandeiras. No delivery, aceitamos pagamento online ou na entrega.' },
  { q: 'O Imaginum Sushi tem app próprio?', a: 'Sim! Nosso aplicativo está disponível na App Store (iOS) e Google Play (Android) para pedidos de delivery com promoções exclusivas.' },
  { q: 'Tem opções vegetarianas no cardápio?', a: 'Sim! Temos temakis e uramakis vegetarianos com pepino, abacate e cream cheese. Consulte nosso cardápio completo para ver todas as opções.' },
  { q: 'Que tipo de culinária o Imaginum Sushi serve?', a: 'Japanese Fusion Food: combinados frescos, temakis artesanais, hot rolls crocantes, sashimis e entradas japonesas como edamame, missoshiru e guioza.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section" id="faq">
      <div className="container">
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <p className="tag-pill">Dúvidas frequentes</p>
          <h2 style={{ marginBottom: '2.5rem' }}>Perguntas <em className="gold">frequentes</em></h2>
          <div className="faq-list">
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
