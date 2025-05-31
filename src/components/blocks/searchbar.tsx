"use client";

import { Command, CommandInput, CommandList } from "@/components/ui/command";
import { SuggestionItem } from "@/components/ui/suggestionItem";
import { useMatchSearch } from "@/hooks/useMatchSearch";
import { memo, useState } from "react";

export const SearchBar = memo(function SearchBar({ className }: { className?: string }) {
  const [searchQuery, setSearchQuery] = useState("");
  const searchResult = useMatchSearch(searchQuery);

  return (
    <div className={className}>
      <Command>
        <CommandInput
          placeholder="Enter team name, map name or player name"
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          {searchResult.teamIndex && (
            <SuggestionItem index={searchResult.teamIndex} prefix="team" />
          )}
          {searchResult.playerIndex && (
            <SuggestionItem index={searchResult.playerIndex} prefix="player" />
          )}
          {searchResult.mapIndex && (
            <SuggestionItem index={searchResult.mapIndex} prefix="map" />
          )}
        </CommandList>
      </Command>
    </div>
  );
});
