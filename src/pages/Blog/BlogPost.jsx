import { useParams, Link } from "react-router-dom";
import { blogData } from "../../data/blog/blogData.js";
import BlogBackButton from "../../components/Blog/BlogBackButton.jsx";
import RecommendedArticles from "../../components/Blog/RecommendedArticles.jsx";

export default function BlogPost() {
  const { id } = useParams();

  const article = blogData.find((p) => p.id === id);

  if (!article) {
    return (
      <section className="relative z-10 pt-32 pb-32 px-6 max-w-7xl mx-auto text-center text-white">
        <h1 className="text-3xl font-semibold mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-yellow-300 underline">
          ← Back to all articles
        </Link>
      </section>
    );
  }

  return (
    /* КРИТИЧНО: ВІДСТУП ВІД FIXED HEADER */
    <section className="relative z-10 pt-28 px-6 max-w-7xl mx-auto">

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-medium text-yellow-300 text-center leading-tight mb-14">
        {article.title}
      </h1>

      {/* HERO IMAGE — ТОЙ САМИЙ РИТМ */}
      <div
        className="
          w-full
          mt-8
          rounded-2xl
          overflow-hidden
          border border-white/10
          shadow-[0_0_25px_rgba(255,225,130,0.35)]
        "
        style={{
          backgroundImage: `url(${article.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          aspectRatio: "16/9",
        }}
      />

      {/* ARTICLE CARD */}
      <div
        className="
          w-full
          mt-8
          rounded-2xl
          border border-white/10
          bg-white/[0.08]
          backdrop-blur-sm
          shadow-[0_0_40px_rgba(0,0,0,0.4)]
        "
      >
        <article
          className="
            prose prose-invert
            max-w-none
            px-6 sm:px-10 lg:px-14
            py-10 sm:py-12
            text-lg
            leading-relaxed
            text-white/85

            [&_p]:my-0
            [&_p]:indent-3

            [&_h2]:mt-5
            [&_h2]:mb-3
            [&_h2]:text-yellow-300

            [&_p+_h2]:mt-5

            [&_strong]:text-yellow-200
          "
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>

      {/* RECOMMENDED */}
      <RecommendedArticles currentId={id} />

      {/* BACK */}
      <div className="mt-14 text-center">
        <BlogBackButton label="← Back to blog" />
      </div>
    </section>
  );
}
