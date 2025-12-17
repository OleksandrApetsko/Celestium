import { Link, useLocation } from "react-router-dom";

export default function PremiumGate({
  title,
  description,
  cta = "Unlock with Premium"
}) {
  const location = useLocation();
  const unlockUrl = `/premium?from=${encodeURIComponent(location.pathname)}`;

  return (
    <div className="relative mt-20">

      {/* BLURRED CONTENT */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-12">
        <div className="space-y-6 opacity-60 blur-[2px] pointer-events-none select-none">
          <div className="h-6 w-2/3 rounded bg-white/10" />
          <div className="h-4 w-full rounded bg-white/10" />
          <div className="h-4 w-11/12 rounded bg-white/10" />
          <div className="h-4 w-10/12 rounded bg-white/10" />

          <div className="grid md:grid-cols-2 gap-6 pt-6">
            <div className="h-36 rounded-xl bg-white/10" />
            <div className="h-36 rounded-xl bg-white/10" />
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="h-24 rounded-xl bg-white/10" />
            <div className="h-24 rounded-xl bg-white/10" />
            <div className="h-24 rounded-xl bg-white/10" />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(250,204,21,0.18),transparent_55%)]" />
      </div>

      {/* PAYWALL OVERLAY */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="
            max-w-2xl mx-6
            rounded-2xl
            bg-black/70 backdrop-blur-2xl
            border border-yellow-300/30
            p-12 text-center
            shadow-[0_0_45px_rgba(250,204,21,0.18)]
          "
        >
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-300 mb-4">
            Premium
          </p>

          <h3 className="text-3xl sm:text-4xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-5 text-white/70 text-sm sm:text-base leading-relaxed">
            {description}
          </p>

          {/* SINGLE CTA */}
          <div className="mt-10 flex justify-center">
            <Link
              to={unlockUrl}
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

          <p className="mt-8 text-xs text-white/40">
            This content is available with Celestium Premium.
          </p>
        </div>
      </div>
    </div>
  );
}
