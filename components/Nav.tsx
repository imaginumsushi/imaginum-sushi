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
        <Link href="/reservas">Contato</Link>
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
