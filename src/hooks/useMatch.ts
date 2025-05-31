import { getIndexes, getMatchDetail, getMatches } from "@/lib/mockApi"
import { useQuery } from "@tanstack/react-query"

export const useMatches = (filteredIds?: number[]) => {
  return useQuery({
    queryKey: filteredIds ? ["matches", filteredIds] : ["matches"],
    queryFn: () => getMatches(filteredIds),
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