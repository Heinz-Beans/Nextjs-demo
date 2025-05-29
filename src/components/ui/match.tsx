import { Match as MatchType } from "../../lib/types";
import { MapName } from "./mapName";
import { columns } from "./players/columns";
import PlayerTable from "./players/playerTable";
import { Score } from "./score";
import { TeamName } from "./teamName";

export function Match({ match }: { match?: MatchType }) {
  if (!match) {
    return <div>Match not found</div>;
  }

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <Score result={match.result} />
      <div className="flex flex-row gap-4 w-full">
        <div className="flex flex-col gap-8 basis-full">
          <TeamName team={match.firstTeam} />
          <div className="from-grey-400 bg-(image:--gradient-green-strip-r) bg-grey-400 text-white">
            <PlayerTable columns={columns} data={match.scoreboard.firstTeam} />
          </div>
        </div>
        <MapName mapName={match.mapName} />
        <div className="flex flex-col gap-8 basis-full">
          <TeamName team={match.secondTeam} reverse />
          <div className=" from-grey-400 bg-(image:--gradient-green-strip-l) bg-grey-400 text-white">
            <PlayerTable columns={columns} data={match.scoreboard.secondTeam} />
          </div>
        </div>
      </div>
    </div>
  );
}
