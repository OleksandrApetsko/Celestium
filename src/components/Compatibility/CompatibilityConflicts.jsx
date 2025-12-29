// src/components/Compatibility/CompatibilityConflicts.jsx

import compatibilityConflicts from "../../data/compatibility/compatibilityConflicts.js";
import Container from "../UI/Container.jsx";

export default function CompatibilityConflicts({ signA, signB }) {
  if (!signA || !signB) return null;

  const key = `${String(signA).toLowerCase()}-${String(signB).toLowerCase()}`;
  const conflicts = compatibilityConflicts[key];

  if (!conflicts?.length) return null;

  return (
    <Container>
      <section>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
            Pressure Points
          </p>
          <h3 className="text-3xl sm:text-4xl text-yellow-300">
            Conflict Triggers
          </h3>
        </div>

        <div className="rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-8 sm:p-12">
          <ul className="space-y-5 text-white/80 text-sm sm:text-base leading-relaxed text-center">
            {conflicts.map((item, i) => (
              <li key={i} className="flex gap-3 justify-center">
                <span className="mt-2 w-2 h-2 rounded-full bg-red-400/80 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
}
