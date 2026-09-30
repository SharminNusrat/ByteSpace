import Hero from '../sections/Hero'
import PartnerLogos from '../sections/PartnerLogos'
import Catalog from '../sections/Catalog'
import GrowthAndCreators from '../sections/GrowthAndCreators'
import CallToAction from '../sections/CallToAction'
import Testimonials from '../sections/Testimonials'
import Footer from '../components/Footer'

// Sections run top to bottom in design order.
export default function Home() {
  return (
    <>
      <Hero />
      <PartnerLogos />
      <Catalog />
      <GrowthAndCreators />
      <CallToAction />
      <Testimonials />
      <Footer />
    </>
  )
}
