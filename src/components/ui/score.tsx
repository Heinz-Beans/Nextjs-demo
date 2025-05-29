import { Match } from "@/lib/types";

export function Score({ result }: { result: Match["result"] }) {
  if(!result || !result.firstTeam || !result.secondTeam) {
    return null;
  }

  return (
    <div className="flex flex-col font-bold text-primary-light items-center justify-center text-9xl">
      <span>{`${result.firstTeam} - ${result.secondTeam}`}</span>
    </div>
  );
}
