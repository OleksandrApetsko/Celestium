export default function ContextGrid({ mood, focusLevel, riskLevel }) {
  const items = [
    ["Mood", mood],
    ["Focus", focusLevel],
    ["Risk", riskLevel]
  ];

  return (
    <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="
            rounded-xl bg-black/30 backdrop-blur-xl
            border border-white/10
            py-5 text-center
          "
        >
          <p className="text-xs uppercase tracking-widest text-white/40">
            {label}
          </p>
          <p className="mt-2 text-lg font-medium text-yellow-300">
            {value}
          </p>
        </div>
      ))}
    </div>
  );
}
