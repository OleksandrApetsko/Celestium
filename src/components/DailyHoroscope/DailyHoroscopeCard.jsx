import { zodiacIcons } from "./zodiacIcons.jsx";

export default function DailyHoroscopeCard({ sign, dates, element }) {
  return (
    <div
      className="
        group rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl
        p-6 transition-all duration-300
        hover:border-yellow-400/60
        hover:shadow-[0_0_25px_rgba(250,204,21,0.35)]
        hover:-translate-y-1
      "
    >
      <div className="flex justify-center mb-4">
        {zodiacIcons[sign]}
      </div>

      <h3 className="text-lg font-medium text-white text-center capitalize">
        {sign}
      </h3>

      <p className="text-white/50 text-xs text-center mt-1">
        {dates}
      </p>

      <p className="mt-4 text-sm text-white/70 text-center leading-relaxed">
        Today carries a strong <span className="text-yellow-300">{element}</span> influence.
        Stay aware of emotional signals and subtle shifts.
      </p>

      <div className="mt-5 text-center text-xs text-yellow-300 uppercase tracking-wider">
        View Today’s Insight →
      </div>
    </div>
  );
}
