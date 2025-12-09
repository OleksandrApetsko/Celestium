import { zodiacIcons } from "./zodiacIcons.jsx";

export default function HoroscopeCard({ sign, dates, element }) {
  return (
    <div
      className="
        group
        rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl
        p-5 transition-all duration-300
        hover:border-yellow-400/60 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]
        hover:-translate-y-1
      "
    >
      {/* ZODIAC ICON */}
      <div className="flex justify-center mb-4">
        {zodiacIcons[sign]}
      </div>

      <h3 className="text-lg text-white font-medium text-center">{sign}</h3>
      <p className="text-white/70 text-sm text-center">{dates}</p>

      <p className="text-xs text-yellow-300 mt-3 text-center">
        Today's energy: {element} alignment
      </p>
    </div>
  );
}
