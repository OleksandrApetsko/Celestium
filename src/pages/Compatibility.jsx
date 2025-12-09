// src/pages/Compatibility.jsx

import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import CompatibilityForm from "../components/Compatibility/CompatibilityForm.jsx";
import CompatibilityFullReport from "../components/Compatibility/CompatibilityFullReport.jsx";
import compatibilityMap from "../data/compatibilityMap.js";

export default function Compatibility() {
  const location = useLocation();

  const query = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const initialSignA = query.get("signA") || "";
  const initialSignB = query.get("signB") || "";

  const [signA, setSignA] = useState(initialSignA);
  const [signB, setSignB] = useState(initialSignB);
  const [result, setResult] = useState(null);

  const computeResult = (a, b) => {
    if (!a || !b) {
      setResult(null);
      return;
    }

    const base =
      compatibilityMap?.[a]?.[b] ?? compatibilityMap?.[b]?.[a] ?? null;

    setResult(base);
  };

  useEffect(() => {
    if (initialSignA && initialSignB) {
      computeResult(initialSignA, initialSignB);
    }
  }, [initialSignA, initialSignB]);

  const handleCalculate = (a, b) => {
    setSignA(a);
    setSignB(b);
    computeResult(a, b);
  };

  return (
    <section className="min-h-screen w-full text-white pt-40 pb-32">
      {/* TOP SECTION / HERO */}
      <div className="max-w-5xl mx-auto text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.22em] text-yellow-400 drop-shadow-glow">
          COMPATIBILITY MATCH
        </h1>

        <p className="mt-6 text-gray-300 opacity-80 leading-relaxed text-lg max-w-3xl mx-auto">
          Two signs carry unique emotional frequencies, ruling elements and
          planetary rhythms. When brought together, they form a dynamic
          exchange — harmonious, challenging or electric.
        </p>

        <p className="mt-4 text-gray-400 text-[15px] max-w-3xl mx-auto">
          Evaluate how Fire meets Earth, how Water softens Air, or how Cardinal
          energy responds to Fixed power. This data-enhanced interpretation
          explores attraction, stability, passion, communication and long-term
          potential between zodiac pairs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12 text-[15px]">
          <div className="bg-white/5 p-6 rounded-xl border border-yellow-400/20">
            <h3 className="text-yellow-300 text-sm mb-2 tracking-wider">
              ELEMENTAL BALANCE
            </h3>
            <p className="text-gray-300">
              Fire, Earth, Air and Water interaction scored and interpreted.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-yellow-400/20">
            <h3 className="text-yellow-300 text-sm mb-2 tracking-wider">
              RELATION DYNAMICS
            </h3>
            <p className="text-gray-300">
              Strengths, tension points and growth potential overview.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl border border-yellow-400/20">
            <h3 className="text-yellow-300 text-sm mb-2 tracking-wider">
              CELESTIAL INSIGHT
            </h3>
            <p className="text-gray-300">
              Final interpretation with guidance for harmony and alignment.
            </p>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="mt-24">
        <CompatibilityForm
          onCalculate={handleCalculate}
          initialSign1={initialSignA}
          initialSign2={initialSignB}
        />
      </div>

      {/* FULL REPORT */}
      {result && (
        <div className="mt-32 animate-[fadeUp_1.3s_ease]">
          <CompatibilityFullReport signA={signA} signB={signB} result={result} />
        </div>
      )}
    </section>
  );
}
