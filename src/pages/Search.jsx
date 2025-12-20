import { NavLink, useLocation } from "react-router-dom";
import { buildSearchIndex } from "../search/searchIndex.js";
import { searchEngine, getQueryFromLocationSearch } from "../search/searchEngine.js";
import SearchInput from "../components/Search/SearchInput.jsx";

export default function Search() {
  const location = useLocation();
  const query = getQueryFromLocationSearch(location.search);
  const index = buildSearchIndex();
  const results = searchEngine(query, index, { limit: 50 });

  return (
    <section className="relative z-10 py-20 md:py-24 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-yellow-300">
            Search
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mt-3">
            Find anything on Celestium
          </h1>

          <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Search pages, horoscopes, and zodiac sign insights.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-10">
          <SearchInput placeholder="Search..." />
        </div>

        <div className="text-white/60 text-sm mb-6 text-center">
          Query: <span className="text-white/80">{query || "—"}</span> · Results:{" "}
          <span className="text-white/80">{results.length}</span>
        </div>

        {results.length === 0 ? (
          <div className="text-center text-white/60">
            No results. Try another query.
          </div>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {results.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  className="
                    block p-6 rounded-2xl
                    bg-white/5 border border-white/10 backdrop-blur-xl
                    hover:border-yellow-300/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.18)]
                    transition
                  "
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-white text-lg font-medium">
                      {item.title}
                    </h3>
                    <span className="text-[11px] uppercase tracking-wider text-white/40">
                      {item.type}
                    </span>
                  </div>

                  {item.subtitle ? (
                    <p className="text-white/60 text-sm mt-2">
                      {item.subtitle}
                    </p>
                  ) : null}

                  <p className="text-yellow-300 text-xs mt-4">
                    Open →
                  </p>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
