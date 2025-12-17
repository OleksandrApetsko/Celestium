export default function ThemesList({ themes }) {
  return (
    <div className="max-w-3xl mx-auto mb-16">
      <h3 className="text-lg font-medium text-yellow-300 mb-6 text-center">
        Weekly Themes
      </h3>

      <ul className="grid sm:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <li
            key={theme}
            className="rounded-xl bg-black/30 border border-white/10 py-5 text-center text-white/80"
          >
            {theme}
          </li>
        ))}
      </ul>
    </div>
  );
}
