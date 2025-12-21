// src/components/Horoscope/HoroscopeContext.jsx

export default function HoroscopeContext({ items = [] }) {
  if (!items?.length) return null;

  return (
    <div className="w-full mb-20 grid md:grid-cols-3 gap-8">
      {items.map(([label, value]) => (
        <div
          key={label}
          className="rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 py-8 text-center"
        >
          <p className="text-xs uppercase tracking-widest text-white/40">{label}</p>
          <p className="mt-3 text-xl font-medium text-yellow-300">{value}</p>
        </div>
      ))}
    </div>
  );
}
