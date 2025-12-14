// src/components/PremiumCTA/PremiumCTASection.jsx

import { Link } from "react-router-dom";
import { premiumBenefits } from "../../data/premiumBenefits.js";
import PremiumIcon from "./PremiumIcon.jsx";

export default function PremiumCTASection() {
  const topBenefits = premiumBenefits.slice(0, 3);

  return (
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div
          className="
            rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl
            px-6 py-8 md:px-10 md:py-9
            flex flex-col gap-8 md:flex-row md:items-center md:justify-between
          "
        >
          {/* LEFT: Title + text */}
          <div className="text-left max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-semibold text-white">
              Celestium Premium
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/70 leading-relaxed">
              A deeper layer of astrology: personal forecasts, emotional timing
              and relationship insight tailored to your sky.
            </p>

            {/* Small benefits row on desktop */}
            <div className="hidden md:flex gap-6 mt-5">
              {topBenefits.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-300/15 border border-yellow-300/40">
                    <PremiumIcon type={item.icon} />
                  </div>
                  <span className="text-xs text-white/70">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: CTA + stacked benefits on mobile */}
          <div className="flex flex-col items-stretch md:items-end gap-4 w-full md:w-auto">

            {/* Mobile benefits below title (stacked) */}
            <div className="flex flex-col gap-3 md:hidden">
              {topBenefits.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-300/15 border border-yellow-300/40">
                    <PremiumIcon type={item.icon} />
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">{item.title}</p>
                    <p className="text-xs text-white/60">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/premium"
              className="
                inline-block text-center px-8 py-3 rounded-full text-black text-sm md:text-base
                font-semibold tracking-wide bg-gradient-to-r from-yellow-400 to-amber-300
                shadow-[0_0_16px_rgba(255,215,0,0.55)]
                hover:shadow-[0_0_26px_rgba(255,215,0,0.9)]
                hover:scale-[1.03] transition-all
              "
            >
              Unlock Premium Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
