// src/components/Blog/BlogCard.jsx

import { Link } from "react-router-dom";

export default function BlogCard({ article }) {
  return (
    <Link
      to={`/blog/${article.id}`}
      className="
        block rounded-2xl bg-black/30 backdrop-blur-xl
        border border-white/10 overflow-hidden
        hover:border-yellow-300/60 hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* ЄДИНІ ПРОПОРЦІЇ ПРЕВ'Ю */}
      <div className="w-full aspect-[16/9] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <p className="text-xs text-white/50 mb-1">{article.date}</p>
        <h3 className="text-lg sm:text-xl text-white font-semibold mb-2">
          {article.title}
        </h3>
        <p className="text-white/70 text-sm">
          {article.preview}
        </p>
      </div>
    </Link>
  );
}
