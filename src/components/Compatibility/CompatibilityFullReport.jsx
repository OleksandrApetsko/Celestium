// src/components/Compatibility/CompatibilityFullReport.jsx

import { useState } from "react";
import ScoreRing from "./ScoreRing.jsx";
import ElementBalance from "./ElementBalance.jsx";
import TraitsMatrix from "./TraitsMatrix.jsx";
import AdviceBlock from "./AdviceBlock.jsx";

export default function CompatibilityFullReport({ signA, signB, result }) {
  const [unlocked, setUnlocked] = useState(false);

  if (!result) return null;

  const baseTraits = result.traits || { positive: [], negative: [] };

  const lockedTraits = {
    positive: baseTraits.positive.slice(0, 2),
    negative: baseTraits.negative.slice(0, 1),
  };

  const traitsToRender = unlocked ? baseTraits : lockedTraits;

  const adviceText = result.advice || "";
  const lockedAdvice = adviceText
    ? adviceText.split(". ").slice(0, 2).join(". ") + (adviceText ? "..." : "")
    : "";

  const adviceToRender = unlocked ? adviceText : lockedAdvice;

  return (
    <div
      className="
        max-w-5xl mx-auto bg-white/5 border border-yellow-400/20
        backdrop-blur-xl rounded-3xl p-10 md:p-16
        shadow-[0_0_45px_rgba(255,215,0,0.15)]
      "
    >
      <h2 className="text-center text-3xl md:text-5xl text-yellow-300 tracking-[0.25em] mb-10 md:mb-14 drop-shadow-[0_0_25px_rgba(255,215,0,0.4)]">
        {signA} ✦ {signB}
      </h2>

      {/* SCORE */}
      <div className="flex justify-center mb-16">
        <ScoreRing value={result.score} />
      </div>

      {/* ELEMENT BALANCE */}
      <div className="mt-12 md:mt-20">
        <h3 className="text-yellow-300 text-lg mb-4">Elemental Exchange</h3>
        <p className="text-white/70 text-sm mb-6 max-w-3xl">
          This balance reflects how Fire, Earth, Air and Water interact within
          this connection — shaping attraction, stability and emotional
          expression.
        </p>
        <ElementBalance elements={result.elements} />
      </div>

      {/* TRAITS */}
      <div className="mt-16 md:mt-20">
        <TraitsMatrix traits={traitsToRender} />
      </div>

      {/* ADVICE */}
      <div className="mt-16 md:mt-20">
        <AdviceBlock advice={adviceToRender} />
      </div>

      {/* PREMIUM CTA */}
      {!unlocked && (
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="bg-black/40 border border-yellow-400/30 rounded-2xl p-6 text-center">
            <p className="text-white/80 text-sm md:text-base mb-4">
              To access the complete compatibility breakdown — including all
              growth patterns, challenge dynamics and tailored alignment
              guidance — you can unlock the extended Celestium report.
            </p>
            <button
              type="button"
              onClick={() => setUnlocked(true)}
              className="
                px-8 py-3 rounded-full text-sm md:text-base font-semibold
                bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400
                text-black
                shadow-[0_0_18px_rgba(250,204,21,0.5)]
                hover:shadow-[0_0_28px_rgba(250,204,21,0.8)]
                transition-all
              "
            >
              Unlock full insight (demo)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
