// src/components/Compatibility/CompatibilityPreview.jsx

import { Link } from "react-router-dom";
import ScoreRing from "./ScoreRing.jsx";

export default function CompatibilityPreview({ signA, signB, preview }) {
  if (!preview) return null;

  const { score, shortPositive, shortNegative } = preview;

  const fullReportUrl = `/compatibility?signA=${encodeURIComponent(
    signA
  )}&signB=${encodeURIComponent(signB)}`;

  return (
    <div
      className="
        mt-10 max-w-3xl mx-auto
        bg-black/40 border border-white/15 rounded-2xl
        px-8 py-8
        backdrop-blur-xl
      "
    >
      <h3 className="text-xl sm:text-2xl text-yellow-300 font-semibold text-center mb-6">
        {signA} ✦ {signB}
      </h3>

      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        <div className="flex justify-center">
          <ScoreRing value={score} />
        </div>

        <div className="flex-1 text-sm sm:text-base text-white/80 space-y-3">
          {shortPositive && (
            <p>
              <span className="text-yellow-300 font-medium">
                Strength highlight:
              </span>{" "}
              {shortPositive}
            </p>
          )}

          {shortNegative && (
            <p>
              <span className="text-yellow-300 font-medium">
                Potential tension:
              </span>{" "}
              {shortNegative}
            </p>
          )}

          <p className="text-white/60 text-xs sm:text-[13px]">
            This is a concise compatibility snapshot. For a deeper view into
            emotional dynamics, elemental balance and long-term potential, you
            can unlock the extended report.
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to={fullReportUrl}
          className="
            px-8 py-3 rounded-full text-sm sm:text-base font-semibold
            border border-yellow-400/70 text-yellow-200
            hover:bg-yellow-400 hover:text-black
            transition-colors
          "
        >
          View Full Compatibility Report
        </Link>
      </div>
    </div>
  );
}
