// src/components/Horoscope/HoroscopeThemes.jsx

export default function HoroscopeThemes({ themes }) {
  if (!themes?.length) return null;

  return (
    <div className="w-full mb-20 grid md:grid-cols-3 gap-8">
      {themes.map((theme) => (
        <div
          key={theme}
          className="rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 p-8"
        >
          <p className="text-yellow-300 text-lg font-medium mb-3">{theme}</p>
          <p className="text-white/65 text-sm leading-relaxed">
            This theme plays a key role during this period.
          </p>
        </div>
      ))}
    </div>
  );
}
