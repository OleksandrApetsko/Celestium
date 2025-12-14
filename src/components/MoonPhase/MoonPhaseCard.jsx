import { moonIcons } from "./moonIcons.jsx";

export default function MoonPhaseCard({ phase, illumination, summary, keywords }) {
  const Icon = moonIcons[phase] || moonIcons["Waxing Crescent"];

  return (
    <div className="max-w-lg w-full p-8 bg-black/35 border border-yellow-300/15 rounded-3xl
                    backdrop-blur-xl shadow-[0_0_30px_rgba(255,215,0,0.15)]">

      <div className="flex justify-center mb-6 drop-shadow-[0_0_25px_rgba(255,215,0,0.5)]">{Icon}</div>

      <h3 className="text-3xl text-yellow-300 font-medium">{phase}</h3>
      <p className="text-yellow-200/80 mt-1 mb-4 text-sm">Illumination: {illumination}%</p>

      <p className="text-white/80 leading-relaxed">{summary}</p>

      <ul className="flex gap-3 mt-6 justify-center flex-wrap">
        {keywords.map((k,i) => (
          <li key={i} className="text-xs text-yellow-300/80 border border-yellow-300/30 px-3 py-1 rounded-full">
            {k}
          </li>
        ))}
      </ul>
    </div>
  );
}
