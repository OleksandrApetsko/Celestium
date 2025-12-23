import { premiumBenefits } from "../../data/premium/premiumBenefits.js";
import PremiumIcon from "./PremiumIcon.jsx";

export default function PremiumBenefits() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          What You Unlock With Premium
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto text-lg mb-16">
          Human astrologists guide your path — AI brings depth and precision.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {premiumBenefits.map(item => (
            <div
              key={item.id}
              className="group p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10
                         hover:border-yellow-300/40 hover:shadow-[0_0_25px_rgba(255,220,150,0.28)]
                         transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-5">
                <PremiumIcon type={item.icon}/>
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
