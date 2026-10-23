'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

// 3. Botão fixo no rodapé do celular. Aparece depois que a pessoa rola um pouco a página,
// some na página de reserva e pode ser fechado (fica fechado até o fim da visita).
export default function PromoBarMobile() {
  const pathname = usePathname() || '/'
  const [visivel, setVisivel] = useState(false)
  const [fechado, setFechado] = useState(false)

  useEffect(() => {
    try { if (sessionStorage.getItem('promo_bar_fechada') === '1') setFechado(true) } catch { /* sem storage */ }
    const onScroll = () => setVisivel(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const ativo = visivel && !fechado && !pathname.startsWith('/reserva')

  // reserva espaço no fim da página para a barra não cobrir conteúdo nem o rodapé
  useEffect(() => {
    document.body.classList.toggle('com-promo-bar', ativo)
    return () => document.body.classList.remove('com-promo-bar')
  }, [ativo])

  if (!ativo) return null

  const fechar = () => {
    setFechado(true)
    try { sessionStorage.setItem('promo_bar_fechada', '1') } catch { /* sem storage */ }
  }

  return (
    <div className="promo-bar" role="region" aria-label="Oferta Menu Degustação">
      <Link href={`/reserva?cta=barra_celular${pathname === '/' ? '_home' : '_' + pathname.replace(/\W+/g, '')}`} className="promo-bar-link">
        <span className="promo-btn-selo">Oferta Exclusiva</span>
        <span className="promo-bar-texto">Menu Degustação R$ 179,90 · Reservar</span>
      </Link>
      <button type="button" className="promo-bar-fechar" onClick={fechar} aria-label="Fechar oferta">×</button>
    </div>
  )
}
