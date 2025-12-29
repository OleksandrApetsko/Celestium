import CompatibilityForm from "../components/Compatibility/CompatibilityForm.jsx";
import CompatibilityPreview from "../components/Compatibility/CompatibilityPreview.jsx";
import CompatibilityFull from "../components/Compatibility/CompatibilityFull.jsx";
import HoroscopePaywall from "../components/Horoscope/HoroscopePaywall.jsx";
import HoroscopeNext from "../components/Horoscope/HoroscopeNext.jsx";

import useCompatibilityPage from "../hooks/useCompatibilityPage.js";

function normalizeSlug(v) {
  return String(v || "").toLowerCase().trim();
}

export default function Compatibility() {
  const {
    signA,
    signB,
    setSignA,
    setSignB,
    scope,
    preview,
    hasFullAccess
  } = useCompatibilityPage();

  return (
    <section className="pt-40 text-white relative">
      {/* HERO */}
      <div className="text-center mb-16">
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.22em] text-yellow-300">
          COMPATIBILITY
        </h1>

        <p className="mt-6 text-white/70 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
          Choose two zodiac signs to see how their emotional rhythm, elemental
          nature, and relationship dynamics align.
        </p>
      </div>

      {/* FORM */}
      <CompatibilityForm
        initialSignA={signA}
        initialSignB={signB}
        onCalculate={(a, b) => {
          setSignA(normalizeSlug(a));
          setSignB(normalizeSlug(b));
        }}
      />

      {/* PREVIEW */}
      {preview && (
        <div className="mt-16">
          <CompatibilityPreview
            signA={signA}
            signB={signB}
            data={preview}
          />
        </div>
      )}

      {/* PAYWALL */}
      {preview && !hasFullAccess && scope && (
        <div className="mt-20">
          <HoroscopePaywall period="compatibility" sign={scope} />
        </div>
      )}

      {/* FULL */}
      {hasFullAccess && signA && signB && (
        <div className="mt-20">
          <CompatibilityFull signA={signA} signB={signB} />
        </div>
      )}

      <HoroscopeNext period="compatibility" />
    </section>
  );
}
