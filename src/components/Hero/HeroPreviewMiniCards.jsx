export default function HeroPreviewMiniCards() {
  const cards = [
    { title: "Love", text: "Emotional harmony, attraction, and deep connections." },
    { title: "Career", text: "Momentum, decisions, and doors opening on your path." },
    { title: "Energy", text: "How to align with today's cosmic frequency." },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((c) => (
        <div
          key={c.title}
          className="
            rounded-xl border border-white/10 bg-black/35 backdrop-blur
            p-3 sm:p-4
          "
        >
          <p className="text-xs text-yellow-300 mb-1">{c.title}</p>
          <p className="text-xs text-white/75">{c.text}</p>
        </div>
      ))}
    </div>
  );
}
