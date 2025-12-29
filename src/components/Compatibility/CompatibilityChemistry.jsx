// src/components/Compatibility/CompatibilityChemistry.jsx

import compatibilityChemistry from "../../data/compatibility/compatibilityChemistry.js";
import Container from "../UI/Container.jsx";

export default function CompatibilityChemistry({ signA, signB }) {
  if (!signA || !signB) return null;

  const key = `${String(signA).toLowerCase()}-${String(signB).toLowerCase()}`;
  const data = compatibilityChemistry[key];

  if (!data) return null;

  const { description, intensity } = data;

  return (
    <Container>
      <section>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
            Attraction Layer
          </p>
          <h3 className="text-3xl sm:text-4xl text-yellow-300">
            Chemistry & Attraction
          </h3>
        </div>

        <div className="max-w-7xl mx-auto rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-10 sm:p-14">
          <p className="text-white/85 text-lg sm:text-xl leading-relaxed text-center mb-10">
            {description}
          </p>

          <div className="flex justify-center">
            <span className="text-sm uppercase tracking-widest text-white/50">
              Attraction Intensity:{" "}
              <span className="text-yellow-300 font-medium">
                {intensity}
              </span>
            </span>
          </div>
        </div>
      </section>
    </Container>
  );
}
