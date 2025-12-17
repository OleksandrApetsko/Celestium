import ScoreRing from "./ScoreRing.jsx";
import ElementBalance from "./ElementBalance.jsx";
import TraitsMatrix from "./TraitsMatrix.jsx";
import AdviceBlock from "./AdviceBlock.jsx";
import PremiumGate from "../Premium/PremiumGate.jsx";

export default function CompatibilityFullReport({ signA, signB, result }) {
  if (!result) return null;

  return (
    <div className="max-w-5xl mx-auto">

      {/* FREE PART */}
      <div className="bg-black/40 border border-white/10 rounded-3xl p-10 md:p-14 backdrop-blur-xl">
        <h2 className="text-center text-4xl md:text-5xl text-yellow-300 tracking-[0.25em] mb-14">
          {signA} ✦ {signB}
        </h2>

        <div className="flex justify-center mb-20">
          <ScoreRing value={result.score} />
        </div>

        <ElementBalance elements={result.elements} />
      </div>

      {/* 🔒 PREMIUM PART */}
      <div className="mt-24">
        <PremiumGate
          title="Full Compatibility Breakdown"
          description="Unlock emotional dynamics, strengths & challenges, communication patterns and long-term relationship potential."
          cta="Unlock Full Compatibility Report"
        />
      </div>
    </div>
  );
}
