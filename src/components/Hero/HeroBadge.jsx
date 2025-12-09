export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur">
      <span className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(255,220,120,0.9)]"/>
      <span className="text-xs uppercase tracking-[0.25em] text-white/70">
        Astrological Intelligence
      </span>
    </div>
  );
}
