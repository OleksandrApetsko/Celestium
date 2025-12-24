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
        w-14 h-14
        rounded-full
        bg-black/70 backdrop-blur-xl
        border border-yellow-300/70
        flex items-center justify-center
        text-yellow-300
        text-xl
        transition-all duration-300
        hover:bg-black/80
        hover:border-yellow-300
        hover:text-yellow-200
        hover:shadow-[0_0_40px_rgba(250,204,21,0.45)]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-yellow-300/70
      "
    >
      ↑
    </button>
  );
}
