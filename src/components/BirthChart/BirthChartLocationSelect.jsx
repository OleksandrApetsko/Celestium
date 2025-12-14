// src/components/BirthChart/BirthChartLocationSelect.jsx

import { useEffect, useMemo, useRef, useState } from "react";

const CACHE_LIMIT = 50;

// Nominatim може інколи блокувати браузерні запити.
// Ми робимо компонент так, щоб:
// - не було вічного "Searching..."
// - був error state + manual fallback
// - кешували результати
// - був таймаут запиту

export default function BirthChartLocationSelect({ value, onChange }) {
  const [query, setQuery] = useState(value || "");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const abortRef = useRef(null);
  const cacheRef = useRef(new Map()); // query -> results array

  const normalizedQuery = useMemo(() => query.trim(), [query]);

  useEffect(() => {
    setQuery(value || "");
  }, [value]);

  useEffect(() => {
    setError("");

    if (!normalizedQuery || normalizedQuery.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }

    // Cache hit
    const cacheHit = cacheRef.current.get(normalizedQuery.toLowerCase());
    if (cacheHit) {
      setResults(cacheHit);
      setLoading(false);
      return;
    }

    const debounceId = setTimeout(async () => {
      if (abortRef.current) abortRef.current.abort();

      const controller = new AbortController();
      abortRef.current = controller;

      setLoading(true);

      const timeoutId = setTimeout(() => controller.abort(), 4500);

      try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&limit=8&q=${encodeURIComponent(
          normalizedQuery
        )}`;

        const res = await fetch(url, {
          signal: controller.signal,
          headers: {
            "Accept-Language": "en",
          },
        });

        if (!res.ok) throw new Error("Provider unavailable");

        const data = await res.json();

        const parsed = (Array.isArray(data) ? data : [])
          .map((item) => {
            const name = String(item?.display_name || "");
            if (!name) return null;

            const parts = name.split(",").map((p) => p.trim()).filter(Boolean);
            if (parts.length < 2) return null;

            const city = parts[0];
            const country = parts[parts.length - 1];

            return {
              label: `${city}, ${country}`,
            };
          })
          .filter(Boolean);

        setResults(parsed);

        // cache store
        const key = normalizedQuery.toLowerCase();
        cacheRef.current.set(key, parsed);

        // cache eviction (simple)
        if (cacheRef.current.size > CACHE_LIMIT) {
          const firstKey = cacheRef.current.keys().next().value;
          cacheRef.current.delete(firstKey);
        }
      } catch (err) {
        if (err?.name !== "AbortError") {
          setResults([]);
          setError(
            "Search is temporarily unavailable. You can still enter the city manually."
          );
        }
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    }, 450);

    return () => clearTimeout(debounceId);
  }, [normalizedQuery]);

  const selectCity = (label) => {
    setQuery(label);
    onChange(label);
    setOpen(false);
  };

  return (
    <div className="relative">
      <label className="block text-white/80 mb-2">Place of Birth</label>

      <input
        type="text"
        value={query}
        onChange={(e) => {
          const v = e.target.value;
          setQuery(v);
          onChange(v);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder="Start typing a city (e.g. Paris, Tokyo, New York)"
        className="
          w-full px-4 py-3 rounded-xl
          bg-black/40 border border-white/15
          text-white placeholder-white/40
          focus:border-yellow-300/40 focus:outline-none
          transition
        "
      />

      {error && (
        <p className="mt-2 text-white/55 text-xs leading-relaxed">{error}</p>
      )}

      {open && (loading || results.length > 0) && (
        <div
          className="
            absolute left-0 right-0 mt-2 z-50
            rounded-xl
            bg-black/90 backdrop-blur-xl
            border border-white/10
            shadow-[0_0_28px_rgba(0,0,0,0.5)]
            max-h-64 overflow-auto
          "
        >
          {loading && (
            <div className="px-4 py-3 text-sm text-white/60">Searching…</div>
          )}

          {!loading &&
            results.map((item, i) => (
              <div
                key={`${item.label}-${i}`}
                onClick={() => selectCity(item.label)}
                className="
                  px-4 py-3 cursor-pointer text-sm text-white
                  hover:bg-yellow-300/20 hover:text-yellow-300
                  transition
                "
              >
                {item.label}
              </div>
            ))}

          {!loading && results.length === 0 && normalizedQuery.length >= 2 && (
            <div className="px-4 py-3 text-sm text-white/55">
              No matches found. You can keep typing and enter manually.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
