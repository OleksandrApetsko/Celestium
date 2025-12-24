import CompatibilityElements from "./CompatibilityElements.jsx";
import CompatibilityDynamics from "./CompatibilityDynamics.jsx";
import CompatibilityStyles from "./CompatibilityStyles.jsx";
import CompatibilityLongTerm from "./CompatibilityLongTerm.jsx";
import CompatibilityAdvice from "./CompatibilityAdvice.jsx";
import CompatibilityChemistry from "./CompatibilityChemistry.jsx";
import CompatibilityConflicts from "./CompatibilityConflicts.jsx";
import CompatibilityPower from "./CompatibilityPower.jsx";
// 🔒 локальна, проста логіка елементів (SSOT для цієї сторінки)
const ELEMENT = {
  aries: "Fire", leo: "Fire", sagittarius: "Fire",
  taurus: "Earth", virgo: "Earth", capricorn: "Earth",
  gemini: "Air", libra: "Air", aquarius: "Air",
  cancer: "Water", scorpio: "Water", pisces: "Water"
};

function computeElements(a, b) {
  const base = { Fire: 4, Earth: 4, Air: 4, Water: 4 };
  const elA = ELEMENT[a];
  const elB = ELEMENT[b];

  if (!elA || !elB) return null;

  base[elA] += 3;
  base[elB] += 3;

  if (elA === elB) {
    base[elA] += 2;
  }

  Object.keys(base).forEach((k) => {
    if (base[k] < 1) base[k] = 1;
    if (base[k] > 10) base[k] = 10;
  });

  return base;
}

export default function CompatibilityFull({ signA, signB }) {
  if (!signA || !signB) return null;

  const elements = computeElements(signA, signB);
  if (!elements) return null;

  return (
    <section className="relative z-10 mt-32 pb-32">
      <div className="max-w-6xl mx-auto px-6 space-y-32">

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

      </div>
    </section>
  );
}
