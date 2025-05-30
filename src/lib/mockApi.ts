import { Filter, Match } from "./types";
import data from "../mock/data.json";

const matches: Match[] = [...data] as Match[];
//TODO some type of indexing based on team names, player names, maps to speed up filtering

export async function getMatches(filter?: Filter): Promise<Match[]> {
  //TODO implement filtering.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(matches);
    }, 250); //Simulate network delay
  });
}

export async function getMatchDetail(matchId: number): Promise<Match> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!matches[matchId]) {
        reject(`Match ${matchId} not found`);
      }

      resolve(matches[matchId]);
    }, 250); //Simulate network delay
  });
}
