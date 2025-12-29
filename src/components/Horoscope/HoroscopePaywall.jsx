import { Link, useLocation } from "react-router-dom";
import Container from "../UI/Container.jsx";

import { horoscopePaywallConfig } from "../../data/horoscope/horoscopePaywallConfig.js";
import { oneTimeProducts } from "../../data/premium/pricing.js";

export default function HoroscopePaywall({ period, sign }) {
  const location = useLocation();
  const cfg = horoscopePaywallConfig[period];
  if (!cfg) return null;

  const price = oneTimeProducts?.[cfg.productKey]?.price || "$—";

  const linkState = {
    from: location.pathname,
    product: cfg.productKey,
    sign
  };

  return (
    <Container>
      <div className="w-full mb-20 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl p-10 md:p-12 text-center shadow-[0_0_45px_rgba(250,204,21,0.12)]">
        <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-4">
          Premium
        </p>

        <h3 className="text-3xl sm:text-4xl font-light tracking-[0.08em] text-white">
          {cfg.title}
        </h3>

        <p className="mt-5 text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {cfg.description}
        </p>

        {/* One-time purchase */}
        <div className="mt-10 rounded-3xl bg-black/50 border border-yellow-300/30 p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
            {cfg.oneTime.title}
          </p>

          <div className="text-4xl font-semibold text-yellow-300">
            {price}
          </div>

          <p className="mt-3 text-white/65 text-sm">
            {cfg.oneTime.helper}
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to={`/checkout/${cfg.productKey}/${sign}`}
              state={linkState}
              className="
                inline-flex items-center justify-center
                rounded-xl bg-yellow-300 text-black
                px-10 py-4 font-semibold
                transition-all duration-300
                hover:brightness-110
                hover:shadow-[0_0_40px_rgba(250,204,21,0.35)]
              "
            >
              {cfg.oneTime.cta}
            </Link>
          </div>
        </div>

        {/* Premium CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/premium"
            state={linkState}
            className="
              inline-flex items-center justify-center
              rounded-xl
              border border-yellow-300/40 bg-black/40
              px-10 py-4
              font-semibold
              text-yellow-300
              transition-all duration-300
              hover:border-yellow-300/70
              hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]
              hover:text-white
            "
          >
            {cfg.premiumCta}
          </Link>
        </div>
      </div>
    </Container>
  );
}
