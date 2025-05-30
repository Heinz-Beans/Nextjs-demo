import { Match } from "@/components/blocks/match";
import { columns } from "@/components/blocks/matches/columns";
import MatchesTable from "@/components/blocks/matches/matchesTable";
import { getMatches } from "@/lib/data";
import { Match as MatchType } from "@/lib/types";
import Link from "next/link";

export default async function Home() {
  const data: MatchType[] = await getMatches();
  const selectedMatch = 1; //TODO temp
  console.log("data :>> ", data);

  return (
    <div className="text-white p-20">
      <div>smart searchbar with filter bubbles</div>
      <div>simple search from tanstack table</div>
      <div>
        <MatchesTable data={data} columns={columns} />
      </div>
      <div className="my-10 bg-(image:--gradient-divider) h-[10px]" />
      <div>
        <Match match={data[selectedMatch]} />
      </div>
    </div>
  );
}
