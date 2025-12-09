// src/components/Blog/BlogBackButton.jsx

import { Link } from "react-router-dom";

export default function BlogBackButton({ label = "← Back to all articles" }) {
  return (
    <Link
      to="/blog"
      className="
        inline-block text-sm px-5 py-2 rounded-full
        border border-yellow-400/40 text-yellow-300
        hover:bg-yellow-400 hover:text-black
        transition-all duration-300 font-medium
      "
    >
      {label}
    </Link>
  );
}
