// src/pages/Blog/BlogPost.jsx

import { useParams, Link } from "react-router-dom";
import { blogData } from "../../data/blog/blogData.js";
import BlogBackButton from "../../components/Blog/BlogBackButton.jsx";
import RecommendedArticles from "../../components/Blog/RecommendedArticles.jsx";

export default function BlogPost() {
  const { id } = useParams();

  // id в URL = рядок, id в blogData теж рядок → все збігається
  const article = blogData.find((p) => p.id === id);

  if (!article) {
    return (
      <section className="text-center text-white py-32">
        <h1 className="text-3xl font-semibold mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-yellow-300 underline">
          ← Back to all articles
        </Link>
      </section>
    );
  }

  return (
    <section className="relative z-10 py-20 px-6 max-w-5xl mx-auto">

      <h1 className="text-4xl md:text-5xl font-bold text-white text-center leading-tight mt-8">
        {article.title}
      </h1>

      <p className="text-white/60 text-center mt-3">{article.date}</p>

      {/* RESPONSIVE HERO IMAGE VIA background-image */}
      <div
        className="
          w-full
          max-w-4xl
          mx-auto
          mt-10
          rounded-2xl
          overflow-hidden
          border border-white/10
          shadow-[0_0_25px_rgba(255,225,130,0.35)]
          relative
        "
        style={{
          backgroundImage: `url(${article.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          aspectRatio: "16/9",
        }}
      />

      <article
        className="
          prose prose-invert max-w-3xl mx-auto mt-12
          text-lg leading-relaxed text-white/85
          prose-p:mb-6 prose-h2:text-yellow-300 prose-strong:text-yellow-200
        "
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <RecommendedArticles currentId={id} />

      <div className="mt-14 text-center">
        <BlogBackButton label="← Back to blog" />
      </div>
    </section>
  );
}
