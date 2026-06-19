import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Praia de Taperapuã',
    description:
      'Há apenas 7 minutos do hotel, encontre a praia mais famosa da orla norte com águas calmas e brisa suave.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80',
  },
  {
    title: 'Piscina Adulto e Infantil',
    description:
      'Piscinas projetadas para oferecer todo o conforto que você merece enquanto as crianças se divertem.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80',
  },
  {
    title: 'Estação Fit',
    description:
      'Equipamentos de musculação dedicados à sua saúde. Mantenha o treino em dia sem abrir mão das férias.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80',
  },
]

export default function ServicesTeaser() {
  return (
    <section id="servicos-home" className="svc-teaser">
      <div className="container">
        {services.map((service, index) => {
          const reversed = index % 2 !== 0
          return (
            <div
              key={service.title}
              className={`svc-row${reversed ? ' svc-row--reversed svc-row--alt' : ''}`}
            >
              <div className="svc-row__body">
                <h2 className="svc-row__title">{service.title}</h2>
                <p className="svc-row__text">{service.description}</p>
              </div>
              <div className="svc-row__img">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
            </div>
          )
        })}
        <div className="svc-teaser-cta">
          <Link to="/servicos" className="btn btn-outline">MAIS INFORMAÇÕES</Link>
        </div>
      </div>
    </section>
  )
}
