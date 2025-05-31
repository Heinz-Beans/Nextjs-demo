"use client";

import { FilterTypes } from "@/lib/types";
import { useAppStore } from "@/stores/appStore";
import { memo } from "react";
import { CustomBadge } from "../ui/customBadge";

export const FilterTags = memo(function FilterTags() {
  const { filters, removeFilter } = useAppStore();

  return (
    <div className="flex gap-1 flex-wrap">
      {Object.keys(filters[FilterTypes.MAP] || {}).map((mapName, i) => (
        <CustomBadge
          text={`map:${mapName}`}
          key={i}
          onClick={() => removeFilter(FilterTypes.MAP, mapName)}
        />
      ))}
      {Object.keys(filters[FilterTypes.TEAM] || {}).map((teamName, i) => (
        <CustomBadge
          text={`team:${teamName}`}
          key={i}
          onClick={() => removeFilter(FilterTypes.TEAM, teamName)}
        />
      ))}
      {Object.keys(filters[FilterTypes.PLAYER] || {}).map((playerName, i) => (
        <CustomBadge
          text={`player:${playerName}`}
          key={i}
          onClick={() => removeFilter(FilterTypes.PLAYER, playerName)}
        />
      ))}
    </div>
  );
});
