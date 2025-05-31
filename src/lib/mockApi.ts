import data from "../mock/data.json";
import { IndexType, Match } from "./types";

let matches: Match[] = [...data] as Match[];
matches = matches.map((match, index) => ({
  ...match,
  id: index,
}));

let indexesBuilt = false
let mapIndex:IndexType  = {}
let teamIndex:IndexType = {}
let playerIndex:IndexType = {}

const buildIndexes = () => {
  matches.forEach((match, i) => {
    const key = match.mapName;
    mapIndex[key] = mapIndex[key] || []
    mapIndex[key].push(i)

    const teams = [
      match.firstTeam.name,
      match.secondTeam.name,
      match.firstTeam.fullName,
      match.secondTeam.fullName,
    ].filter((t): t is string => !!t)

    teams.forEach(team => {
      teamIndex[team] = teamIndex[team] || []
      teamIndex[team].push(i)
    })

    const players = [...match.scoreboard.firstTeam, ...match.scoreboard.secondTeam]
    players.forEach(player => {
      const key = player.name
      playerIndex[key] = playerIndex[key] || []
      playerIndex[key].push(i)
    })
  })

  indexesBuilt = true
}

export async function getMatches(ids?: number[]): Promise<Match[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!ids || ids.length === 0) {
      resolve(matches);
      }
      else{
        const filteredMatches = matches.filter((_, index) => ids.includes(index));
        resolve(filteredMatches);
      }
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
    }, 250);
  });
}

export async function getIndexes() {
  if (!indexesBuilt) {
    buildIndexes();
  }
  return { mapIndex, teamIndex, playerIndex };
}
