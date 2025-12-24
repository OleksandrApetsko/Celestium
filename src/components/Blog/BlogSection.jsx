import Container from "../Ui/Container.jsx";
import { blogData } from "../../data/blog/blogData.js";
import BlogArticleCard from "./BlogArticleCard.jsx";
import { Link } from "react-router-dom";

export default function BlogSection() {
  const preview = blogData.slice(0, 3);

  return (
    <section className="relative z-10 py-16 md:py-24 lg:py-28">
      <Container>
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
            Featured Articles
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-2 text-white">
            Explore the Celestial Wisdom
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto mt-4">
            A curated collection of insights and guides to help you understand the stars more deeply.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {preview.map((article) => (
            <BlogArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              preview={article.preview}
              img={article.image}
            />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/blog"
            className="
              inline-block px-10 py-3 rounded-full
              border border-yellow-300 text-yellow-300
              font-semibold tracking-wide
              hover:bg-yellow-300 hover:text-black transition
            "
          >
            View All Articles
          </Link>
        </div>
      </Container>
    </section>
  );
}
