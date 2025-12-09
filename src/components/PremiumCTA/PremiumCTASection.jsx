import BenefitItem from "./BenefitItem.jsx";
import { benefitsList } from "./benefitsList.js";

export default function PremiumCTASection() {
  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* BOX */}
        <div
          className="
            bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl
            p-10 md:p-16 text-center shadow-[0_0_40px_rgba(250,204,21,0.2)]
          "
        >
          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
            Unlock the Full Power of Astrology
          </h2>

          {/* SUBTEXT */}
          <p className="text-white/70 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Gain access to personalized predictions, deeper cosmic insights,
            and exclusive tools designed to elevate your self-understanding.
          </p>

          {/* BENEFITS LIST */}
          <div className="mt-10 space-y-6 max-w-xl mx-auto">
            {benefitsList.map((b, i) => (
              <BenefitItem key={i} title={b.title} description={b.description} />
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="mt-12">
            <button
              className="
                px-10 py-4 rounded-full text-black text-lg font-semibold
                bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400
                shadow-[0_0_18px_rgba(250,204,21,0.5)]
                hover:shadow-[0_0_28px_rgba(250,204,21,0.8)]
                transition-all
              "
            >
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
