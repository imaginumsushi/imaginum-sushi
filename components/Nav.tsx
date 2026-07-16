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
        <a
          href="https://wa.me/554130823093"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background:'#25d366',
            color:'#fff',
            padding:'8px 18px',
            borderRadius:'4px',
            fontWeight:600,
            fontSize:'0.84rem',
            letterSpacing:'0.04em',
            transition:'opacity 0.2s',
          }}
        >
          Reservar 📲
        </a>
        <a
          href="https://imaginumsushi.menudino.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background:'var(--gold-dk)',
            color:'#fff',
            padding:'8px 18px',
            borderRadius:'4px',
            fontWeight:600,
            fontSize:'0.84rem',
            letterSpacing:'0.04em',
            transition:'opacity 0.2s',
          }}
        >
          Peça Aqui 🛒
        </a>
      </div>
    </nav>
  )
}
