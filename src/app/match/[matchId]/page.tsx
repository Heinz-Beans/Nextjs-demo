import { Match } from "@/components/blocks/match";

async function MatchDetailPage({ params }: { params: Promise<{ matchId: string }> }) {
  const { matchId } = await params;

  if (!matchId || isNaN(parseInt(matchId))) {
    return (
      <span className="flex justify-center text-error-main text-bold sm:text-4xl text-l p-20">
        Match ID is required
      </span>
    );
  }

  return (
    <div className="flex items-center w-full flex-col sm:p-20 p-5">
      <Match matchId={parseInt(matchId)} />
    </div>
  );
}
export default MatchDetailPage;
