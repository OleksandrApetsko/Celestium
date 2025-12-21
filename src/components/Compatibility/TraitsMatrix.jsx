// src/components/Compatibility/TraitsMatrix.jsx

export default function TraitsMatrix({ traits }) {
  if (
    !traits ||
    !Array.isArray(traits.positive) ||
    !Array.isArray(traits.negative)
  ) {
    return null; // ⬅️ КРИТИЧНО
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* POSITIVE */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <h3 className="text-yellow-300 text-xl mb-4">
          Strengths
        </h3>

        <ul className="space-y-2 text-white/80 text-sm leading-relaxed">
          {traits.positive.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>

      {/* NEGATIVE */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
        <h3 className="text-yellow-300 text-xl mb-4">
          Tensions
        </h3>

        <ul className="space-y-2 text-white/80 text-sm leading-relaxed">
          {traits.negative.map((item, i) => (
            <li key={i}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
