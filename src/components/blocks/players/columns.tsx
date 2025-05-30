"use client";

import { Player } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { SortableHeader } from "@/components/ui/sortableHeader";

export const columns: ColumnDef<Player>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <SortableHeader column={column} label="Player" />,
    sortingFn: (rowA, rowB, columnId) => {
      const valueA = (rowA.getValue(columnId) as string).toLowerCase();
      const valueB = (rowB.getValue(columnId) as string).toLowerCase();
      return valueA.localeCompare(valueB);
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
