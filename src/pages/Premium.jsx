import PremiumHero from "../components/Premium/PremiumHero.jsx";
import PremiumBenefits from "../components/Premium/PremiumBenefits.jsx";
import PremiumPricing from "../components/Premium/PremiumPricing.jsx";
import HoroscopeNext from "../components/Horoscope/HoroscopeNext.jsx";

export default function Premium() {
  return (
    <section className="relative z-10 pt-16">
      <PremiumHero />
      <PremiumBenefits />
      <PremiumPricing />
      <HoroscopeNext period="premium" />
    </section>
  );
}
