import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Praia de Taperapuã',
    description:
      'Há apenas 7 minutos do nosso hotel, você encontrará a praia mais famosa da orla norte, com águas calmas para mergulhar e revigorar, sentindo a brisa suave e o calor reconfortante.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  },
  {
    title: 'Piscina Adulto e Infantil',
    description:
      'Nossas piscinas projetadas para oferecer todo o conforto que você merece durante suas férias enquanto as crianças se divertem.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80',
  },
  {
    title: 'Estação Fit',
    description:
      'Máquinas e Equipamentos de musculação dedicados à sua saúde e bem-estar. Mantenha o seu treino em dia e não perca a rotina de exercícios nem mesmo durante as férias.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
  },
]

export default function ServicesTeaser() {
  return (
    <section id="servicos-home">
      {services.map((service, index) => {
        const reversed = index % 2 !== 0
        const body = (
          <div className="svc-row__body">
            <h2 className="svc-row__title">{service.title}</h2>
            <p className="svc-row__text">{service.description}</p>
            <Link to="/servicos" className="btn-ver-mais">VER MAIS</Link>
          </div>
        )
        const img = (
          <div className="svc-row__img">
            <img src={service.image} alt={service.title} loading="lazy" />
          </div>
        )
        return (
          <div
            key={service.title}
            className={`svc-row${reversed ? ' svc-row--reversed svc-row--alt' : ''}`}
          >
            {reversed ? <>{img}{body}</> : <>{body}{img}</>}
          </div>
        )
      })}
    </section>
  )
}
