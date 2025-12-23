// CompatibilityStyles.jsx
export default function CompatibilityStyles({ emotional = [], communication = [] }) {
  if (!emotional.length && !communication.length) return null;

  return (
    <div className="grid md:grid-cols-2 gap-12">
      <Block title="Emotional Style" items={emotional} />
      <Block title="Communication Style" items={communication} />
    </div>
  );
}

function Block({ title, items }) {
  if (!items?.length) return null;

  return (
    <div className="bg-black/40 border border-white/10 rounded-2xl p-10">
      <h4 className="text-yellow-300 text-lg mb-4">{title}</h4>
      <ul className="space-y-3 text-white/75">
        {items.map((t, i) => <li key={i}>• {t}</li>)}
      </ul>
    </div>
  );
}
