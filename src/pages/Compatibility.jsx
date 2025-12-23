// src/pages/Compatibility.jsx

import { useMemo, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import CompatibilityForm from "../components/Compatibility/CompatibilityForm.jsx";
import CompatibilityPreview from "../components/Compatibility/CompatibilityPreview.jsx";
import CompatibilityFull from "../components/Compatibility/CompatibilityFull.jsx";
import HoroscopePaywall from "../components/Horoscope/HoroscopePaywall.jsx";

import compatibilityPreview from "../data/compatibility/compatibilityPreview.js";
import compatibilityFull from "../data/compatibility/compatibilityFull.js";

import { useAccess } from "../hooks/useAccess.js";

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

  // canonical: slugs only (aries, taurus...)
  const initialA = normalizeSlug(query.get("signA") || "");
  const initialB = normalizeSlug(query.get("signB") || "");

  const [signA, setSignA] = useState(initialA);
  const [signB, setSignB] = useState(initialB);

  // keep state in sync with query (direct link, back/forward)
  useEffect(() => {
    setSignA(initialA);
    setSignB(initialB);
  }, [initialA, initialB]);

  // scoped key for one-time purchases (SSOT): premiumCompatibility:<signA-signB>
  const scope = useMemo(() => {
    if (!signA || !signB) return null;
    return `${normalizeSlug(signA)}-${normalizeSlug(signB)}`;
  }, [signA, signB]);

  // data
  const preview = useMemo(() => {
    if (!signA || !signB) return null;
    return (
      compatibilityPreview?.[normalizeSlug(signA)]?.[normalizeSlug(signB)] ??
      compatibilityPreview?.[normalizeSlug(signB)]?.[normalizeSlug(signA)] ??
      null
    );
  }, [signA, signB]);

  const full = useMemo(() => {
    if (!signA || !signB) return null;
    return (
      compatibilityFull?.[normalizeSlug(signA)]?.[normalizeSlug(signB)] ??
      compatibilityFull?.[normalizeSlug(signB)]?.[normalizeSlug(signA)] ??
      null
    );
  }, [signA, signB]);

  // access:
  // - subscription: hasAccess() returns true for any productKey in your current useAccess
  // - one-time: MUST be scoped by pairKey
  const hasFullAccess = useMemo(() => {
    if (!scope) return false;
    return hasAccess("premiumCompatibility", scope);
  }, [hasAccess, scope]);

  return (
    <section className="relative z-10 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* HERO */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-yellow-300/90">
            Compatibility
          </span>

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
          onCalculate={(aSlug, bSlug) => {
            setSignA(normalizeSlug(aSlug));
            setSignB(normalizeSlug(bSlug));
          }}
        />

        {/* PREVIEW (FREE) */}
        {preview && (
          <div className="mt-16">
            <CompatibilityPreview signA={signA} signB={signB} data={preview} />
          </div>
        )}

        {/* PAYWALL (only if preview exists and no access) */}
        {preview && !hasFullAccess && scope && (
          <div className="mt-20">
            <HoroscopePaywall period="compatibility" sign={scope} />
          </div>
        )}

        {/* FULL (PAID) */}
        {hasFullAccess && full && (
          <div className="mt-20">
            <CompatibilityFull signA={signA} signB={signB} data={full} />
          </div>
        )}
      </div>
    </section>
  );
}
