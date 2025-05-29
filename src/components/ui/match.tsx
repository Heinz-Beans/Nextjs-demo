import { Match as MatchType } from "../../lib/types";
import { MapName } from "./mapName";
import { Score } from "./score";
import { TeamName } from "./teamName";

export function Match({match}: {match?: MatchType}) {
  if (!match) {
    return <div>Match not found</div>;
  }

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <Score result={match.result} />
      <div className="flex flex-row gap-4 w-full">
        <div className="flex flex-col gap-8 basis-full">
          <TeamName team={match.firstTeam} />
          <div className="from-grey-400 bg-(image:--gradient-green-strip-r) drop-shadow bg-grey-400 text-white h-[200px]">playerlist placeholder</div>
        </div>
        <MapName mapName={match.mapName} />
        <div className="flex flex-col gap-8 basis-full">
          <TeamName team={match.secondTeam} reverse/>
          <div className=" from-grey-400 bg-(image:--gradient-green-strip-l) drop-shadow bg-grey-400 text-white h-[200px]">playerlist placeholder</div>
        </div>
      </div>
    </div>
  )
}