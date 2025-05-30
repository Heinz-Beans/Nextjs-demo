"use client";

import { useMatchDetail } from "@/hooks/useMatch";
import { useAppStore } from "@/stores/appStore";
import { LoadingSpinner } from "../ui/loadingSpinner";
import { MapName } from "../ui/mapName";
import { Score } from "../ui/score";
import { TeamName } from "../ui/teamName";
import { columns } from "./players/columns";
import PlayerTable from "./players/playerTable";

export function Match({ matchId }: { matchId?: number }) {
  const { selectedMatchId } = useAppStore();

  const { data: match, isLoading, error } = useMatchDetail(matchId || selectedMatchId);

  if (isLoading) {
    return <LoadingSpinner className="flex justify-center h-[490px] p-15" />;
  }

  if (!match) {
    return <span className="text-error-main bold text-6xl">Match not found</span>;
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
