const offers = [
  {
    location: 'PORTO SEGURO - BAHIA',
    title: ['BAIXA', 'TEMPORADA'],
    period: 'AGOSTO | SETEMBRO | OUTUBRO',
    tagline: 'O seu refúgio na Bahia',
    badge: '15%OFF',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    link: 'https://wa.me/5573988613327?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20Baixa%20Temporada.',
  },
  {
    location: 'PORTO SEGURO - BAHIA',
    title: ['RÉVEILLON', 'SAFIRA'],
    description: 'Receba o ano novo com as energias renovadas e o pé na areia.',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1200&q=80',
    link: 'https://wa.me/5573988613327?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20Réveillon.',
  },
]

export default function Offers() {
  return (
    <section id="promocoes" className="offers">
      <div className="container">
        <h2 className="section-title">Ofertas</h2>

        <div className="offers-grid">
          {offers.map((offer) => (
            <div key={offer.title[0]} className="offer-card">
              <img src={offer.image} alt={offer.title.join(' ')} loading="lazy" />

              <div className="offer-overlay">
                <div className="offer-top">
                  <span className="offer-location">{offer.location}</span>
                  <h3 className="offer-title">
                    <strong>{offer.title[0]}</strong>
                    <span>{offer.title[1]}</span>
                  </h3>
                  {'period' in offer && (
                    <p className="offer-period">{offer.period}</p>
                  )}
                </div>

                <div className="offer-bottom">
                  {'tagline' in offer && (
                    <p className="offer-tagline">{offer.tagline}</p>
                  )}
                  {'badge' in offer && (
                    <span className="offer-badge">{offer.badge}</span>
                  )}
                  {'description' in offer && (
                    <p className="offer-desc">{offer.description}</p>
                  )}
                  <a
                    href={offer.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="offer-btn"
                  >
                    SAIBA MAIS
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
