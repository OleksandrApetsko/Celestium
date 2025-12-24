import { zodiacIcons } from "../../data/zodiac/zodiacIcons.jsx";
import { zodiacDescriptions } from "../../data/zodiac/zodiacDescriptions.js";

export default function ZodiacDescription({ sign }) {
  const zodiac = zodiacDescriptions[sign];

  if (!zodiac) {
    return (
      <section className="mx-auto mb-20 max-w-4xl text-center text-white/60">
        Zodiac description not available.
      </section>
    );
  }

  return (
    <section
      className="
        mx-auto mb-20 max-w-4xl
        rounded-2xl
        border border-yellow-300/20
        bg-black/40 backdrop-blur-xl
        px-6 py-10
        shadow-[0_0_40px_rgba(250,204,21,0.12)]
      "
    >
      {/* ICON */}
      <div className="flex justify-center mb-6">
        <div
          className="
            w-24 h-24
            flex items-center justify-center
            rounded-full
            bg-black/50
            border border-yellow-300/40
            shadow-[0_0_30px_rgba(250,204,21,0.3)]
          "
        >
          {zodiacIcons[sign]}
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-center text-base leading-relaxed text-white/80 md:text-lg">
        {zodiac.description}
      </p>
    </section>
  );
}
