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

        {/* Ícones sociais */}
        <a href="https://www.instagram.com/imaginumsushi" target="_blank" rel="noopener noreferrer" title="Instagram" style={{display:'flex',alignItems:'center',opacity:0.6,transition:'opacity 0.2s'}} onMouseOver={e=>(e.currentTarget.style.opacity='1')} onMouseOut={e=>(e.currentTarget.style.opacity='0.6')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/imaginumsushi" target="_blank" rel="noopener noreferrer" title="Facebook" style={{display:'flex',alignItems:'center',opacity:0.6,transition:'opacity 0.2s'}} onMouseOver={e=>(e.currentTarget.style.opacity='1')} onMouseOut={e=>(e.currentTarget.style.opacity='0.6')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a href="https://www.tripadvisor.com.br/Restaurant_Review-g303441-d3386531-Reviews-Imaginum_Sushi-Curitiba_State_of_Parana.html" target="_blank" rel="noopener noreferrer" title="TripAdvisor" style={{display:'flex',alignItems:'center',opacity:0.6,transition:'opacity 0.2s'}} onMouseOver={e=>(e.currentTarget.style.opacity='1')} onMouseOut={e=>(e.currentTarget.style.opacity='0.6')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm5 11H7v-1c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5v1z"/>
          </svg>
        </a>

        {/* Separador */}
        <span style={{width:'1px',height:'18px',background:'rgba(245,242,237,0.15)',display:'block'}} />

        {/* Botões de ação */}
        <a
          href="https://wa.me/554130823093"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-reservar"
        >
          Reservar
        </a>
        <a
          href="https://imaginumsushi.menudino.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-peca"
        >
          Peça Aqui
        </a>
      </div>
    </nav>
  )
}
