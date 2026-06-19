import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img
              src="https://safirapraiahotel.com/wp-content/uploads/2024/05/SAFIRA-LOGO-BRANCA-HORIZONTAL.png"
              alt="Safira Praia Hotel"
            />
            <p>
              Seu refúgio na deslumbrante Orla de Porto Seguro, onde cada momento é uma celebração da vida no calor da Bahia.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.25rem' }}>
              <a
                href="https://www.instagram.com/safirapraiahotel"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.facebook.com/safirapraiahotel"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-h">Navegação</h4>
            <nav className="footer-links">
              <a href="#home">Home</a>
              <a href="#sobre">Sobre nós</a>
              <a href="#servicos">Serviços</a>
              <a href="#acomodacoes">Hospedagem</a>
              <a href="#promocoes">Promoções</a>
              <a href="#contato">Contato</a>
            </nav>
          </div>

          <div>
            <h4 className="footer-h">Acomodações</h4>
            <nav className="footer-links">
              <a href="#acomodacoes">Suíte Luxo</a>
              <a href="#acomodacoes">Suíte Master</a>
            </nav>
          </div>

          <div>
            <h4 className="footer-h">Contato</h4>
            <div className="footer-contacts">
              <div className="footer-contact-item">
                <MapPin size={14} />
                <span>Av. do Coqueiral, 540 - Praia Taperapuã, Porto Seguro - BA</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={14} />
                <a href="tel:+5573988613327">+55 73 98861-3327</a>
              </div>
              <div className="footer-contact-item">
                <Phone size={14} />
                <a href="tel:+557331627110">+55 73 3162-7110</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={14} />
                <a href="mailto:reservas@safirapraiahotel.com">reservas@safirapraiahotel.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Safira Praia Hotel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
