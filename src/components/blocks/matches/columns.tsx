import { Button } from "@/components/ui/button";
import { SortableHeader } from "@/components/ui/sortableHeader";
import { Match } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { ExternalLink } from "lucide-react";

export const columns: ColumnDef<Match>[] = [
  {
    accessorKey: "mapName",
    header: ({ column }) => <SortableHeader column={column} label="Map" />,
  },
  {
    accessorKey: "firstTeam.name",
    header: ({ column }) => <SortableHeader column={column} label="Team 1" />,
  },
  {
    accessorKey: "secondTeam.name",
    header: ({ column }) => <SortableHeader column={column} label="Team 2" />,
  },
  {
    accessorKey: "result",
    header: ({ column }) => <SortableHeader column={column} label="Result" />,
    cell: ({ row }) => {
      const result = row.original.result;
      if (!result || !result.firstTeam || !result.secondTeam) {
        return null;
      }
      return <span>{`${result.firstTeam} - ${result.secondTeam}`}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <Button variant="link" onClick={() => window.open(`/match/${row.index}`, "_blank")}>
        <ExternalLink className="text-white" size={16} />
      </Button>
    ),
  },
];
