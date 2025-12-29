import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

import compatibilityPreview from "../data/compatibility/compatibilityPreview.js";
import { useAccess } from "./useAccess.js";

function normalizeSlug(value) {
  return String(value || "").toLowerCase().trim();
}

export default function useCompatibilityPage() {
  const location = useLocation();
  const { hasAccess } = useAccess();

  const query = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const [signA, setSignA] = useState(() =>
    normalizeSlug(query.get("signA"))
  );
  const [signB, setSignB] = useState(() =>
    normalizeSlug(query.get("signB"))
  );

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

  return {
    signA,
    signB,
    setSignA,
    setSignB,
    scope,
    preview,
    hasFullAccess
  };
}
