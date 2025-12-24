import { premiumIncludes } from "../../data/premium/premiumIncludes.js";

export default function PremiumIncludes() {
  return (
    <div className="mb-28">
      <div className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur px-14 py-12">

        <h3
          className="
            text-yellow-300 text-2xl md:text-3xl font-semibold
            mb-10 text-center
            drop-shadow-[0_0_20px_rgba(255,215,100,0.35)]
          "
        >
          What’s included in Premium
        </h3>

        <ul
          className="
            flex flex-wrap justify-center
            gap-x-14 gap-y-6
            text-base md:text-lg text-white/80
          "
        >
          {premiumIncludes.map((item) => (
            <li key={item} className="flex items-center gap-3">
              <span className="text-yellow-300 text-xl leading-none">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}
