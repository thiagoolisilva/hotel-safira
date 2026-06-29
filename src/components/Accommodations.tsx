import { useRef, useEffect, useState } from 'react'
import { Users } from 'lucide-react'

const rooms = [
  {
    title: 'Suíte Luxo',
    capacity: '2-4 PESSOAS',
    image: '/images/suite-luxo.jpg',
  },
  {
    title: 'Suíte Master',
    capacity: '2 PESSOAS',
    image: '/images/suite-master.jpg',
  },
]

export default function Accommodations() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="acomodacoes"
      className={`accom-section${inView ? ' in-view' : ''}`}
      ref={sectionRef}
    >
      <div className="container">
        {/* Two-column header */}
        <div className="accom-header">
          <div className="accom-header-left">
            <span className="section-label">NOSSOS APARTAMENTOS</span>
            <h2 className="accom-title">Conheça nossas<br />acomodações</h2>
          </div>
          <div className="accom-header-right">
            <p className="accom-header-sub">Descubra o conforto das nossas acomodações</p>
            <p className="accom-header-desc">
              Ambientes cuidadosamente projetados para oferecer o máximo de conforto e
              privacidade aos nossos hóspedes.
            </p>
          </div>
        </div>

        {/* Room cards grid */}
        <div className="accom-grid">
          {rooms.map((room, i) => (
            <div
              key={room.title}
              className="room-card-new"
              style={{ transitionDelay: `${0.18 + i * 0.15}s` }}
            >
              <div className="room-card-new-img">
                <img src={room.image} alt={room.title} loading="lazy" />
              </div>
              <div className="room-card-new-info">
                <div className="room-card-new-left">
                  <h3 className="room-card-new-title">{room.title}</h3>
                  <div className="room-card-new-cap">
                    <Users size={14} />
                    <span>{room.capacity}</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/5573988613327?text=Olá!%20Gostaria%20de%20reservar%20a%20suíte."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-reserve-now"
                >
                  RESERVE AGORA
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
