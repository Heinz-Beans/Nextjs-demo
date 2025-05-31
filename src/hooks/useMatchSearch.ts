import { useAppStore } from "@/stores/appStore";
import FuzzySearch from "fuzzy-search";
import { useCallback, useMemo } from "react";
import { useIndexes } from "./useMatch";

export const useMatchSearch = (searchQuery: string) => {
  const { data } = useIndexes();
  const {filters} = useAppStore()

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

    let matchedTeamIndex =searchMatchedIndex(searchers.team, data?.teamIndex || {});
    let matchedPlayerIndex = searchMatchedIndex(searchers.player, data?.playerIndex || {});
    let matchedMapIndex = searchMatchedIndex(searchers.map, data?.mapIndex || {});

    // Remove results based on currently applied filters
    if (filters?.team) {
      matchedTeamIndex = Object.fromEntries(
        Object.entries(matchedTeamIndex).filter(([key]) => !(filters?.team?.[key]))
      );
    }
    if (filters?.player) {
      matchedPlayerIndex = Object.fromEntries(
        Object.entries(matchedPlayerIndex).filter(([key]) => !(filters?.player?.[key]))
      );
    }
    if (filters?.map) {
      matchedMapIndex = Object.fromEntries(
        Object.entries(matchedMapIndex).filter(([key]) => !(filters?.map?.[key]))
      );
    }

    return {
      teamIndex: matchedTeamIndex,
      playerIndex: matchedPlayerIndex,
      mapIndex: matchedMapIndex,
    };
  }, [searchQuery, data, searchers, searchMatchedIndex, filters]);

  return result;
}