import { useEffect, useState } from "react";
import mobileBg from "../../assets/solar-mobile.png";
import desktopBg from "../../assets/solar-desktop.png";

export default function SolarBackground() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectedImage = isMobile ? mobileBg : desktopBg;

  return (
    <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden bg-black">

      {/* BLUR FILL (always covers screen fullscreen) */}
      <img
        src={selectedImage}
        alt="bg-fill"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          opacity-40
          blur-3xl
        "
      />

      {/* MAIN IMAGE */}
      <img
        src={selectedImage}
        alt="bg"
        className={`
          absolute inset-0
          w-full h-full
          pointer-events-none
          ${isMobile ? "object-contain" : "object-cover"}
        `}
      />

      {/* GRADIENT */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/10
          via-black/30
          to-black/60
          pointer-events-none
        "
      />
    </div>
  );
}
