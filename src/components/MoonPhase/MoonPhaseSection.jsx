import { getMoonPhaseInfo } from "../../utils/moonPhaseEngine.js";
import MoonPhaseCard from "./MoonPhaseCard.jsx";
import { Link } from "react-router-dom";

export default function MoonPhaseSection() {
  const { phase, illumination, summary, keywords } = getMoonPhaseInfo();

  return (
    <section className="py-22">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* HEADER */}
        <h2 className="text-[36px] md:text-[48px] tracking-[0.22em] font-light text-yellow-300 drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
          TODAY’S LUNAR ENERGY
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mt-4 leading-relaxed">
          Real-time Moon energy feed • updated daily.
          Emotional rhythm, clarity, manifestation momentum.
        </p>

        {/* CARD */}
        <div className="mt-14 flex justify-center">
          <MoonPhaseCard
            phase={phase}
            illumination={illumination}
            summary={summary}
            keywords={keywords}
          />
        </div>

        {/* CTA */}
        <Link
          to="/birth-chart"
          className="
            inline-block mt-10 px-10 py-3 rounded-full text-black font-semibold tracking-wide
            bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-300
            hover:scale-[1.06] hover:shadow-[0_0_40px_rgba(255,215,0,0.7)]
            transition-all duration-300
          "
        >
          Unlock Full Lunar Forecast →
        </Link>

      </div>
    </section>
  );
}
