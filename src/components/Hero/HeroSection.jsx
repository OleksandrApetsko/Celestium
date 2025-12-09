import HeroBadge from "./HeroBadge.jsx";
import HeroTitle from "./HeroTitle.jsx";
import HeroTagline from "./HeroTagline.jsx";
import HeroSubtitle from "./HeroSubtitle.jsx";
import HeroButtons from "./HeroButtons.jsx";
import HeroMeta from "./HeroMeta.jsx";
import HeroPreview from "./HeroPreview.jsx";

export default function HeroSection() {
  return (
    <section className="relative z-10 overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none
                      bg-gradient-to-b from-yellow-400/4 via-transparent to-transparent
                      blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT */}
          <div className="space-y-7 animate-[fadeUp_1s_ease-out_forwards] opacity-0">

            <HeroBadge />
            <HeroTitle />
            <HeroTagline />
            <HeroSubtitle />
            <HeroButtons />
            <HeroMeta />

          </div>

          {/* RIGHT */}
          <div className="opacity-0 animate-[fadeUp_1.2s_ease-out_forwards]">
            <HeroPreview />
          </div>

        </div>
      </div>
    </section>
  );
}
