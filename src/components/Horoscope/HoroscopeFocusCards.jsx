// src/components/Horoscope/HoroscopeFocusCards.jsx

function ListCard({ kicker, title, items }) {
  return (
    <div className="rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 p-8">
      <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-2">
        {kicker}
      </p>

      <h3 className="text-xl font-medium text-yellow-300 mb-6">
        {title}
      </h3>

      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-white/70 text-base leading-relaxed">
            <span className="mt-1 w-2 h-2 rounded-full shrink-0 bg-yellow-300/70" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HoroscopeFocusCards({ focus }) {
  const doItems = focus?.do || [];
  const avoidItems = focus?.avoid || [];

  if (!doItems.length && !avoidItems.length) return null;

  return (
    <div className="w-full mb-20">
      <div className="grid md:grid-cols-2 gap-8">
        <ListCard
          kicker="This month, focus on"
          title="Focus"
          items={doItems}
        />
        <ListCard
          kicker="Try to avoid"
          title="Avoid"
          items={avoidItems}
        />
      </div>
    </div>
  );
}
