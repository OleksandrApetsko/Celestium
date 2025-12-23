import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import NatalWheel from "../components/BirthChart/NatalWheel.jsx";
import PremiumGate from "../components/Premium/PremiumGate.jsx";
import { birthChartFullData } from "../data/birthChart/birthChartFullData.js";

export default function BirthChartFull() {
  const location = useLocation();
  const chart = location.state?.chart || null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headerLine = chart
    ? `${chart.date} • ${chart.time} • ${chart.location}`
    : "Extended report preview";

  return (
    <section className="min-h-screen pt-40 pb-32 px-6 text-white relative">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <p className="text-white/60 text-sm">{headerLine}</p>

        <h1 className="mt-6 text-5xl md:text-6xl font-light tracking-[0.22em] text-yellow-300 drop-shadow-[0_0_28px_rgba(255,215,0,0.45)]">
          FULL NATAL REPORT
        </h1>

        <p className="mt-6 text-white/70 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          A structured, premium-grade interpretation of your chart architecture and life patterns.
        </p>

        <p className="mt-4 text-yellow-300/90 text-xs tracking-[0.35em] uppercase">
          Precision-focused • Modern • Designed for alignment
        </p>
      </div>

      {/* PREVIEW GRID (FREE) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-stretch">
        {/* LEFT */}
        <div className="p-10 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl flex flex-col">
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-6 text-center">
            Chart Structure
          </p>

          <div className="flex justify-center">
            <NatalWheel />
          </div>

          <p className="mt-8 text-white/55 text-xs text-center max-w-sm mx-auto leading-relaxed">
            This wheel represents the structural geometry of your natal chart.
            Planetary placements, houses, aspects and timing cycles unlock in the full report.
          </p>
        </div>

        {/* RIGHT */}
        <div className="p-10 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl flex flex-col">
          <p className="text-xs uppercase tracking-[0.3em] text-yellow-300 mb-4">
            Core Chart Summary
          </p>

          <div className="space-y-8">
            {birthChartFullData.core.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg md:text-xl text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex-grow" />
        </div>
      </div>

      {/* PREMIUM GATE (SINGLE SOURCE) */}
      <div className="max-w-6xl mx-auto">
        <PremiumGate
          title="Extended Natal Interpretation"
          description="Unlock planets, houses, aspects, emotional architecture, karmic themes and long-range life cycles."
          cta="Unlock Full Natal Report"
          to="/premium"
        />
      </div>

      <div className="text-center mt-20">
        <Link
          to="/birth-chart"
          className="text-white/60 hover:text-yellow-300 transition tracking-wide"
        >
          ← Back to Birth Chart
        </Link>
      </div>
    </section>
  );
}
