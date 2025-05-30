"use client";

import { PlayerDetails } from "@/components/ui/playerDetails";
import { SortableHeader } from "@/components/ui/sortableHeader";
import { Player } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../../ui/hoverCard";

export const columns: ColumnDef<Player>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <SortableHeader column={column} label="Player" />,
    sortingFn: (rowA, rowB, columnId) => {
      const valueA = (rowA.getValue(columnId) as string).toLowerCase();
      const valueB = (rowB.getValue(columnId) as string).toLowerCase();
      return valueA.localeCompare(valueB);
    },
    cell: ({ row }) => {
      const player = row.original;
      return (
        <HoverCard>
          <HoverCardTrigger>
            <span className="cursor-pointer">{player.name}</span>
          </HoverCardTrigger>
          <HoverCardContent className="bg-grey-200">
            <PlayerDetails player={player} />
          </HoverCardContent>
        </HoverCard>
      );
    },
  },
  {
    accessorKey: "kills",
    header: ({ column }) => <SortableHeader column={column} label="Kills" />,
  },
  {
    accessorKey: "deaths",
    header: ({ column }) => <SortableHeader column={column} label="Deaths" />,
  },
  {
    accessorKey: "adr",
    header: ({ column }) => <SortableHeader column={column} label="ADR" />,
  },
];
