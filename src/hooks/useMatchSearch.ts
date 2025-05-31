import FuzzySearch from "fuzzy-search";
import { useCallback, useMemo } from "react";
import { useIndexes } from "./useMatch";

export const useMatchSearch = (searchQuery: string) => {
  const { data } = useIndexes();

  const searchers = useMemo(() => {
    if (!data) return null;

    return {
      team: new FuzzySearch(Object.keys(data?.teamIndex || {}), undefined, {
        caseSensitive: false,
      }),
      player: new FuzzySearch(Object.keys(data?.playerIndex || {}), undefined, {
        caseSensitive: false,
      }),
      map: new FuzzySearch(Object.keys(data?.mapIndex || {}), undefined, {
        caseSensitive: false,
      }),
    };
  }, [data]);

  const searchMatchedIndex = useCallback(
    (searcher: FuzzySearch<string> | undefined, index: Record<string, number[]>) => {
      if (!searcher || !searchQuery) return {};
      const matchedKeys = searcher.search(searchQuery);
      return Object.fromEntries(matchedKeys.map((key) => [key, index[key]]));
    },
    [searchQuery]
  );

  const result = useMemo(() => {
    if (!searchQuery || !data || !searchers) return { team: {}, player: {}, map: {} };

    const matchedTeamIndex =searchMatchedIndex(searchers.team, data?.teamIndex || {});
    const matchedPlayerIndex = searchMatchedIndex(searchers.player, data?.playerIndex || {});
    const matchedMapIndex = searchMatchedIndex(searchers.map, data?.mapIndex || {});

    return {
      teamIndex: matchedTeamIndex,
      playerIndex: matchedPlayerIndex,
      mapIndex: matchedMapIndex,
    };
  }, [searchQuery, data, searchers, searchMatchedIndex]);

  return result;
}