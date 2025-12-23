// src/components/Blog/RecommendedArticles.jsx

import { blogData } from "../../data/blog/blogData.js";
import BlogCard from "./BlogCard.jsx";

export default function RecommendedArticles({ currentId }) {
  const recommended = blogData
    .filter((article) => article.id !== currentId)
    .slice(0, 2); // 2 рекомендовані статті

  if (!recommended.length) return null;

  return (
    <section className="mt-20">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
        Recommended articles
      </h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {recommended.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
