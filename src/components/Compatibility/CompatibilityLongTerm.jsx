// CompatibilityLongTerm.jsx
export default function CompatibilityLongTerm({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="text-center">
      <h3 className="text-2xl text-yellow-300 mb-10">
        Long-Term Potential
      </h3>

      <div className="max-w-4xl mx-auto bg-black/40 border border-white/10 rounded-3xl p-12">
        <ul className="space-y-4 text-white/75">
          {items.map((t, i) => <li key={i}>• {t}</li>)}
        </ul>
      </div>
    </div>
  );
}
