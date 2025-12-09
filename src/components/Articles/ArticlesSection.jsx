import { articlesData } from "./articlesData.js";
import ArticleCard from "./ArticleCard.jsx";

export default function ArticlesSection() {
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
          {articlesData.map((article, i) => (
            <ArticleCard
              key={i}
              title={article.title}
              excerpt={article.excerpt}
              img={article.img}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
