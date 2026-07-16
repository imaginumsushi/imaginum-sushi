import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="nav-logo" style={{ fontSize: '1.1rem' }}>
              IMAGINUM <span style={{ color: 'var(--gold)' }}>SUSHI</span>
            </div>
            <p>Japanese Fusion Food em Curitiba. Ingredientes frescos selecionados diariamente na Vila Izabel.</p>
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
            <p>Rua Tabajaras, 714</p>
            <p>Vila Izabel — Curitiba/PR</p>
            <a href="tel:+554130823093">(41) 3082-3093</a>
            <p style={{ marginTop: '0.75rem' }}>Seg–Sex: 11h30–14h30 e 18h–23h30</p>
            <p>Sáb: 11h30–15h e 18h–23h30</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Imaginum Sushi. Todos os direitos reservados.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/imaginumsushi" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/imaginumsushi" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.tripadvisor.com.br" target="_blank" rel="noopener noreferrer">TripAdvisor</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
