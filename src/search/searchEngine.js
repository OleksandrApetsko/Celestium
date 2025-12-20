// src/search/searchEngine.js

function normalize(str) {
  return (str || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(str) {
  const n = normalize(str);
  return n ? n.split(" ") : [];
}

function scoreItem(queryTokens, item) {
  const hay = normalize([item.title, item.subtitle, ...(item.keywords || [])].join(" "));

  if (!hay) return 0;

  let score = 0;

  // Strong boost if full query appears
  const fullQuery = queryTokens.join(" ");
  if (fullQuery && hay.includes(fullQuery)) score += 30;

  for (const t of queryTokens) {
    if (!t) continue;
    if (hay === t) score += 40;
    if (hay.startsWith(t)) score += 20;
    if (hay.includes(` ${t} `)) score += 18;
    if (hay.includes(t)) score += 10;
  }

  // Type boosts
  if (item.type === "zodiac") score += 2;
  if (item.type === "horoscope") score += 3;
  if (item.type === "page") score += 1;

  return score;
}

export function searchEngine(query, index, { limit = 12 } = {}) {
  const tokens = tokenize(query);
  if (!tokens.length) return [];

  const results = index
    .map((item) => {
      const s = scoreItem(tokens, item);
      return s > 0 ? { ...item, _score: s } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b._score - a._score);

  return results.slice(0, limit);
}

export function getQueryFromLocationSearch(search) {
  try {
    const q = new URLSearchParams(search).get("q") || "";
    return q;
  } catch {
    return "";
  }
}
