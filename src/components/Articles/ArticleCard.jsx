import { Link } from "react-router-dom";

export default function ArticleCard({ id, title, preview, img }) {
  return (
    <div
      className="
        group rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10
        transition-all duration-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)]
        hover:border-yellow-400/40
      "
    >
      {/* IMAGE COVER */}
      <div className="h-44 w-full overflow-hidden rounded-t-2xl">
        <img src={img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl text-white font-semibold group-hover:text-yellow-300 transition">
          {title}
        </h3>

        <p className="text-white/60 text-sm mt-2 mb-5 leading-relaxed">
          {preview}
        </p>

        <Link
          to={`/blog/${id}`}
          className="text-yellow-300 text-sm font-medium group-hover:text-white transition"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
