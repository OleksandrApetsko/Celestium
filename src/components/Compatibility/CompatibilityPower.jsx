// src/components/Compatibility/CompatibilityPower.jsx

import compatibilityPower from "../../data/compatibility/compatibilityPower.js";

export default function CompatibilityPower({ signA, signB }) {
  if (!signA || !signB) return null;

  const key = `${String(signA).toLowerCase()}-${String(signB).toLowerCase()}`;
  const data = compatibilityPower[key];

  if (!data?.dynamics?.length) return null;

  const { dynamics } = data;

  return (
    <section>
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
          Balance of Influence
        </p>
        <h3 className="text-3xl sm:text-4xl text-yellow-300">
          Power & Influence
        </h3>
      </div>

      <div className="w-full">
        <div className="rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-10 sm:p-14">
          <ul className="space-y-5 text-white/80 text-sm sm:text-base leading-relaxed max-w-5xl mx-auto">
            {dynamics.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-yellow-300/80 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
