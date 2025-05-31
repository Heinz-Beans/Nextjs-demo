"use client";

import { FilterType, IndexType } from "@/lib/types";
import { useAppStore } from "@/stores/appStore";
import { memo, useCallback } from "react";
import { CommandItem } from "./command";

export const SuggestionItem = memo(function SuggestionItem({
  index,
  prefix = "team",
}: {
  index: IndexType;
  prefix?: FilterType;
}) {
  const { setFilter } = useAppStore();

  const addFilter = useCallback(
    (keyName: string, matchIndexes: number[]) => {
      setFilter(prefix, keyName, matchIndexes);
    },
    [prefix, setFilter]
  );

  return (
    <>
      {Object.entries(index).map(([keyName, matchIndexes], i) => (
        <CommandItem
          key={i}
          value={keyName}
          onSelect={() => addFilter(keyName, matchIndexes)}
        >
          {`${prefix}:${keyName}`}
        </CommandItem>
      ))}
    </>
  );
});
