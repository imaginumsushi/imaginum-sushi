import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        IMAGINUM <span>SUSHI</span>
      </Link>
      <div className="nav-links">
        <Link href="/cardapio">Cardápio</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/delivery">Delivery</Link>
        <Link href="/reservas" className="nav-cta">Reservar mesa</Link>
      </div>
    </nav>
  )
}
