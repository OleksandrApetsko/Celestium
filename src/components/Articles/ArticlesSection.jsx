import { blogData } from "../../data/blogData.js";
import ArticleCard from "./ArticleCard.jsx";
import { Link } from "react-router-dom";

export default function ArticlesSection() {
  const preview = blogData.slice(0, 3); // тільки перші три статті

  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
            Featured Articles
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-semibold mt-2">
            Explore the Celestial Wisdom
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            A curated collection of insights and guides to help you understand the stars more deeply.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {preview.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              preview={article.preview}
              img={article.image}
            />
          ))}
        </div>

        {/* CTA to blog */}
        <div className="text-center mt-14">
          <Link
            to="/blog"
            className="
              inline-block px-10 py-3 rounded-full border border-yellow-300 text-yellow-300
              font-semibold tracking-wide hover:bg-yellow-300 hover:text-black transition
            "
          >
            View All Articles
          </Link>
        </div>

      </div>
    </section>
  );
}
