import HeroPreviewMainCard from "./HeroPreviewMainCard.jsx";
import HeroPreviewMiniCards from "./HeroPreviewMiniCards.jsx";

export default function HeroPreview() {
  return (
    <div className="relative">
      {/* Glow behind cards */}
      <div className="absolute -inset-10 bg-gradient-to-br from-yellow-400/10 via-transparent to-purple-500/10 blur-3xl pointer-events-none" />

      <div className="relative grid gap-4 sm:gap-5">
        <HeroPreviewMainCard />
        <HeroPreviewMiniCards />
      </div>
    </div>
  );
}
