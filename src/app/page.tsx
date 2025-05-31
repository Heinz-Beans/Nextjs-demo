import { Match } from "@/components/blocks/match";
import { MatchesTable } from "@/components/blocks/matches/matchesTable";
import { SearchBar } from "@/components/blocks/matches/searchbar";

export default async function Home() {
  return (
    <div className="text-white p-20">
      <SearchBar />
      <MatchesTable />
      <div className="my-10 bg-(image:--gradient-divider) h-[10px]" />
      <Match />
    </div>
  );
}
