import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useHashScroll({
  hash,
  offset = 0,
  behavior = "smooth"
}) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === hash) {
      requestAnimationFrame(() => {
        const id = hash.replace("#", "");
        const section = document.getElementById(id);

        if (!section) return;

        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior
        });
      });
    }
  }, [location, hash, offset, behavior]);
}
