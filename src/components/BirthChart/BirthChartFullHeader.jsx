export default function BirthChartFullHeader({ chart }) {
  const { date, time, location } = chart;

  return (
    <header className="text-center space-y-6">
      {/* META */}
      <p className="text-white/60 text-sm tracking-wide">
        {date} • {time} • {location}
      </p>

      {/* TITLE */}
      <h1
        className="
          text-4xl md:text-5xl lg:text-6xl
          font-light
          tracking-[0.22em]
          text-yellow-300
          drop-shadow-[0_0_28px_rgba(255,215,0,0.45)]
        "
      >
        NATAL CHART
      </h1>

      {/* SUBTITLE */}
      <p className="max-w-3xl mx-auto text-white/70 text-base md:text-lg leading-relaxed">
        This report reveals the structure behind your personality, emotional logic
        and life direction — based on your birth data and planetary patterns.
      </p>

      {/* SEPARATOR */}
      <div className="pt-8 flex justify-center">
        <div className="h-px w-40 bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />
      </div>
    </header>
  );
}
