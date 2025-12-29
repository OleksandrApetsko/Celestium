import Container from "../UI/Container.jsx";

import { sunSignMeta } from "../../data/birthChart/birthChartSunSummary.js";
import { getSunSignFromDateString } from "../../utils/getSunSignFromDateString.js";

export default function BirthChartSunSummary({ data }) {
  const { date, time, location } = data;

  const sunSign = getSunSignFromDateString(date);
  const meta = sunSignMeta[sunSign];
  if (!meta) return null;

  return (
    <Container>
      <section className="rounded-3xl bg-black/40 border border-white/10 p-10 shadow-[0_0_45px_rgba(0,0,0,0.35)]">
        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-3">
            Identity
          </p>

          <h2 className="text-3xl md:text-4xl font-light tracking-[0.10em] text-white">
            Your Personal Overview
          </h2>

          <p className="mt-4 text-white/70 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Based on your birth data — {date} · {time} · {location}
          </p>
        </div>

        {/* CONTENT */}
        <div className="rounded-2xl bg-black/30 border border-white/10 p-8 md:p-10">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl text-white font-semibold mb-3">
              {sunSign}
            </h3>

            <p className="text-yellow-300 text-base mb-4">
              {meta.tagline}
            </p>

            <p className="text-white/80 text-sm leading-relaxed">
              {meta.preview}
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
