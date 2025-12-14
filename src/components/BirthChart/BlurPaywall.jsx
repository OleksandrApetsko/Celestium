// src/components/BirthChart/BlurPaywall.jsx

import { Link } from "react-router-dom";

export default function BlurPaywall({ title, description, height = "320px" }) {
  return (
    <div
      className="
        relative rounded-2xl overflow-hidden mt-10
        border border-yellow-300/25 bg-black/40
        shadow-[0_0_30px_rgba(255,215,0,0.25)]
      "
      style={{ minHeight: height }}
    >
      {/* BLUR LAYER */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-10">
        {/* ICON */}
        <svg
          className="w-12 h-12 text-yellow-300 mb-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="5" y="10" width="14" height="10" rx="1" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>

        <h3 className="text-white text-xl font-semibold mb-2 tracking-wide">
          {title || "Premium Natal Insights"}
        </h3>

        <p className="text-white/70 text-sm max-w-md mx-auto mb-6 leading-relaxed">
          {description ||
            "Unlock full natal chart interpretation: planets, houses, aspects, relationship polarity and long-term cycles mapped to your birth moment."}
        </p>

        <Link
          to="/birth-chart/full"
          className="
            inline-block px-10 py-3 rounded-full text-black text-sm font-semibold tracking-wide
            bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-300
            shadow-[0_0_22px_rgba(255,215,0,0.6)]
            hover:shadow-[0_0_32px_rgba(255,215,0,0.9)]
            hover:scale-[1.05] transition-all
          "
        >
          Unlock Full Natal Report
        </Link>
      </div>
    </div>
  );
}
