// CompatibilityScore.jsx
import ScoreRing from "./ScoreRing.jsx";

export default function CompatibilityScore({ score }) {
  return (
    <div className="text-center">
      <ScoreRing value={Number(score) || 0} />
      <p className="mt-6 max-w-xl mx-auto text-white/70">
        Overall energetic alignment between these two signs.
      </p>
    </div>
  );
}
