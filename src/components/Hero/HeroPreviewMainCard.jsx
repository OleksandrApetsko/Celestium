export default function HeroPreviewMainCard() {
  return (
    <div className="
      rounded-2xl border border-white/10 bg-black/40
      backdrop-blur-xl p-5 sm:p-6
      shadow-[0_18px_45px_rgba(0,0,0,0.6)]
    ">
      <p className="text-xs uppercase tracking-[0.2em] text-yellow-300 mb-2">
        TODAY'S ENERGY
      </p>
      <p className="text-white text-lg sm:text-xl font-medium mb-2">
        Your cosmic weather forecast
      </p>
      <p className="text-sm text-white/70">
        See how current planetary transits shape your mood, focus, and
        interactions today.
      </p>
    </div>
  );
}
