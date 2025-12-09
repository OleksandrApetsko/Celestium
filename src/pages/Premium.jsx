import PremiumHero from "../components/Premium/PremiumHero.jsx";
import PremiumBenefits from "../components/Premium/PremiumBenefits.jsx";
import PremiumPricing from "../components/Premium/PremiumPricing.jsx";
import PremiumFAQ from "../components/Premium/PremiumFAQ.jsx";
import PremiumCTA from "../components/Premium/PremiumCTA.jsx";

export default function Premium() {
  return (
    <section className="relative z-10 pt-16 pb-32 px-6">
      <PremiumHero />
      <PremiumBenefits />
      <PremiumPricing />
      <PremiumFAQ />
      <PremiumCTA />
    </section>
  );
}
