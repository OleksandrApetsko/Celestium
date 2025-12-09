export default function FinalCTASection() {
  return (
    <section className="relative z-10 py-24 md:py-32">

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* LINE ART SYMBOL */}
        <div className="flex justify-center mb-8 opacity-0 animate-[fadeUp_0.8s_ease-out_forwards]">
          <svg
            viewBox="0 0 100 100"
            className="w-14 h-14 text-yellow-300 drop-shadow-[0_0_12px_rgba(250,204,21,0.6)]"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <circle cx="50" cy="50" r="30" />
            <line x1="50" y1="15" x2="50" y2="5" />
            <line x1="50" y1="95" x2="50" y2="85" />
            <line x1="15" y1="50" x2="5" y2="50" />
            <line x1="95" y1="50" x2="85" y2="50" />
          </svg>
        </div>

        {/* TITLE */}
        <h2
          className="
            text-3xl sm:text-4xl lg:text-5xl text-white font-semibold
            opacity-0 animate-[fadeUp_0.9s_ease-out_forwards]
          "
        >
          Step Into Your Cosmic Journey
        </h2>

        {/* SUBTEXT */}
        <p
          className="
            text-white/70 max-w-2xl mx-auto mt-4 text-sm sm:text-base
            opacity-0 animate-[fadeUp_1s_ease-out_forwards]
          "
        >
          Discover personalized astrology, daily guidance, and deep insights crafted to help you
          understand your path, potential, and the universe around you.
        </p>

        {/* CTA BUTTON */}
        <div className="mt-10 opacity-0 animate-[fadeUp_1.1s_ease-out_forwards]">
          <button
            className="
              px-12 py-4 rounded-full text-black text-lg font-semibold
              bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-400
              shadow-[0_0_25px_rgba(250,204,21,0.5)]
              hover:shadow-[0_0_35px_rgba(250,204,21,0.8)]
              transition-all
            "
          >
            Join Celestium
          </button>
        </div>

      </div>
    </section>
  );
}
