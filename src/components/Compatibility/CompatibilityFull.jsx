// src/components/Compatibility/CompatibilityFull.jsx

import CompatibilityElements from "./CompatibilityElements.jsx";
import CompatibilityDynamics from "./CompatibilityDynamics.jsx";
import CompatibilityStyles from "./CompatibilityStyles.jsx";
import CompatibilityLongTerm from "./CompatibilityLongTerm.jsx";
import CompatibilityAdvice from "./CompatibilityAdvice.jsx";

export default function CompatibilityFull({ signA, signB, data }) {
  if (!data) return null;

  return (
    <section className="relative z-10 mt-32 pb-32">
      <div className="max-w-6xl mx-auto px-6 space-y-32">

        {/* 1️⃣ ELEMENTAL BALANCE (SSOT-driven, NOT from data) */}
        <CompatibilityElements
          elements={data.elements}
          signA={signA}
          signB={signB}
        />


        {/* 2️⃣ RELATIONSHIP DYNAMICS */}
        <CompatibilityDynamics traits={data.traits} />

        {/* 3️⃣ COMMUNICATION & EMOTIONAL STYLES */}
        <CompatibilityStyles
          emotional={data.emotionalStyle}
          communication={data.communicationStyle}
        />

        {/* 4️⃣ LONG-TERM POTENTIAL */}
        <CompatibilityLongTerm items={data.longTerm} />

        {/* 5️⃣ FINAL ADVICE */}
        <CompatibilityAdvice advice={data.advice} />

      </div>
    </section>
  );
}
