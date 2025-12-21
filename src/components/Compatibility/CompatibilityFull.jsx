// src/components/Compatibility/CompatibilityFull.jsx

import ScoreRing from "./ScoreRing.jsx";
import ElementBalance from "./ElementBalance.jsx";
import TraitsMatrix from "./TraitsMatrix.jsx";
import AdviceBlock from "./AdviceBlock.jsx";

export default function CompatibilityFull({ signA, signB, data }) {
  if (!data) return null;

  const { score, elements, traits, advice } = data;

  return (
    <section className="relative z-10 mt-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-4">
            Full Compatibility Report
          </p>

          <h2 className="text-4xl sm:text-5xl font-light tracking-[0.22em] text-white">
            {signA} ✦ {signB}
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-white/65 text-sm sm:text-base leading-relaxed">
            This extended compatibility analysis explores emotional dynamics,
            elemental balance, strengths, tension points and long-term
            relationship potential between these two zodiac signs.
          </p>
        </div>

        {/* SCORE */}
        <div className="flex justify-center mb-28">
          <ScoreRing value={score} />
        </div>

        {/* ELEMENTS */}
        <div className="mb-28">
          <h3 className="text-center text-2xl tracking-wide text-yellow-300 mb-10">
            Elemental Balance
          </h3>

          <div className="max-w-3xl mx-auto">
            <ElementBalance elements={elements} />
          </div>
        </div>

        {/* TRAITS */}
        <div className="mb-28">
          <h3 className="text-center text-2xl tracking-wide text-yellow-300 mb-10">
            Relationship Dynamics
          </h3>

          <div className="max-w-4xl mx-auto">
            <TraitsMatrix traits={traits} />
          </div>
        </div>

        {/* ADVICE */}
        <div className="mb-32">
          <h3 className="text-center text-2xl tracking-wide text-yellow-300 mb-10">
            Celestial Guidance
          </h3>

          <div className="max-w-3xl mx-auto">
            <AdviceBlock advice={advice} />
          </div>
        </div>

      </div>
    </section>
  );
}
