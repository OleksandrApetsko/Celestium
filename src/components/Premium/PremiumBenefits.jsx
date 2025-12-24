import Container from "../Ui/Container.jsx";
import { premiumBenefits } from "../../data/premium/premiumBenefits.js";
import PremiumIcon from "./PremiumIcon.jsx";

export default function PremiumBenefits() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose Premium
          </h2>

          <p className="text-white/70 text-lg">
            Premium is designed for deeper context, broader timeframes,
            and a more complete astrological perspective.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {premiumBenefits.map((item) => (
            <div
              key={item.id}
              className="
                p-8 rounded-2xl bg-black/40 backdrop-blur-xl
                border border-white/10 text-center
                hover:border-yellow-300/40
                hover:shadow-[0_0_25px_rgba(255,220,150,0.28)]
                transition-all
              "
            >
              <div className="flex justify-center mb-5">
                <PremiumIcon type={item.icon} />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
