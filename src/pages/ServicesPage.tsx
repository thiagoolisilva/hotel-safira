import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import ExclusiveOffer from '../components/ExclusiveOffer'
import Reviews from '../components/Reviews'

interface Service {
  title: string
  description: string
  image: string
}

const services: Service[] = [
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
  {
    title: 'Salão de Jogos',
    description:
      'Diversão garantida para toda a família! Nosso Salão de Jogos oferece entretenimento para hóspedes de todas as idades. O lugar ideal para confraternizar e criar memórias especiais.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
  },
  {
    title: 'Bar de Piscina',
    description:
      'Experimente nossos drinks tropicais, bebidas geladas e petiscos deliciosos sem sair da área da piscina. O lugar perfeito para relaxar com uma bebida na mão ao sol da Bahia.',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1200&q=80',
  },
  {
    title: 'Café da Manhã',
    description:
      'Comece o dia com energia! Nosso café da manhã oferece pães frescos, frutas tropicais, bolos caseiros, frios, sucos naturais e bebidas quentes. Uma experiência gastronômica incrível.',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1200&q=80',
  },
  {
    title: 'Estacionamento Gratuito',
    description:
      'Comodidade desde a chegada! O Safira Praia Hotel oferece estacionamento gratuito com vagas reservadas para todos os hóspedes. Deixe seu veículo seguro e aproveite com tranquilidade.',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1200&q=80',
  },
]

export default function ServicesPage() {
  const rowsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    rowsRef.current.forEach(row => { if (row) observer.observe(row) })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="svc-page">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Página inicial</Link>
            <span>/</span>
            <span>Serviços</span>
          </nav>
          <h1 className="page-hero-title">Nossos Serviços</h1>
          <p className="page-hero-sub">
            Conheça tudo o que o Safira Praia Hotel tem a oferecer para a sua estadia perfeita.
          </p>
        </div>
      </div>

      {/* Full-bleed alternating service rows */}
      {services.map((service, index) => {
        const reversed = index % 2 !== 0
        return (
          <div
            key={service.title}
            ref={el => { rowsRef.current[index] = el }}
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

      <ExclusiveOffer />

      <Reviews />
    </div>
  )
}
