export default function HeroMeta() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:items-center pt-2 text-xs sm:text-sm text-white/60">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
        <span>Interpretations based on astrology — not automation.</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
        <span>Guidance meant for emotional clarity & decision timing.</span>
      </div>
    </div>
  );
}
