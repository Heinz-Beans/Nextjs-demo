export type Match = {
  id: number;
  mapName: string;
  firstTeam: Team;
  secondTeam: Team;
  result: {
    firstTeam: number;
    secondTeam: number;
  };
  scoreboard: {
    firstTeam: Player[];
    secondTeam: Player[];
  };
};

export type Player = {
  avatar?: string;
  bio?: string;
  name: string;
  kills: number;
  deaths: number;
  adr: number;
};

export type Team = {
  name: string;
  fullName?: string;
  logo?: string;
};

export type IndexType = Record<string, number[]>;

export type FilterObj = {
  team: number[];
  player: number[];
  map: number[];
};

export const FilterTypes = Object.freeze({
	TEAM: 'team',
  PLAYER: 'player',
  MAP: 'map',
});

export type FilterType = (typeof FilterTypes)[keyof typeof FilterTypes];
