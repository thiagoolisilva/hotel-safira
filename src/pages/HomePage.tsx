import Hero from '../components/Hero'
import About from '../components/About'
import ServicesTeaser from '../components/ServicesTeaser'
import Accommodations from '../components/Accommodations'
import Offers from '../components/Offers'
import ExclusiveOffer from '../components/ExclusiveOffer'
import Reviews from '../components/Reviews'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Accommodations />
      <ServicesTeaser />
      <Offers />
      <ExclusiveOffer />
      <Reviews />
    </>
  )
}
