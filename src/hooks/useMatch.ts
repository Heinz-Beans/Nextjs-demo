import { getMatchDetail, getMatches } from "@/lib/mockApi"
import { Filter } from "@/lib/types"
import { useQuery } from "@tanstack/react-query"

export const useMatches = () => {
  return useQuery({
    queryKey: ["matches"],
    queryFn: () => getMatches(),
  })
}

export const useFilteredMatches = (filter: Filter) => {
  return useQuery({
    queryKey: ["matches", filter],
    queryFn: () => getMatches(filter),
    enabled: !!filter
  })
}

export const useMatchDetail = (matchId: number) => {
  return useQuery({
    queryKey: ["match", matchId],
    queryFn: () => getMatchDetail(matchId),
  })
}