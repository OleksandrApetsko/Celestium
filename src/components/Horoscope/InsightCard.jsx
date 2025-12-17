export default function InsightCard({ headline, summary, label }) {
  return (
    <div className="max-w-3xl mx-auto mb-16 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-8 sm:p-10 text-center">
      <p className="text-yellow-300 uppercase tracking-[0.25em] text-xs mb-4">
        {label}
      </p>

      <h2 className="text-2xl sm:text-3xl font-medium text-white mb-6">
        {headline}
      </h2>

      <p className="text-white/75 text-base sm:text-lg leading-relaxed">
        {summary}
      </p>
    </div>
  );
}
