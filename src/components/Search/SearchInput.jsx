import { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { buildSearchIndex } from "../../search/searchIndex.js";
import { searchEngine } from "../../search/searchEngine.js";

export default function SearchInput({
  placeholder = "Search...",
  onNavigate, // optional callback (e.g., close mobile menu)
  inputClassName = "",
  wrapperClassName = "",
  dropdownClassName = ""
}) {
  const navigate = useNavigate();
  const index = useMemo(() => buildSearchIndex(), []);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const results = useMemo(() => {
    return searchEngine(q, index, { limit: 8 });
  }, [q, index]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const trimmed = q.trim();
    if (!trimmed) return;
    setOpen(false);
    navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    if (onNavigate) onNavigate();
  };

  const go = () => {
    setOpen(false);
    setQ("");
    if (onNavigate) onNavigate();
  };

  return (
    <div ref={rootRef} className={`relative ${wrapperClassName}`}>
      <form onSubmit={submit}>
        <div
          className="
            flex items-center gap-2
            bg-black/40 border border-white/10
            rounded-full px-4 py-2
            focus-within:border-yellow-300
            transition
          "
        >
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            className="text-white/60"
          >
            <circle cx="7" cy="7" r="6" />
            <line x1="11.5" y1="11.5" x2="16" y2="16" />
          </svg>

          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className={`
              bg-transparent outline-none
              text-sm text-white
              placeholder-white/50
              w-full
              ${inputClassName}
            `}
          />
        </div>
      </form>

      {open && q.trim() && (
        <div
          className={`
            absolute top-full mt-2 w-full
            bg-black/95 backdrop-blur-xl
            border border-white/10 rounded-xl
            shadow-lg z-50 overflow-hidden
            ${dropdownClassName}
          `}
        >
          {results.length === 0 ? (
            <div className="px-4 py-4 text-sm text-white/60">
              No results found
            </div>
          ) : (
            <ul className="py-2">
              {results.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    onClick={go}
                    className="block px-4 py-3 text-sm text-white/80 hover:text-yellow-300 hover:bg-white/5 transition"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="truncate">{item.title}</span>
                      <span className="text-[11px] uppercase tracking-wider text-white/40 shrink-0">
                        {item.type}
                      </span>
                    </div>
                    {item.subtitle ? (
                      <div className="text-xs text-white/45 mt-1 truncate">
                        {item.subtitle}
                      </div>
                    ) : null}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}

          <div className="border-t border-white/10 px-4 py-3 text-xs text-white/50">
            Press <span className="text-white/70">Enter</span> to view all results
          </div>
        </div>
      )}
    </div>
  );
}
