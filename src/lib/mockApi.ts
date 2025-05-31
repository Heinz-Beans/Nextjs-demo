import data from "../mock/data.json";
import { Match } from "./types";

const matches: Match[] = [...data] as Match[];

type Index = Record<string, number[]>;

let indexesBuilt = false
let mapIndex:Index  = {}
let teamIndex:Index = {}
let playerIndex:Index = {}

const buildIndexes = () => {
  matches.forEach((match, i) => {
    const map = match.mapName.toLowerCase()
    mapIndex[map] = mapIndex[map] || []
    mapIndex[map].push(i)

    const teams = [
      match.firstTeam.name,
      match.secondTeam.name,
      match.firstTeam.fullName,
      match.secondTeam.fullName,
    ].filter((t): t is string => !!t)

    teams.forEach(team => {
      const key = team.toLowerCase()
      teamIndex[key] = teamIndex[key] || []
      teamIndex[key].push(i)
    })

    const players = [...match.scoreboard.firstTeam, ...match.scoreboard.secondTeam]
    players.forEach(player => {
      const key = player.name.toLowerCase()
      playerIndex[key] = playerIndex[key] || []
      playerIndex[key].push(i)
    })
  })

  indexesBuilt = true
}

export async function getMatches(): Promise<Match[]> {
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
    }, 250);
  });
}

export async function getMatchesByIds(ids: number[]): Promise<Match[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredMatches = matches.filter((_, index) => ids.includes(index));
      resolve(filteredMatches);
    }, 250);
  });
}

export async function getIndexes() {
  if (!indexesBuilt) {
    buildIndexes();
  }
  return { mapIndex, teamIndex, playerIndex };
}
