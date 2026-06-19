export default function ExclusiveOffer() {
  return (
    <section className="excl-offer">
      <img
        src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80"
        alt="Piscina Safira Praia Hotel"
        className="excl-offer__img"
      />
      <div className="excl-offer__overlay" />

      <div className="container excl-offer__content">
        <span className="excl-offer__tag">OFERTA EXCLUSIVA</span>
        <h2 className="excl-offer__title">
          Reserve agora e aproveite 10% de um desconto especial
        </h2>
        <p className="excl-offer__desc">
          Esta é uma oferta exclusiva para os visitantes do nosso site. Reserve agora!
        </p>
        <a
          href="https://wa.me/5573988613327?text=Olá!%20Quero%20o%20desconto%20de%2010%25."
          target="_blank"
          rel="noopener noreferrer"
          className="excl-offer__btn"
        >
          RESERVE AGORA
        </a>
      </div>
    </section>
  )
}
