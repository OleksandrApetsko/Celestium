export default function SunSummary({ sunSign, meta }) {
  if (!meta) return null;

  return (
    <div className="flex flex-col h-full">
      <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-4">
        Identity Snapshot
      </p>

      <h3 className="text-4xl text-white font-semibold mb-3 leading-tight">
        Sun in {sunSign}
      </h3>

      <p className="text-yellow-300 text-base mb-6">{meta.tagline}</p>

      <p className="text-white/85 text-base leading-relaxed mb-4">
        {meta.preview}
      </p>

      <p className="text-white/70 text-sm leading-relaxed">
        This placement describes how you express willpower, direction and personal authority — shaping your choices, confidence and long-term path.
      </p>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-3">
          Core Expression
        </p>

        <div className="flex flex-wrap gap-3">
          {(meta.keywords || []).map((k) => (
            <span
              key={k}
              className="px-4 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-white/80"
            >
              {k}
            </span>
          ))}
        </div>
      </div>

      <div className="flex-grow" />

      <p className="mt-6 text-white/50 text-xs">
        Full natal interpretation reveals how this Sun interacts with your Moon, Rising sign, houses and planetary aspects.
      </p>
    </div>
  );
}
