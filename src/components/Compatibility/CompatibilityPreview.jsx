import ScoreRing from "./ScoreRing.jsx";
import zodiacLabels from "../../data/zodiac/zodiacLabels.js";

export default function CompatibilityPreview({ signA, signB, data }) {
  if (!data) return null;

  const labelA = zodiacLabels[String(signA).toLowerCase()];
  const labelB = zodiacLabels[String(signB).toLowerCase()];

  return (
    <div className="max-w-5xl mx-auto mt-24 px-6">
      <div className="rounded-3xl bg-black/40 border border-white/10 p-10 md:p-12 backdrop-blur-xl shadow-[0_0_45px_rgba(250,204,21,0.10)]">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40">
            Compatibility preview
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-light tracking-[0.10em] text-yellow-300">
            {labelA} ✦ {labelB}
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-[220px_1fr] gap-10 items-start">
          <div className="flex justify-center">
            <ScoreRing value={data.score} />
          </div>

          <div>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              {data.summary}
            </p>

            {Array.isArray(data.highlights) && data.highlights.length > 0 && (
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-4">
                  Key highlights
                </p>

                <ul className="space-y-3 text-white/70">
                  {data.highlights.map((h, i) => (
                    <li key={`${h}-${i}`} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-yellow-300/80 shrink-0" />
                      <span className="text-sm sm:text-base leading-relaxed">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 rounded-2xl border border-yellow-300/20 bg-black/30 p-6">
              <p className="text-white/70 text-sm leading-relaxed">
                This is a concise snapshot. Unlock the full report to explore emotional
                dynamics, communication patterns, conflict style, and long-term potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
