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
        <a href="https://imaginumsushi.menudino.com/" target="_blank" rel="noopener noreferrer" className="nav-cta">Peça Aqui 🛒</a>
      </div>
    </nav>
  )
}
