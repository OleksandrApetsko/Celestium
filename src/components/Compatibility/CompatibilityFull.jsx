import CompatibilityElements from "./CompatibilityElements.jsx";
import CompatibilityDynamics from "./CompatibilityDynamics.jsx";
import CompatibilityStyles from "./CompatibilityStyles.jsx";
import CompatibilityLongTerm from "./CompatibilityLongTerm.jsx";
import CompatibilityAdvice from "./CompatibilityAdvice.jsx";
import CompatibilityChemistry from "./CompatibilityChemistry.jsx";
import CompatibilityConflicts from "./CompatibilityConflicts.jsx";
import CompatibilityPower from "./CompatibilityPower.jsx";

import computeElements from "../../data/compatibility/elements/computeElements.js";

export default function CompatibilityFull({ signA, signB }) {
  if (!signA || !signB) return null;

  const elements = computeElements(signA, signB);
  if (!elements) return null;

  return (
    <section className="relative z-10 mt-32 pb-32 space-y-32">
      <CompatibilityElements
        elements={elements}
        signA={signA}
        signB={signB}
      />

      <CompatibilityDynamics signA={signA} signB={signB} />

      <CompatibilityStyles signA={signA} signB={signB} />

      <CompatibilityChemistry signA={signA} signB={signB} />

      <CompatibilityConflicts signA={signA} signB={signB} />

      <CompatibilityPower signA={signA} signB={signB} />

      <CompatibilityLongTerm signA={signA} signB={signB} />

      <CompatibilityAdvice signA={signA} signB={signB} />
    </section>
  );
}
