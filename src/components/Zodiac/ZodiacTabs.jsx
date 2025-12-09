const tabs = ["daily", "weekly", "monthly", "yearly"];

export default function ZodiacTabs({ tab, setTab }) {
  return (
    <div className="flex justify-center gap-4 mt-16">
      {tabs.map(t => (
        <button
          key={t}
          onClick={() => setTab(t)}
          className={`
            px-5 py-2 text-sm uppercase tracking-wide transition rounded-full
            ${tab === t
            ? "bg-yellow-400 text-black font-semibold shadow-md"
            : "border border-yellow-400/40 text-yellow-300 hover:bg-yellow-400/20"}
          `}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
