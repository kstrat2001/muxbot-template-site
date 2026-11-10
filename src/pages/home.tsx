import Hero from '../components/Hero.tsx'
import About from '../components/About.tsx'
import Services from '../components/Services.tsx'
import Quote from '../components/Quote.tsx'
import Contact from '../components/Contact.tsx'

// The home page: its sections, top to bottom.
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Quote />
      <Contact />
    </>
  )
}
