// CompatibilityAdvice.jsx
import AdviceBlock from "./AdviceBlock.jsx";

export default function CompatibilityAdvice({ advice }) {
  if (!advice) return null;

  return (
    <div className="text-center">
      <h3 className="text-2xl text-yellow-300 mb-10">
        Celestial Guidance
      </h3>
      <div className="max-w-3xl mx-auto">
        <AdviceBlock advice={advice} />
      </div>
    </div>
  );
}
