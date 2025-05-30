export type Match = {
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

export type Filter = {
  team: string;
  player: string;
  map: string;
};
