import { useMemo } from "react";
import { searchIndex } from "./searchIndex";
import { searchEngine } from "./searchEngine";

export function useSearch(query) {
  return useMemo(() => {
    return searchEngine(query, searchIndex);
  }, [query]);
}
