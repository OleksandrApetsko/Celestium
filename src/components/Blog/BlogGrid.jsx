import BlogCard from "./BlogCard.jsx";

export default function BlogGrid({ posts }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {posts.map((p) => <BlogCard key={p.id} article={p} />)}
    </div>
  );
}
