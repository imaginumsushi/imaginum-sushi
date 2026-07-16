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
        <a href="https://wa.me/554130823093" target="_blank" rel="noopener noreferrer" style={{fontSize:"0.84rem",fontWeight:500,color:"rgba(255,255,255,0.7)",letterSpacing:"0.04em",transition:"color 0.2s"}} onMouseOver={e=>(e.currentTarget.style.color="var(--green)")} onMouseOut={e=>(e.currentTarget.style.color="rgba(255,255,255,0.7)")}>Reservar 📲</a>
        <a href="https://imaginumsushi.menudino.com/" target="_blank" rel="noopener noreferrer" className="nav-cta">Peça Aqui 🛒</a>
      </div>
    </nav>
  )
}
