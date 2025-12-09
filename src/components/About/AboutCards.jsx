export default function AboutCards() {
  const items = [
    {
      title: "Mission",
      text:
        "To make astrology practical, empowering and emotionally relevant. Celestium helps people navigate decisions with clarity instead of uncertainty."
    },
    {
      title: "Vision",
      text:
        "Cosmic awareness as a daily tool. A space where intuition meets structure — where astrology feels intelligent, elegant, and genuinely helpful."
    },
    {
      title: "Focus",
      text:
        "Precision, accessibility, design. Clean UI, smooth interaction, refined interpretation — crafted for those who expect more than horoscopes."
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-28">
      {items.map((item, i) => (
        <div
          key={i}
          className="
            bg-white/5 backdrop-blur-xl border border-yellow-400/10 rounded-2xl p-10
            transition hover:border-yellow-300/50 hover:shadow-[0_0_35px_rgba(250,204,21,0.35)]
          "
        >
          <h3 className="text-xl font-medium text-yellow-300 mb-3">{item.title}</h3>
          <p className="text-white/70 leading-relaxed text-[15px]">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
