import { premiumPlans } from "../../data/premiumPlans.js";
import PricingCard from "./PricingCard.jsx";

export default function PremiumPricing() {
  return (
    <div className="max-w-6xl mx-auto mt-28 text-center px-4">

      <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow mb-5">
        Choose Your Way to Premium Astrology
      </h2>

      <p className="text-white/70 max-w-xl mx-auto mb-16 text-lg">
        Unlock long-range predictions, emotional timing guidance,
        compatibility insights and refined star interpretation by real experts.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        {premiumPlans.map(plan => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}
