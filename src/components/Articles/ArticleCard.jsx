export default function ArticleCard({ title, excerpt }) {
  return (
    <div
      className="
        group rounded-2xl bg-black/30 backdrop-blur-xl
        border border-white/10 transition-all duration-300 cursor-pointer
        hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]
        hover:border-yellow-400/40
      "
    >

      {/* GOLD HEADER STRIP */}
      <div className="h-2 w-full bg-gradient-to-r from-yellow-400/70 to-amber-500/70 group-hover:from-yellow-300 group-hover:to-amber-400 transition-all"></div>

      {/* CONTENT */}
      <div className="p-6">

        {/* TITLE */}
        <h3 className="text-xl text-white font-semibold group-hover:text-yellow-300 transition">
          {title}
        </h3>

        {/* EXCERPT */}
        <p className="text-white/70 text-sm mt-2 mb-4">
          {excerpt}
        </p>

        <button className="text-yellow-300 text-sm group-hover:text-white transition">
          Read More →
        </button>
      </div>
    </div>
  );
}
