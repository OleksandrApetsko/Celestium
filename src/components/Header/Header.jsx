import { useState, useEffect } from "react";
import TopBarDesktop from "./TopBarDesktop.jsx";
import NavBar from "./NavBar.jsx";
import MobileMenu from "./MobileMenu.jsx";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500

        ${scrolled
        ? "bg-black/30 backdrop-blur-sm shadow-[0_0_25px_rgba(0,0,0,0.25)]"
        : "bg-transparent backdrop-blur-0 shadow-none"}
      `}
    >
      <TopBarDesktop />
      <NavBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
