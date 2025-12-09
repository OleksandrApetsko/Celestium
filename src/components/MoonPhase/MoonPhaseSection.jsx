import MoonPhaseCard from "./MoonPhaseCard.jsx";
import { moonPhaseData } from "./moonPhaseData.js";

export default function MoonPhaseSection() {
  const { phase, illumination, energy } = moonPhaseData;

  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
            Moon Phase
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mt-2">
            Today’s Lunar Energy
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Understand how the Moon influences emotions, clarity, intuition, and manifestation.
          </p>
        </div>

        {/* CARD */}
        <MoonPhaseCard
          phase={phase}
          illumination={illumination}
          energy={energy}
        />
      </div>
    </section>
  );
}
