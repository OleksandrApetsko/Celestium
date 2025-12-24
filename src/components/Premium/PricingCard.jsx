export default function PricingCard({ plan }) {
  const isBest = plan.highlight;

  return (
    <div
      className={`
        relative flex flex-col items-center text-center
        rounded-3xl px-10 py-12 transition-all
        backdrop-blur-xl border
        ${
        isBest
          ? "bg-gradient-to-b from-yellow-400/15 to-yellow-200/5 border-yellow-300/60 shadow-[0_0_40px_rgba(255,225,160,0.3)] scale-[1.03]"
          : "bg-white/5 border-white/10 shadow-[0_0_12px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
      }
        hover:-translate-y-1 hover:border-yellow-300/40
      `}
    >
      {/* Badge */}
      {plan.badge && (
        <div
          className="
            absolute -top-3 left-1/2 -translate-x-1/2
            px-4 py-1 text-xs rounded-full
            bg-yellow-300 text-black font-bold shadow-lg
          "
        >
          {plan.badge}
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl font-semibold text-white mb-6">
        {plan.name}
      </h3>

      {/* Price */}
      <div className="mb-6">
        <span className="text-5xl font-bold text-yellow-300">
          {plan.price}
        </span>
        <p className="text-white/60 text-sm mt-2">
          {plan.period}
        </p>
      </div>

      {/* Value hint (NOT features) */}
      <p className="text-white/70 text-sm mb-10 max-w-xs">
        {plan.valueHint}
      </p>

      {/* CTA */}
      <button
        className={`
          w-full py-4 rounded-full font-semibold transition
          ${
          isBest
            ? "bg-gradient-to-r from-yellow-400 to-amber-300 text-black shadow-[0_0_25px_rgba(255,220,150,0.45)] hover:shadow-[0_0_40px_rgba(255,220,150,0.7)]"
            : "bg-yellow-300/20 border border-yellow-300/40 text-yellow-300 hover:bg-yellow-300 hover:text-black"
        }
        `}
      >
        {plan.buttonText}
      </button>
    </div>
  );
}
