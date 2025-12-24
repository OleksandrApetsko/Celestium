// src/components/Compatibility/CompatibilityAdvice.jsx

import compatibilityAdvice from "../../data/compatibility/compatibilityAdvice.js";

export default function CompatibilityAdvice({ signA, signB }) {
  if (!signA || !signB) return null;

  const key = `${String(signA).toLowerCase()}-${String(signB).toLowerCase()}`;
  const advice = compatibilityAdvice[key];

  if (!advice) return null;

  return (
    <section>
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
          Final Insight
        </p>
        <h3 className="text-3xl sm:text-4xl text-yellow-300">
          Celestial Guidance
        </h3>
      </div>

      {/* Advice Block */}
      <div className="w-full">
        <div className="relative rounded-3xl bg-black/40 backdrop-blur-xl border border-yellow-300/20 p-10 sm:p-14 shadow-[0_0_60px_rgba(250,204,21,0.12)]">

          {/* subtle glow layer */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-300/10 via-transparent to-transparent pointer-events-none" />

          <p className="relative text-white/85 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto text-center">
            {advice}
          </p>
        </div>
      </div>
    </section>
  );
}
