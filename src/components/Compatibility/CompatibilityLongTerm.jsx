// src/components/Compatibility/CompatibilityLongTerm.jsx

import compatibilityLongTerm from "../../data/compatibility/compatibilityLongTerm.js";
import Container from "../UI/Container.jsx";

export default function CompatibilityLongTerm({ signA, signB }) {
  if (!signA || !signB) return null;

  const key = `${String(signA).toLowerCase()}-${String(signB).toLowerCase()}`;
  const items = compatibilityLongTerm[key];

  if (!items?.length) return null;

  return (
    <Container>
      <section>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
            Time Perspective
          </p>
          <h3 className="text-3xl sm:text-4xl text-yellow-300">
            Long-Term Potential
          </h3>
        </div>

        <div className="relative rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-10 sm:p-14">
          <ul className="space-y-5 text-white/80 text-sm sm:text-base leading-relaxed text-center">
            {items.map((item, i) => (
              <li key={i} className="flex gap-3 justify-center">
                <span className="mt-2 w-2 h-2 rounded-full bg-yellow-300/80 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
}
