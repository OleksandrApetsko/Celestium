import Container from "../Ui/Container.jsx";
import { heroSectionData } from "../../data/heroSectionData.js";

export default function HeroSection() {
  const { badge, title, tagline, description, meta } = heroSectionData;

  return (
    <section className="relative z-10 overflow-hidden py-28 md:py-36 lg:py-44">
      {/* background glow */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-gradient-to-b from-yellow-400/8 via-transparent to-transparent
          blur-3xl
        "
      />

      <Container>
        <div className="flex flex-col items-center text-center">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur mb-8">
            <span className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(255,220,120,0.9)]" />
            <span className="text-xs uppercase tracking-[0.35em] text-white/70">
              {badge}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight tracking-tight">
            {title.main}
            <span className="block text-yellow-400 mt-3">
              {title.accent}
            </span>
          </h1>

          {/* TAGLINE */}
          <p className="mt-8 text-white/60 text-sm uppercase tracking-[0.4em]">
            {tagline}
          </p>

          {/* DESCRIPTION */}
          <p className="mt-10 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            {description}
          </p>

          {/* META */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-white/60">
            {meta.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
