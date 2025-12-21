// src/components/Horoscope/HoroscopePaywall.jsx

import { Link, useLocation } from "react-router-dom";
import { horoscopePaywallConfig } from "../../data/horoscopePaywallConfig.js";
import { oneTimeProducts } from "../../data/pricing.js";

export default function HoroscopePaywall({ period, sign }) {
  const location = useLocation();
  const config = horoscopePaywallConfig[period];

  if (!config) return null;

  const price =
    oneTimeProducts?.[config.productKey]?.price || "$—";

  const linkState = {
    from: location.pathname,
    product: config.productKey,
    sign,
  };

  return (
    <div className="w-full mb-20 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl p-10 md:p-12 text-center">
      <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-4">
        Premium
      </p>

      <h3 className="text-3xl sm:text-4xl font-light tracking-[0.08em] text-white">
        {config.title}
      </h3>

      <p className="mt-5 text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
        {config.description}
      </p>

      {/* ONE-TIME */}
      <div className="mt-10 rounded-3xl bg-black/50 border border-yellow-300/30 p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
          {config.oneTime.label}
        </p>

        <div className="text-4xl font-semibold text-yellow-300">
          {price}
        </div>

        <p className="mt-3 text-white/65 text-sm">
          {config.oneTime.helper}
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            to={`/checkout/${config.productKey}/${sign}`}
            state={linkState}
            className="rounded-xl bg-yellow-300 text-black px-10 py-4 font-semibold hover:brightness-110 transition"
          >
            {config.oneTime.cta}
          </Link>
        </div>
      </div>

      {/* PREMIUM CTA */}
      <div className="mt-10 flex justify-center">
        <Link
          to="/premium"
          state={linkState}
          className="rounded-xl border border-yellow-300/40 bg-black/40 px-10 py-4 font-semibold text-yellow-300 hover:text-white transition"
        >
          {config.premiumCta}
        </Link>
      </div>
    </div>
  );
}
