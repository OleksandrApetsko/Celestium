import Container from "../Ui/Container.jsx";

import HeroBadge from "./HeroBadge.jsx";
import HeroTitle from "./HeroTitle.jsx";
import HeroTagline from "./HeroTagline.jsx";
import HeroSubtitle from "./HeroSubtitle.jsx";
import HeroButtons from "./HeroButtons.jsx";
import HeroMeta from "./HeroMeta.jsx";
import HeroPreview from "./HeroPreview.jsx";

export default function HeroSection() {
  return (
    <section className="relative z-10 overflow-hidden py-20 md:py-28 lg:py-32">
      <div
        className="absolute inset-0 pointer-events-none
        bg-gradient-to-b from-yellow-400/5 via-transparent to-transparent
        blur-3xl"
      />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-7">
            <HeroBadge />
            <HeroTitle />
            <HeroTagline />
            <HeroSubtitle />
            <HeroButtons />
            <HeroMeta />
          </div>

          <HeroPreview />
        </div>
      </Container>
    </section>
  );
}
