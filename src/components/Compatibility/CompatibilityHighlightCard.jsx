export default function CompatibilityHighlightCard({ title, description }) {
  return (
    <div className="rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-8 text-center">
      <h3 className="text-yellow-300 text-sm uppercase tracking-wider mb-3">
        {title}
      </h3>

      <p className="text-white/70 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
