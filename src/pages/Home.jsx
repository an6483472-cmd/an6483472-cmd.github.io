import Achievements from '../components/sections/Achievements'
import Cases from '../components/sections/Cases'
import ContactEntry from '../components/sections/ContactEntry'
import Hero from '../components/sections/Hero'
import Honors from '../components/sections/Honors'
import Methodology from '../components/sections/Methodology'

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 pb-16 md:space-y-10 md:px-margin-page">
      <Hero />
      <Achievements />
      <Cases />
      <Methodology />
      <Honors />
      <ContactEntry />
    </div>
  )
}
