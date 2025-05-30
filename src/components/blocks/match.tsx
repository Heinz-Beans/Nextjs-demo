"use client";

import { MapName } from "../ui/mapName";
import { columns } from "./players/columns";
import PlayerTable from "./players/playerTable";
import { Score } from "../ui/score";
import { TeamName } from "../ui/teamName";
import { useAppStore } from "@/stores/appStore";
import { getMatchDetail } from "@/lib/data";
import { Match as MatchType } from "@/lib/types";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../ui/loadingSpinner";

export function Match({ matchId }: { matchId?: number }) {
  const { selectedMatchId } = useAppStore();
  const [match, setMatch] = useState<MatchType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await getMatchDetail({ matchId: matchId || selectedMatchId });
        setMatch(result as MatchType);
      } catch (error) {
        console.error("Error fetching match detail:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedMatchId]);

  if (loading) {
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
