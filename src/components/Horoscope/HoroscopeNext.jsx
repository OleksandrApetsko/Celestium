import { horoscopeNavigation } from "../../data/horoscope/horoscopeNavigation.js";
import CTAButton from "./CTAButton.jsx";

export default function HoroscopeNext({ sign, period }) {
  const config = horoscopeNavigation[period];
  if (!config) return null;

  const variant = config.variant || "cta";
  const links = config.links(sign);

  return (
    <div className="w-full pt-20 pb-16">
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
