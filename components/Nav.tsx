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
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
          </svg>
        </a>

        <a href="https://www.facebook.com/imaginumsushi" target="_blank" rel="noopener noreferrer" title="Facebook" className="nav-social">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>

        <a href="https://www.tripadvisor.com.br" target="_blank" rel="noopener noreferrer" title="TripAdvisor" className="nav-social">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
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
