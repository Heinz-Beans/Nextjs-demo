import { Match } from "@/components/blocks/match";
import MatchesTable from "@/components/blocks/matches/matchesTable";

export default async function Home() {
  return (
    <div className="text-white p-20">
      <div>smart searchbar with filter bubbles</div>
      <div>simple search from tanstack table</div>
      <div>
        <MatchesTable />
      </div>
      <div className="my-10 bg-(image:--gradient-divider) h-[10px]" />
      <div>
        <Match />
      </div>
    </div>
  );
}
