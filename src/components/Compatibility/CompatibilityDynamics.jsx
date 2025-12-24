// src/components/Compatibility/CompatibilityDynamics.jsx

import compatibilityDynamics from "../../data/compatibility/compatibilityDynamics.js";

export default function CompatibilityDynamics({ signA, signB }) {
  if (!signA || !signB) return null;

  const key = `${String(signA).toLowerCase()}-${String(signB).toLowerCase()}`;
  const traits = compatibilityDynamics[key];

  if (
    !traits ||
    !Array.isArray(traits.positive) ||
    !Array.isArray(traits.negative)
  ) {
    return null;
  }

  return (
    <section>
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
          Interaction Pattern
        </p>
        <h3 className="text-3xl sm:text-4xl text-yellow-300">
          Relationship Dynamics
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Strengths */}
        <div className="rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-8 sm:p-10">
          <h4 className="text-xl text-yellow-300 mb-6">
            Strengths
          </h4>

          <ul className="space-y-4 text-white/80 text-sm sm:text-base leading-relaxed">
            {traits.positive.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-yellow-300/80 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tensions */}
        <div className="rounded-3xl bg-black/30 backdrop-blur-xl border border-white/10 p-8 sm:p-10">
          <h4 className="text-xl text-yellow-300 mb-6">
            Tensions
          </h4>

          <ul className="space-y-4 text-white/75 text-sm sm:text-base leading-relaxed">
            {traits.negative.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-white/40 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
