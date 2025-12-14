// src/components/BirthChart/SunSummary.jsx

export default function SunSummary({ sunSign, meta }) {
  return (
    <div
      className="
        p-8 rounded-2xl bg-white/5 border border-white/10
        backdrop-blur-xl shadow-[0_0_26px_rgba(0,0,0,0.6)]
      "
    >
      <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-2">
        Core Identity
      </p>

      <h3 className="text-2xl text-white font-semibold mb-1">
        Sun in {sunSign}
      </h3>

      <p className="text-yellow-300 text-sm mb-3">{meta.tagline}</p>

      <p className="text-white/80 text-sm leading-relaxed">{meta.preview}</p>

      <p className="text-white/50 text-xs mt-4">
        Element: {meta.element} • Modality: {meta.modality}
      </p>
    </div>
  );
}
