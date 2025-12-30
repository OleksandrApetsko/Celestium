// src/components/Blog/RecommendedArticles.jsx

import { useMemo } from "react";
import { blogData } from "../../data/blog/blogData.js";
import BlogCard from "./BlogCard.jsx";

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function RecommendedArticles({ currentId }) {
  const recommended = useMemo(() => {
    return shuffle(
      blogData.filter(article => article.id !== currentId)
    ).slice(0, 3);
  }, [currentId]);

  if (recommended.length < 3) return null;

  return (
    <section className="mt-24 pt-12 border-t border-white/10">
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8 text-center">
        You may also like
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {recommended.map(article => (
          <div
            key={article.id}
            className="h-full transition-transform duration-300 hover:-translate-y-1
              [&>a]:h-full [&>a]:flex [&>a]:flex-col
              [&>a>div:last-child]:flex-1 [&>a>div:last-child]:flex [&>a>div:last-child]:flex-col
            "
          >
            <BlogCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
}
