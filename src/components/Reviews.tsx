import { useEffect, useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const reviews = [
  {
    name: 'Naiára C.',
    initials: 'NC',
    date: 'Jan 2025',
    text: 'Foi uma ótima estadia, tudo limpo e organizado! Funcionários receptivos e educados. Super recomendo o Safira Praia Hotel!',
  },
  {
    name: 'Kátia M.',
    initials: 'KM',
    date: 'Dez 2024',
    text: 'Tranquilo, limpíssimo, funcionários muito educados e prestativos, café da manhã maravilhoso. Uma experiência incrível!',
  },
  {
    name: 'Alessandra S.',
    initials: 'AS',
    date: 'Nov 2024',
    text: 'Atendimento impecável! O quarto estava muito bem cuidado e a equipe foi extremamente profissional e simpática. Voltarei com certeza.',
  },
  {
    name: 'Roberto F.',
    initials: 'RF',
    date: 'Out 2024',
    text: 'Hotel excelente! Localização perfeita, perto da praia e com ótima estrutura. A piscina é linda e o café da manhã é farto e delicioso.',
  },
  {
    name: 'Mariana L.',
    initials: 'ML',
    date: 'Set 2024',
    text: 'Passamos uma semana maravilhosa. O hotel é muito bem cuidado, os quartos são confortáveis e a equipe é sempre muito atenciosa.',
  },
  {
    name: 'Carlos E.',
    initials: 'CE',
    date: 'Ago 2024',
    text: 'Ótimo custo-benefício! Estrutura completa com piscina, academia e bar. Porto Seguro é incrível e o Safira tornou tudo ainda melhor.',
  },
]

// Clones at both ends for seamless infinite loop in both directions
const cloned = [...reviews, ...reviews, ...reviews]
const OFFSET = reviews.length // start in the middle copy

export default function Reviews() {
  const [idx, setIdx] = useState(OFFSET)
  const trackRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const setInstant = (newIdx: number) => {
    const track = trackRef.current
    if (!track) return
    track.style.transition = 'none'
    setIdx(newIdx)
    requestAnimationFrame(() => requestAnimationFrame(() => {
      if (trackRef.current) trackRef.current.style.transition = ''
    }))
  }

  const go = (newIdx: number) => {
    setIdx(newIdx)
    // Reset auto-advance timer on manual navigation
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setIdx(i => i + 1), 20000)
  }

  // Auto-advance every 20 seconds, always forward (left)
  useEffect(() => {
    timerRef.current = setInterval(() => setIdx(i => i + 1), 20000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  // Seamless wrap: after transition ends, snap without animation
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onEnd = () => {
      if (idx >= OFFSET + reviews.length) setInstant(idx - reviews.length)
      else if (idx < OFFSET) setInstant(idx + reviews.length)
    }
    track.addEventListener('transitionend', onEnd)
    return () => track.removeEventListener('transitionend', onEnd)
  }, [idx])

  // translateX: each card = 100% / cloned.length of the track
  // track width = cloned.length / 3 * 100% of wrapper
  // translateX(-n / cloned.length * 100%) moves n cards left
  const tx = -(idx / cloned.length) * 100

  return (
    <section className="reviews section section-alt">
      <div className="container">
        <div className="reviews-intro">
          <div className="ta-badge">
            <svg width="20" height="14" viewBox="0 0 60 42" fill="#00AA6C" aria-hidden="true">
              <ellipse cx="15" cy="21" rx="12" ry="12" />
              <ellipse cx="45" cy="21" rx="12" ry="12" />
              <circle cx="15" cy="21" r="6" fill="white" />
              <circle cx="45" cy="21" r="6" fill="white" />
              <circle cx="15" cy="21" r="3" />
              <circle cx="45" cy="21" r="3" />
              <polygon points="30,4 35,14 25,14" />
            </svg>
            TripAdvisor
          </div>
          <h2 className="section-title">O que nossos hóspedes dizem</h2>
          <div className="section-divider" />
        </div>

        <div className="reviews-carousel">
          <button className="carousel-btn" onClick={() => go(idx - 1)} aria-label="Anterior">
            <ChevronLeft size={18} />
          </button>

          <div className="reviews-track-wrapper">
            <div
              ref={trackRef}
              className="reviews-track"
              style={{ transform: `translateX(${tx}%)` }}
            >
              {cloned.map((review, i) => (
                <div key={i} className="review-card">
                  <div className="review-card-inner">
                    <div className="review-stars">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={15} fill="currentColor" />
                      ))}
                    </div>
                    <p className="review-text">"{review.text}"</p>
                    <div className="review-author">
                      <div className="review-avatar">{review.initials}</div>
                      <div>
                        <div className="review-name">{review.name}</div>
                        <div className="review-date">{review.date} · TripAdvisor</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn" onClick={() => go(idx + 1)} aria-label="Próximo">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
