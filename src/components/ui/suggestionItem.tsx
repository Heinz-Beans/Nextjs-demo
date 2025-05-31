import { IndexType } from "@/lib/mockApi";
import { memo } from "react";
import { CommandItem } from "./command";

export const SuggestionItem = memo(function SuggestionItem({
  index,
  prefix = "team",
}: {
  index: IndexType;
  prefix?: "team" | "player" | "map";
}) {
  //set filters into zustand store to avoid passing onselects //TODO
  return (
    <>
      {Object.entries(index).map(([keyName, matchIndexes], i) => (
        <CommandItem
          key={i}
          value={keyName}
          onSelect={() => {
            //TODO set into zustand store
            console.log(`Selected: ${keyName} with matches: ${matchIndexes}`);
          }}
        >
          {`${prefix}:${keyName}`}
        </CommandItem>
      ))}
    </>
  );
});
