// src/pages/BirthChartFull.jsx

import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NatalWheel from "../components/BirthChart/NatalWheel.jsx";
import BlurPaywall from "../components/BirthChart/BlurPaywall.jsx";
import FullChartData from "../data/fullChartData.js";

export default function BirthChartFull() {
  const location = useLocation();
  const chart = location.state?.chart || null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen pt-40 pb-32 px-6 text-white relative">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="
          text-5xl md:text-6xl font-light tracking-[0.22em]
          text-yellow-300 drop-shadow-[0_0_28px_rgba(255,215,0,0.45)]
        ">
          FULL NATAL CHART REPORT
        </h1>

        <p className="text-white/70 text-lg max-w-3xl mx-auto mt-6 leading-relaxed">
          A complete interpretation of your birth chart including identity, emotional core,
          subconscious patterns, inner drives, strengths, blind spots, timing cycles and destiny themes.
        </p>

        <p className="mt-4 text-yellow-300/90 text-sm tracking-widest">
          Personalized • Accurate • AI-Augmented • Astrologer-Crafted
        </p>
      </div>

      {/* WHEEL + QUICK OVERVIEW */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

        {/* BIG WHEEL */}
        <div className="flex justify-center">
          <NatalWheel />
        </div>

        {/* QUICK PLANET SUMMARY */}
        <div className="space-y-10">
          <h2 className="text-3xl text-yellow-300 tracking-wide">
            Core Chart Summary
          </h2>

          <div className="space-y-6">
            {FullChartData.core.map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                <h3 className="text-xl text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-md leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FULL INTERPRETATIONS (behind paywall) */}
      <BlurPaywall>
        <div className="max-w-5xl mx-auto space-y-20">

          {/* SECTIONS */}
          {FullChartData.sections.map((block, i) => (
            <div key={i} className="space-y-6">
              <h2 className="text-3xl text-yellow-300">{block.title}</h2>
              <p className="text-white/80 leading-relaxed text-lg">{block.text}</p>

              {block.items && (
                <ul className="space-y-4 text-white/70 text-md">
                  {block.items.map((t, idx) => (
                    <li key={idx}>• {t}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

        </div>
      </BlurPaywall>

      {/* BACK BUTTON */}
      <div className="text-center mt-24">
        <Link
          to="/birth-chart"
          className="text-white/60 hover:text-yellow-300 transition tracking-wide"
        >
          ← Back to Chart Input
        </Link>
      </div>
    </section>
  );
}
