import { Filter, Match } from "./types";
import data from "../mock/data.json"

let matches: Record<number, any> = [...data] as Record<number, any>;
//TODO some type of indexing based on team names, player names, maps to speed up filtering


export async function getMatches(filter?: Filter) {
  //TODO implement filtering.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(matches);
    }, 250); //Simulate network delay
  });
}

export async function getMatchDetail({matchId}: {matchId: number}): Promise<Match | string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!matches[matchId]) {
        reject(`Match ${matchId} not found`);
      }

      resolve(matches[matchId]);
    }, 250); //Simulate network delay
  });
}