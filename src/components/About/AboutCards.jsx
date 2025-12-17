import { aboutCardsData } from "../../data/aboutCardsData";

export default function AboutCards() {
  return (
    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-28">
      {aboutCardsData.map((item) => (
        <div
          key={item.title}
          className="
            bg-white/5 backdrop-blur-xl border border-yellow-400/10 rounded-2xl p-10
            transition hover:border-yellow-300/50
            hover:shadow-[0_0_35px_rgba(250,204,21,0.35)]
          "
        >
          <h3 className="text-xl font-medium text-yellow-300 mb-3">
            {item.title}
          </h3>
          <p className="text-white/70 leading-relaxed text-[15px]">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
