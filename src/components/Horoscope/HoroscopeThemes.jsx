export default function HoroscopeThemes({ themes }) {
  if (!Array.isArray(themes) || themes.length === 0) return null;

  return (
    <div className="w-full mb-20 grid md:grid-cols-3 gap-8">
      {themes.map((theme, index) => (
        <div
          key={`${theme.title}-${index}`}
          className="rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 p-8"
        >
          <p className="text-yellow-300 text-lg font-medium mb-3">
            {theme.title}
          </p>

          <p className="text-white/70 text-sm leading-relaxed">
            {theme.description}
          </p>
        </div>
      ))}
    </div>
  );
}
