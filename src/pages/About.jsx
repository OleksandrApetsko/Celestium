import HoroscopeNext from '../components/Horoscope/HoroscopeNext.jsx'
import AboutHeader from '../components/About/AboutHeader.jsx'
import AboutCards from '../components/About/AboutCards.jsx'
import AboutStory from '../components/About/AboutStory.jsx'
import FAQ from '../components/About/FAQ.jsx'

export default function About() {
  return (
    <section className="relative z-10 pt-32 pb-16 px-6">

      <AboutHeader />

      <AboutCards />

      <AboutStory />

      <FAQ />

      <HoroscopeNext period="premium" />

    </section>
  );
}
