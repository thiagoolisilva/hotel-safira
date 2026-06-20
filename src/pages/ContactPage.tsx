import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Instagram, Facebook, Send, CheckCircle } from 'lucide-react'
import ExclusiveOffer from '../components/ExclusiveOffer'

interface FormState {
  nome: string
  telefone: string
  email: string
  mensagem: string
}

const initialForm: FormState = { nome: '', telefone: '', email: '', mensagem: '' }

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm(initialForm)
    }, 1200)
  }

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero page-hero--contact">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Página inicial</Link>
            <span>/</span>
            <span>Contato</span>
          </nav>
          <h1 className="page-hero-title">Gostaríamos muito de te ouvir</h1>
          <p className="page-hero-sub">
            Valorizamos cada experiência dos nossos hóspedes e estamos sempre prontos para ajudar.
          </p>
        </div>
      </div>

      {/* Main content */}
      <section className="section">
        <div className="container">
          <div className="cpage-grid">

            {/* Contact Form */}
            <div className="cpage-form-col">
              <h2 className="cpage-col-title">Envie uma mensagem</h2>
              <div className="section-divider" style={{ margin: '0.75rem 0 1.75rem' }} />

              {sent ? (
                <div className="form-success">
                  <CheckCircle size={48} />
                  <h3>Mensagem enviada!</h3>
                  <p>Obrigado pelo contato. Responderemos em breve.</p>
                  <button className="btn btn-primary" onClick={() => setSent(false)}>
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <div className="form-group">
                    <label htmlFor="nome" className="form-label">Nome *</label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      className="form-control"
                      placeholder="Seu nome completo"
                      value={form.nome}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="telefone" className="form-label">Telefone *</label>
                      <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        className="form-control"
                        placeholder="(00) 00000-0000"
                        value={form.telefone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">E-mail *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensagem" className="form-label">Mensagem *</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      className="form-control"
                      rows={6}
                      placeholder="Como podemos ajudá-lo?"
                      value={form.mensagem}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={sending}
                    style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}
                  >
                    {sending ? 'Enviando…' : (<><Send size={16} /> ENVIAR MENSAGEM</>)}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="cpage-info-col">
              <h2 className="cpage-col-title">Informações de contato</h2>
              <div className="section-divider" style={{ margin: '0.75rem 0 1.75rem' }} />

              <div className="contact-list">
                <div className="contact-item">
                  <div className="contact-icon"><MapPin size={20} /></div>
                  <div className="contact-detail">
                    <strong>Endereço</strong>
                    <p>Av. do Coqueiral, 540 - Praia Taperapuã<br />Porto Seguro - BA</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon"><Phone size={20} /></div>
                  <div className="contact-detail">
                    <strong>Telefone / WhatsApp</strong>
                    <a href="tel:+5573988613327">+55 73 98861-3327</a>
                    <a href="tel:+557331627110">+55 73 3162-7110</a>
                    <a href="tel:+557331627100">+55 73 3162-7100</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon"><Mail size={20} /></div>
                  <div className="contact-detail">
                    <strong>E-mail</strong>
                    <a href="mailto:reservas@safirapraiahotel.com">
                      reservas@safirapraiahotel.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-socials" style={{ marginTop: '1.5rem' }}>
                <a
                  href="https://www.instagram.com/safirapraiahotel"
                  target="_blank" rel="noopener noreferrer"
                  className="social-btn" aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/safirapraiahotel"
                  target="_blank" rel="noopener noreferrer"
                  className="social-btn" aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://www.tripadvisor.com.br/Hotel_Review-g303270-d9741186-Reviews-Safira_Praia_Hotel-Porto_Seguro_State_of_Bahia.html"
                  target="_blank" rel="noopener noreferrer"
                  className="social-btn" aria-label="TripAdvisor"
                >
                  <svg width="20" height="14" viewBox="0 0 60 42" fill="currentColor" aria-hidden="true">
                    <ellipse cx="15" cy="21" rx="12" ry="12" />
                    <ellipse cx="45" cy="21" rx="12" ry="12" />
                    <circle cx="15" cy="21" r="6" fill="var(--color-primary)" />
                    <circle cx="45" cy="21" r="6" fill="var(--color-primary)" />
                    <circle cx="15" cy="21" r="3" />
                    <circle cx="45" cy="21" r="3" />
                    <polygon points="30,4 35,14 25,14" />
                  </svg>
                </a>
              </div>

              {/* Map */}
              <div className="cpage-map">
                <iframe
                  src="https://www.google.com/maps?q=Av.+do+Coqueiral,+540,+Praia+Taperapua,+Porto+Seguro,+BA,+Brasil&output=embed"
                  title="Localização Safira Praia Hotel"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <ExclusiveOffer />
    </>
  )
}
