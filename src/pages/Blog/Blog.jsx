import { blogData } from "../../data/blog/blogData.js";
import BlogCard from "../../components/Blog/BlogCard.jsx";
import HoroscopeNext from "../../components/Horoscope/HoroscopeNext.jsx";

export default function Blog() {
  return (
    <section className="relative z-10 pt-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
          Celestium Blog
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
          Cosmic Insights & Astrology Guides
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
          Explore in-depth articles about astrology, timing, compatibility and
          the subtle ways the cosmos reflects your inner world.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogData.map((article) => (
          <BlogCard key={article.id} article={article} />
        ))}
      </div>

      <HoroscopeNext period="premium" />
    </section>
  );
}
