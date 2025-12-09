import { zodiacIcons } from "../DailyHoroscope/zodiacIcons.jsx";

export default function ZodiacCard({ sign, dates }) {
  const Icon = zodiacIcons[sign];

  return (
    <div
      className="
        group p-6 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10
        transition-all duration-300 cursor-pointer
        hover:border-yellow-400/60 hover:shadow-[0_0_25px_rgba(250,204,21,0.35)]
        hover:-translate-y-1
      "
    >
      {/* ICON */}
      <div className="flex justify-center mb-4">
        <div className="
          rounded-full bg-yellow-400/10 border border-yellow-400/40
          p-4 group-hover:border-yellow-300 group-hover:bg-yellow-400/15
          transition-colors
        ">
          {Icon}
        </div>
      </div>

      {/* SIGN NAME */}
      <h3 className="text-xl text-white font-medium text-center">{sign}</h3>

      {/* DATES */}
      <p className="text-white/70 text-sm text-center mt-1">{dates}</p>

      {/* BUTTON */}
      <div className="text-center mt-3">
        <button className="text-yellow-300 text-sm group-hover:text-white transition-colors">
          Read More →
        </button>
      </div>
    </div>
  );
}
