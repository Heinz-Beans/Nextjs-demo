import { Match as MatchType } from "../../lib/types";
import { TeamName } from "./teamname";

export function Match({match}: {match?: MatchType}) {
  if (!match) {
    return <div>Match not found</div>;
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col">
        <span className="p-2 text-yellow-200 bg-gray-800 font-bold">MAP</span>
        <span className="p-2 text-black bg-yellow-200 font-medium">{match.mapName}</span>
      </div>
      <div className="flex flex-row w-full">
        <div className="flex flex-col gap-2 basis-full">
          <TeamName team={match.firstTeam} />
          <div className="bg-gray-800 text-white h-[200px]">playerlist placeholder</div>
        </div>
        <div className="flex flex-col w-[100px] items-center">
          <span>13-8</span>
        </div>
        <div className="flex flex-col gap-2 basis-full">
          <TeamName team={match.secondTeam} />
          <div className="bg-gray-800 text-white h-[200px]">playerlist placeholder</div>
        </div>
      </div>
    </div>
  )
}