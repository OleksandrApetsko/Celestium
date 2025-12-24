import { Link } from "react-router-dom";
import { horoscopeNavigation } from "../../data/horoscope/horoscopeNavigation.js";

function CTAButton({ to, label, variant }) {
  /* QUIET VARIANT — Compatibility */
  if (variant === "quiet") {
    return (
      <Link
        to={to}
        className="
          group flex items-center justify-center gap-2
          min-w-[180px]
          rounded-xl
          border border-yellow-300/40
          bg-black/40 backdrop-blur-xl
          px-5 py-3
          text-sm font-medium
          text-yellow-300
          transition-all duration-300
          hover:border-yellow-300/70
          hover:shadow-[0_0_18px_rgba(250,204,21,0.25)]
          hover:text-white
        "
      >
        <span>{label}</span>
        <span
          className="
            transition-transform duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </Link>
    );
  }

  /* DEFAULT CTA VARIANT — Horoscopes */
  return (
    <Link
      to={to}
      className="
        group inline-flex items-center justify-center
        rounded-xl
        border border-white/10
        bg-black/40
        px-5 py-3
        text-sm font-medium
        text-yellow-300
        transition-all duration-300
        hover:border-yellow-300/60
        hover:shadow-[0_0_22px_rgba(250,204,21,0.22)]
        hover:-translate-y-[1px]
        hover:text-white
      "
    >
      <span>{label}</span>
      <span className="ml-2 transition-colors group-hover:text-white">→</span>
    </Link>
  );
}

export default function HoroscopeNext({ sign, period }) {
  const config = horoscopeNavigation[period];
  if (!config) return null;

  const variant = config.variant || "cta";
  const links = config.links(sign);

  return (
    <div className="w-full mt-24">
      <div
        className={
          variant === "quiet"
            ? "flex justify-center"
            : "rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 p-10 text-center"
        }
      >
        {variant !== "quiet" && (
          <>
            {config.kicker && (
              <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
                {config.kicker}
              </p>
            )}

            {config.title && (
              <h3 className="text-2xl sm:text-3xl font-medium text-white mb-8">
                {config.title}
              </h3>
            )}
          </>
        )}

        <div
          className={
            variant === "quiet"
              ? "flex flex-col sm:flex-row gap-4"
              : "flex flex-col sm:flex-row flex-wrap justify-center gap-4"
          }
        >
          {links.map((link) => (
            <CTAButton
              key={link.id}
              to={link.to}
              label={link.label}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
