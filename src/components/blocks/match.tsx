"use client";

import { useMatchDetail } from "@/hooks/useMatch";
import { useAppStore } from "@/stores/appStore";
import { memo } from "react";
import { LoadingSpinner } from "../ui/loadingSpinner";
import { MapName } from "../ui/mapName";
import { Score } from "../ui/score";
import { TeamName } from "../ui/teamName";
import { columns } from "./players/columns";
import { PlayerTable } from "./players/playerTable";

export const Match = memo(function Match({ matchId }: { matchId?: number }) {
  const { selectedMatchId } = useAppStore();
  const { data: match, isLoading, error } = useMatchDetail(matchId || selectedMatchId);

  if (isLoading) {
    return <LoadingSpinner className="flex justify-center h-[490px] p-15" />;
  }

  if (!match || error) {
    return (
      <span className="text-error-main bold sm:text-4xl text-l">Match not found</span>
    );
  }

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <Score result={match.result} />
      <div className="flex lg:flex-row flex-col gap-4 w-full">
        <div className="flex flex-col sm:gap-8 gap-2 basis-full">
          <TeamName team={match.firstTeam} />
          <div className="from-grey-400 bg-(image:--gradient-green-strip-r) bg-grey-400 text-white">
            <PlayerTable columns={columns} data={match.scoreboard.firstTeam} />
          </div>
        </div>
        <MapName mapName={match.mapName} />
        <div className="flex flex-col sm:gap-8 gap-2 basis-full">
          <TeamName team={match.secondTeam} reverse />
          <div className=" from-grey-400 bg-(image:--gradient-green-strip-l) bg-grey-400 text-white">
            <PlayerTable columns={columns} data={match.scoreboard.secondTeam} />
          </div>
        </div>
      </div>
    </div>
  );
});
