import { moonIcons } from "./moonIcons.jsx";

export default function MoonPhaseCard({ phase, illumination, energy }) {
  const Icon = moonIcons[phase] || moonIcons["Waxing Crescent"];

  return (
    <div
      className="
        p-8 rounded-3xl bg-black/30 backdrop-blur-xl border border-white/10
        max-w-xl mx-auto text-center
        shadow-[0_0_20px_rgba(250,204,21,0.15)]
      "
    >
      {/* ICON */}
      <div className="flex justify-center mb-6">{Icon}</div>

      {/* PHASE NAME */}
      <h3 className="text-3xl font-semibold text-white mb-2">{phase}</h3>

      {/* ILLUMINATION */}
      <p className="text-yellow-300 text-sm mb-4">
        Illumination: {illumination}%
      </p>

      {/* ENERGY TEXT */}
      <p className="text-white/80 text-sm leading-relaxed max-w-md mx-auto">
        {energy}
      </p>
    </div>
  );
}
