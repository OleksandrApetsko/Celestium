import { useState, useEffect } from "react";

export default function BirthChartLocationSelect({ value, onChange }) {
  const [query, setQuery] = useState(value || "");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // синхронізація зовнішнього value
  useEffect(() => {
    setQuery(value || "");
  }, [value]);

  // API-пошук міст
  useEffect(() => {
    if (!query || query.length < 2) {
      setResults([]);
      return;
    }

    setLoading(true);

    const controller = new AbortController();

    const timeoutId = setTimeout(async () => {
      try {
        const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}&addressdetails=1&limit=10`;

        const res = await fetch(url, {
          signal: controller.signal,
          headers: {
            "Accept-Language": "en",
          },
        });

        const data = await res.json();

        const formatted = data
          .filter((item) =>
            Boolean(
              item.address?.city ||
              item.address?.town ||
              item.address?.village
            )
          )
          .map((item) => {
            const city =
              item.address.city ||
              item.address.town ||
              item.address.village ||
              item.display_name.split(",")[0];

            const country = item.address.country || "";

            return {
              full: `${city}, ${country}`,
              lat: item.lat,
              lon: item.lon,
            };
          });

        setResults(formatted);
      } catch (err) {
        if (err.name !== "AbortError") console.error(err);
      } finally {
        setLoading(false);
      }
    }, 500); // debounce

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [query]);

  const handleSelect = (item) => {
    setQuery(item.full);
    onChange(item.full);
    setOpen(false);
  };

  return (
    <div className="relative">
      <label className="block text-white/80 mb-2">Place of Birth</label>

      {/* INPUT */}
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onChange(e.target.value);
          setOpen(true);
        }}
        onFocus={() => {
          if (query.length >= 2) setOpen(true);
        }}
        placeholder="Start typing a city..."
        className="
          w-full p-3 rounded-xl
          bg-black/40 border border-white/15
          text-white placeholder-white/40
          focus:border-yellow-300/40
          focus:outline-none transition
        "
      />

      {/* DROPDOWN */}
      {open && (loading || results.length > 0) && (
        <div
          className="
            absolute left-0 right-0 mt-2 rounded-xl z-50
            bg-black/85 backdrop-blur-xl border border-white/10
            max-h-64 overflow-auto shadow-[0_0_25px_rgba(0,0,0,0.4)]
          "
        >
          {loading && (
            <div className="px-4 py-3 text-white/60 text-sm">Searching…</div>
          )}

          {!loading &&
            results.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(item)}
                className="
                  px-4 py-3 cursor-pointer text-white text-sm
                  hover:bg-yellow-300/20 hover:text-yellow-300
                  transition
                "
              >
                {item.full}
              </div>
            ))}

          {!loading && results.length === 0 && (
            <div className="px-4 py-3 text-white/60 text-sm">
              No matching cities
            </div>
          )}
        </div>
      )}
    </div>
  );
}
