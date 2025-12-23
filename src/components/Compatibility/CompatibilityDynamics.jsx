// CompatibilityDynamics.jsx
import TraitsMatrix from "./TraitsMatrix.jsx";

export default function CompatibilityDynamics({ traits }) {
  if (!traits) return null;

  return (
    <div className="text-center">
      <h3 className="text-2xl text-yellow-300 mb-10">
        Relationship Dynamics
      </h3>
      <TraitsMatrix traits={traits} />
    </div>
  );
}
