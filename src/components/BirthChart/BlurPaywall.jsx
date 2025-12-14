// src/components/BirthChart/BlurPaywall.jsx

import { Link } from "react-router-dom";

export default function BlurPaywall({
  title,
  description,
  height = "320px",
  to = "/premium",
  linkState,
  ctaLabel = "Unlock Premium Access",
  children,
}) {
  // Wrapper mode
  if (children) {
    return (
      <div
        className="
          relative rounded-3xl overflow-hidden
          border border-yellow-300/20 bg-black/30
          backdrop-blur-xl shadow-[0_0_35px_rgba(255,215,0,0.18)]
        "
      >
        <div className="relative">
          <div className="pointer-events-none select-none blur-[6px] opacity-70">
            {children}
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div
              className="
                w-full max-w-lg text-center
                rounded-3xl bg-black/75 border border-yellow-300/25
                p-8 md:p-10 backdrop-blur-xl
                shadow-[0_0_35px_rgba(255,215,0,0.25)]
              "
            >
              <div className="flex justify-center mb-5">
                <svg
                  className="w-12 h-12 text-yellow-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="5" y="10" width="14" height="10" rx="1" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>
              </div>

              <h3 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                {title || "Premium Report Locked"}
              </h3>

              <p className="mt-3 text-white/70 text-sm md:text-base leading-relaxed">
                {description ||
                  "Unlock the full natal report: planets, houses, aspects and long-range cycles mapped to your birth moment."}
              </p>

              <div className="mt-6">
                <Link
                  to={to}
                  state={linkState}
                  className="
                    inline-block px-10 py-3 rounded-full text-black text-sm md:text-base font-semibold tracking-wide
                    bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-300
                    shadow-[0_0_22px_rgba(255,215,0,0.6)]
                    hover:shadow-[0_0_32px_rgba(255,215,0,0.9)]
                    hover:scale-[1.04] transition-all
                  "
                >
                  {ctaLabel}
                </Link>
              </div>

              <p className="mt-4 text-white/45 text-xs">
                Premium access will be available once the payment system is integrated.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Card mode
  return (
    <div
      className="
        relative rounded-2xl overflow-hidden mt-10
        border border-yellow-300/25 bg-black/40
        shadow-[0_0_30px_rgba(255,215,0,0.25)]
      "
      style={{ minHeight: height }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-10">
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
            "Unlock full natal chart interpretation: planets, houses, aspects and long-range cycles mapped to your birth moment."}
        </p>

        <Link
          to={to}
          state={linkState}
          className="
            inline-block px-10 py-3 rounded-full text-black text-sm font-semibold tracking-wide
            bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-300
            shadow-[0_0_22px_rgba(255,215,0,0.6)]
            hover:shadow-[0_0_32px_rgba(255,215,0,0.9)]
            hover:scale-[1.05] transition-all
          "
        >
          {ctaLabel}
        </Link>

        <p className="mt-4 text-white/45 text-xs">
          Premium access will be available once the payment system is integrated.
        </p>
      </div>
    </div>
  );
}
