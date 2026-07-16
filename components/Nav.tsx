'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/">
        <Image src="/logo.png" alt="Imaginum Sushi" width={140} height={42} style={{objectFit:'contain'}} priority />
      </Link>
      <div className="nav-links">
        <Link href="/cardapio">Cardápio</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/delivery">Delivery</Link>

        <a href="https://www.instagram.com/imaginumsushi" target="_blank" rel="noopener noreferrer" title="Instagram" className="nav-social">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Instagram">
            <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
          </svg>
        </a>

        <a href="https://www.facebook.com/imaginumsushi" target="_blank" rel="noopener noreferrer" title="Facebook" className="nav-social">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-label="Facebook">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>

        <a href="https://www.tripadvisor.com.br" target="_blank" rel="noopener noreferrer" title="TripAdvisor" className="nav-social">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-label="TripAdvisor">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="8" cy="12" r="2"/>
            <circle cx="16" cy="12" r="2"/>
            <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
          </svg>
        </a>

        <span className="nav-divider" />

        <a href="https://wa.me/554130823093" target="_blank" rel="noopener noreferrer" className="btn-reservar">
          Reservar
        </a>
        <a href="https://imaginumsushi.menudino.com/" target="_blank" rel="noopener noreferrer" className="btn-peca">
          Peça Aqui
        </a>
      </div>
    </nav>
  )
}
