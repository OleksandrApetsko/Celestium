import { Link } from "react-router-dom";

import { sunSignMeta } from "../../data/sunSigns.js";
import { getSunSignFromDateString } from "../../utils/getSunSignFromDateString.js";

import SunSummary from "./SunSummary.jsx";
import NatalWheel from "./NatalWheel.jsx";
import CorePatternTease from "./CorePatternTease.jsx";

export default function BirthChartReport({ data }) {
  const { date, time, location } = data;

  const sunSign = getSunSignFromDateString(date);
  const meta = sunSignMeta[sunSign];

  return (
    <div className="max-w-6xl mx-auto">
      {/* TOP LINE */}
      <div className="text-center">
        <p className="text-white/60 text-sm">
          {date} • {time} • {location}
        </p>

        <h2 className="mt-6 text-3xl md:text-4xl text-yellow-300 tracking-[0.18em]">
          BIRTH BLUEPRINT PREVIEW
        </h2>

        <p className="mt-4 text-white/70 text-sm md:text-base max-w-2xl mx-auto">
          A focused identity snapshot and chart structure preview.
        </p>
      </div>

      {/* SUN + WHEEL */}
      <div className="mt-14 grid md:grid-cols-2 gap-10 items-stretch">
        <div className="p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl h-full flex">
          <SunSummary sunSign={sunSign} meta={meta} />
        </div>

        <div className="p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl h-full flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-4 text-center">
              Chart Structure Preview
            </p>
            <NatalWheel />
          </div>

          <p className="mt-6 text-white/60 text-xs text-center max-w-sm mx-auto">
            Full report unlocks planets, houses, aspects, relationship polarity and timing cycles.
          </p>
        </div>
      </div>

      <CorePatternTease />

      {/* SINGLE CTA → FULL PAGE */}
      <div className="mt-14 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl p-10 md:p-12 text-center shadow-[0_0_45px_rgba(250,204,21,0.10)]">
        <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-4">
          Next Step
        </p>

        <h3 className="text-3xl sm:text-4xl font-light tracking-[0.10em] text-white">
          View Full Natal Report
        </h3>

        <p className="mt-5 text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          Open the full report page to view the extended structure and premium access gate.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            to="/birth-chart/full"
            state={{ chart: data }}
            className="
              inline-flex items-center justify-center
              rounded-xl
              bg-yellow-300 text-black
              px-10 py-4
              font-semibold
              transition-all duration-300
              hover:brightness-110
              hover:shadow-[0_0_40px_rgba(250,204,21,0.35)]
            "
          >
            Open Full Report
          </Link>
        </div>
      </div>
    </div>
  );
}
