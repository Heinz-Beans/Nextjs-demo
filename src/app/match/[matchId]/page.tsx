import { Match } from "@/components/ui/match";
import { getMatchDetail } from "@/lib/data";
import { Match as MatchType } from "@/lib/types";
import Link from "next/link";

async function MatchDetailPage({params}: {params: Promise<{matchId: string}>}) {
  const {matchId} = await params;
  let match:MatchType|undefined;

  if (!matchId || isNaN(parseInt(matchId))) { //TODO no ID is handled as 404, fix this
    return <div>Match ID is required</div>;
  }

  try {
    const result = await getMatchDetail({matchId: parseInt(matchId)});
    match = result as MatchType;
  }
  catch (error) {
    console.error('Error fetching match detail:', error);
  }

  return (
    <div className="flex items-center w-full flex-col p-20 bg-secondary-main h-screen">
      <Match match={match} />
      <Link href="/">
        <span>Back to home</span>
      </Link>
    </div>
  );
}
export default MatchDetailPage;