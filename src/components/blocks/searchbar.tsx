"use client";

import { Command, CommandInput, CommandList } from "@/components/ui/command";
import { SuggestionItem } from "@/components/ui/suggestionItem";
import { useMatchSearch } from "@/hooks/useMatchSearch";
import { FilterTypes } from "@/lib/types";
import { memo, useEffect, useRef, useState } from "react";

export const SearchBar = memo(function SearchBar({ className }: { className?: string }) {
  const [searchQuery, setSearchQuery] = useState("");
  const searchResult = useMatchSearch(searchQuery);
  const commandRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (commandRef.current && !commandRef.current.contains(event.target as Node)) {
        setSearchQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={className}>
      <Command ref={commandRef}>
        <CommandInput
          placeholder="Enter team name, map name or player name"
          value={searchQuery}
          onValueChange={setSearchQuery}
        />
        <CommandList>
          {searchResult.teamIndex && (
            <SuggestionItem index={searchResult.teamIndex} prefix={FilterTypes.TEAM} />
          )}
          {searchResult.playerIndex && (
            <SuggestionItem
              index={searchResult.playerIndex}
              prefix={FilterTypes.PLAYER}
            />
          )}
          {searchResult.mapIndex && (
            <SuggestionItem index={searchResult.mapIndex} prefix={FilterTypes.MAP} />
          )}
        </CommandList>
      </Command>
    </div>
  );
});
