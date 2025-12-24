import Container from "../Ui/Container.jsx";
import { premiumPlans } from "../../data/premium/premiumPlans.js";
import PricingCard from "./PricingCard.jsx";
import PremiumIncludes from "./PremiumIncludes.jsx";

export default function PremiumPricing() {
  return (
    <section className="py-20">
      <Container>

        <PremiumIncludes />

        <div className="grid md:grid-cols-3 gap-10">
          {premiumPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <p className="text-center text-xs text-white/50 mt-12">
          All plans include the same premium content.
          Choose the access period that suits you best.
        </p>
      </Container>
    </section>
  );
}
