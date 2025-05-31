import { FilterTags } from "@/components/blocks/filterTags";
import { Match } from "@/components/blocks/match";
import { MatchesTable } from "@/components/blocks/matches/matchesTable";
import { SearchBar } from "@/components/blocks/searchbar";

export default async function Home() {
  return (
    <div className="text-white sm:p-20 p-4">
      <div className="sm:w-2/3 w-3/4 mx-auto h-[44px] flex items-end">
        <FilterTags />
      </div>
      <div className="py-5 sm:w-2/3 w-3/4 mx-auto relative my-2">
        <SearchBar className="absolute z-10 w-full top-0" />
      </div>
      <MatchesTable />
      <div className="my-10 bg-(image:--gradient-divider) h-[10px]" />
      <Match />
    </div>
  );
}
