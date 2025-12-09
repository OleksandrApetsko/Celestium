// src/components/Compatibility/CompatibilitySection.jsx

import { useState } from "react";
import CompatibilityForm from "./CompatibilityForm.jsx";
import CompatibilityPreview from "./CompatibilityPreview.jsx";
import compatibilityMap from "../../data/compatibilityMap.js";

export default function CompatibilitySection() {
  const [signA, setSignA] = useState("");
  const [signB, setSignB] = useState("");
  const [preview, setPreview] = useState(null);

  const handleCalculate = (s1, s2) => {
    setSignA(s1);
    setSignB(s2);

    const base =
      compatibilityMap?.[s1]?.[s2] ?? compatibilityMap?.[s2]?.[s1] ?? null;

    if (!base) {
      setPreview(null);
      return;
    }

    setPreview({
      score: base.score,
      shortPositive: base.traits?.positive?.[0] ?? null,
      shortNegative: base.traits?.negative?.[0] ?? null,
    });
  };

  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
            Compatibility Checker
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mt-2">
            How Well Do Your Signs Match?
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Discover your cosmic chemistry and understand the energetic dynamics
            between your zodiac signs.
          </p>
        </div>

        {/* FORM */}
        <CompatibilityForm onCalculate={handleCalculate} />

        {/* SHORT PREVIEW RESULT + CTA */}
        {preview && (
          <CompatibilityPreview signA={signA} signB={signB} preview={preview} />
        )}
      </div>
    </section>
  );
}
