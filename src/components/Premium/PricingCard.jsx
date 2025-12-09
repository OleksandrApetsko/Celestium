export default function PricingCard({ plan }) {
  const isBest = plan.highlight;

  return (
    <div
      className={`
        group relative rounded-3xl p-10 flex flex-col transition-all
        backdrop-blur-xl border
        ${isBest
        ? "bg-gradient-to-b from-yellow-400/15 to-yellow-200/5 border-yellow-300/60 shadow-[0_0_40px_rgba(255,225,160,0.3)] scale-[1.02]"
        : "bg-white/5 border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
      }
        hover:-translate-y-1 hover:border-yellow-300/40
      `}
    >

      {/* Badge */}
      {plan.badge && (
        <div className="
          absolute -top-3 left-1/2 -translate-x-1/2
          px-3 py-1 text-xs rounded-full bg-yellow-300 text-black font-bold shadow-lg
        ">
          {plan.badge}
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>

      {/* Price */}
      <div className="mt-6">
        <span className="text-5xl font-bold text-yellow-300">{plan.price}</span>
        <p className="text-white/60 text-sm mt-1">{plan.period}</p>
        {plan.save && (
          <p className="text-green-400 mt-1 font-medium tracking-wide text-sm">
            {plan.save}
          </p>
        )}
      </div>

      {/* Features with icons */}
      <ul className="mt-8 space-y-3 text-white/75 text-sm leading-relaxed">
        {plan.features.map((f, i) => (
          <li key={i} className="flex gap-2 items-center">
            <span className="text-yellow-300">✓</span>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        className={`
          mt-10 w-full py-4 rounded-full font-semibold transition
          ${isBest
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
