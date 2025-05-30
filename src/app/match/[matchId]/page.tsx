import { Match } from "@/components/blocks/match";

async function MatchDetailPage({ params }: { params: Promise<{ matchId: string }> }) {
  const { matchId } = await params;

  if (!matchId || isNaN(parseInt(matchId))) {
    return <div>Match ID is required</div>;
  }

  return (
    <div className="flex items-center w-full flex-col p-20">
      <Match matchId={parseInt(matchId)} />
    </div>
  );
}
export default MatchDetailPage;
