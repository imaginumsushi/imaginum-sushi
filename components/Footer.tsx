import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Image src="/logo.png" alt="Imaginum Sushi" width={120} height={36} style={{objectFit:'contain',opacity:0.6}} />
            </div>
            <p>Japanese Fusion Food em Curitiba.<br/>Ingredientes frescos, experiências inesquecíveis.</p>
          </div>
          <div className="footer-col">
            <h4>Navegação</h4>
            <Link href="/cardapio">Cardápio</Link>
            <Link href="/sobre">Sobre nós</Link>
            <Link href="/delivery">Delivery</Link>
            <Link href="/reservas">Reservas</Link>
          </div>
          <div className="footer-col">
            <h4>Contato</h4>
            <p>Rua Tabajaras, 714 — Vila Izabel</p>
            <p>Curitiba/PR</p>
            <a href="tel:+554130823093">(41) 3082-3093</a>
            <a href="https://wa.me/554130823093" target="_blank" rel="noopener noreferrer">WhatsApp 📲</a>
            <p style={{marginTop:'0.75rem'}}>Seg–Sáb: 11h30–23h30</p>
            <p>Domingo: Fechado</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Imaginum Sushi. Todos os direitos reservados.</p>
          <div className="social-row">
            <a href="https://www.instagram.com/imaginumsushi" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/imaginumsushi" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.tripadvisor.com.br" target="_blank" rel="noopener noreferrer">TripAdvisor</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
