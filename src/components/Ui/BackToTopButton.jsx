import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Back to top"
      className="
        fixed bottom-8 right-8 z-50
        w-12 h-12
        rounded-full
        bg-black/60 backdrop-blur-xl
        border border-white/20
        flex items-center justify-center
        text-white/80
        transition-all duration-300
        hover:text-yellow-300
        hover:border-yellow-300/60
        hover:shadow-[0_0_30px_rgba(250,204,21,0.25)]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-yellow-300/60
      "
    >
      ↑
    </button>
  );
}
