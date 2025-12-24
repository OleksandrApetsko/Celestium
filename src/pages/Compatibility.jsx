import { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import CompatibilityForm from "../components/Compatibility/CompatibilityForm.jsx";
import CompatibilityPreview from "../components/Compatibility/CompatibilityPreview.jsx";
import CompatibilityFull from "../components/Compatibility/CompatibilityFull.jsx";
import HoroscopePaywall from "../components/Horoscope/HoroscopePaywall.jsx";
import compatibilityPreview from "../data/compatibility/compatibilityPreview.js";

import { useAccess } from "../hooks/useAccess.js";
import HoroscopeNext from '../components/Horoscope/HoroscopeNext.jsx'

function normalizeSlug(v) {
  return String(v || "").toLowerCase().trim();
}

export default function Compatibility() {
  const location = useLocation();
  const { hasAccess } = useAccess();

  const query = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const [signA, setSignA] = useState(() => normalizeSlug(query.get("signA")));
  const [signB, setSignB] = useState(() => normalizeSlug(query.get("signB")));

  useEffect(() => {
    setSignA(normalizeSlug(query.get("signA")));
    setSignB(normalizeSlug(query.get("signB")));
  }, [query]);

  const scope = useMemo(() => {
    if (!signA || !signB) return null;
    return `${signA}-${signB}`;
  }, [signA, signB]);

  const preview = useMemo(() => {
    if (!signA || !signB) return null;
    return (
      compatibilityPreview?.[signA]?.[signB] ??
      compatibilityPreview?.[signB]?.[signA] ??
      null
    );
  }, [signA, signB]);

  const hasFullAccess = useMemo(() => {
    if (!scope) return false;
    return hasAccess("premiumCompatibility", scope);
  }, [hasAccess, scope]);

  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* HERO */}
        <div className="text-center mb-16">
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.22em] text-yellow-300">
            COMPATIBILITY
          </h1>

          <p className="mt-6 text-white/70 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
            Choose two zodiac signs to see how their emotional rhythm, elemental
            nature, and relationship dynamics align. You’ll get a free snapshot,
            and you can unlock the full report for deeper insight.
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
            <CompatibilityPreview signA={signA} signB={signB} data={preview} />
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

      </div>
    </section>
  );
}
