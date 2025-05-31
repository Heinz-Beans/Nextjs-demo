import { getIndexes, getMatchDetail, getMatches, getMatchesByIds } from "@/lib/mockApi"
import { Filter } from "@/lib/types"
import { useQuery } from "@tanstack/react-query"

export const useMatches = () => {
  return useQuery({
    queryKey: ["matches"],
    queryFn: () => getMatches(),
  })
}

export const useFilteredMatches = (filter: Filter) => {
  const combinedIndexes = [...new Set([...filter.team, ...filter.map, ...filter.player])]

  return useQuery({
    queryKey: ["matches", filter],
    queryFn: () => getMatchesByIds(combinedIndexes),
  })
}

export const useMatchDetail = (matchId: number) => {
  return useQuery({
    queryKey: ["match", matchId],
    queryFn: () => getMatchDetail(matchId),
  })
}

export const useIndexes = () => {
  return useQuery({
    queryKey: ["indexes"],
    queryFn: () => getIndexes(),
  })
}