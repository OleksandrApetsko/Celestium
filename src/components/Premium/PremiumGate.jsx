import { Link, useLocation } from "react-router-dom";

/**
 * PremiumGate (универсальный)
 * - Если передан children → работает как WRAPPER (blur + overlay)
 * - Если children НЕ передан → работает как BLOCK (отдельный premium-блок)
 * - ОДНА кнопка. Никаких secondary CTA.
 */
export default function PremiumGate({
  title = "Premium Content",
  description = "Unlock full access with Celestium Premium.",
  cta = "Unlock with Premium",
  to = "/premium",
  state,
  children,
  className = "",
}) {
  const location = useLocation();

  // сохраняем, откуда пришли (может пригодиться для аналитики / checkout позже)
  const linkState = {
    ...state,
    from: location.pathname,
  };

  // WRAPPER MODE
  if (children) {
    return (
      <div
        className={[
          "relative rounded-3xl overflow-hidden",
          "border border-white/10 bg-black/30 backdrop-blur-xl",
          "shadow-[0_0_45px_rgba(250,204,21,0.12)]",
          className,
        ].join(" ")}
      >
        {/* blurred content */}
        <div className="pointer-events-none select-none blur-[6px] opacity-70">
          {children}
        </div>

        {/* overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div
            className="
              w-full max-w-2xl text-center
              rounded-3xl bg-black/70 backdrop-blur-2xl
              border border-yellow-300/30
              p-10 md:p-12
              shadow-[0_0_55px_rgba(250,204,21,0.18)]
            "
          >
            <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-4">
              Premium
            </p>

            <h3 className="text-3xl sm:text-4xl font-light tracking-[0.08em] text-white">
              {title}
            </h3>

            <p className="mt-5 text-white/70 text-sm sm:text-base leading-relaxed">
              {description}
            </p>

            <div className="mt-10 flex justify-center">
              <Link
                to={to}
                state={linkState}
                className="
                  inline-flex items-center justify-center
                  rounded-xl
                  bg-yellow-300 text-black
                  px-10 py-4
                  font-semibold
                  transition-all duration-300
                  hover:brightness-110
                  hover:shadow-[0_0_40px_rgba(250,204,21,0.35)]
                "
              >
                {cta}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // BLOCK MODE
  return (
    <div
      className={[
        "rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl",
        "p-10 md:p-12 text-center",
        "shadow-[0_0_45px_rgba(250,204,21,0.12)]",
        className,
      ].join(" ")}
    >
      <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-4">
        Premium
      </p>

      <h3 className="text-3xl sm:text-4xl font-light tracking-[0.08em] text-white">
        {title}
      </h3>

      <p className="mt-5 text-white/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
        {description}
      </p>

      <div className="mt-10 flex justify-center">
        <Link
          to={to}
          state={linkState}
          className="
            inline-flex items-center justify-center
            rounded-xl
            bg-yellow-300 text-black
            px-10 py-4
            font-semibold
            transition-all duration-300
            hover:brightness-110
            hover:shadow-[0_0_40px_rgba(250,204,21,0.35)]
          "
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
