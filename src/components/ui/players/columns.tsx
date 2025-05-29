"use client";

import { ArrowUp, ArrowDown } from "lucide-react";
import { Player } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../button";

export const columns: ColumnDef<Player>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <span className="flex items-center gap-2">
          Player
          {column.getIsSorted() === "asc" ? <ArrowUp className="w-[16px]" /> : column.getIsSorted() === "desc" ? <ArrowDown className="w-[16px]" /> : <div className="w-[16px]" />}
        </span>
      </button>
    ),
  },
  {
    accessorKey: "kills",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <span className="flex items-center gap-2">
          Kills
          {column.getIsSorted() === "asc" ? <ArrowUp className="w-[16px]" /> : column.getIsSorted() === "desc" ? <ArrowDown className="w-[16px]" /> : <div className="w-[16px]" />}
        </span>
      </button>
    ),
  },
  {
    accessorKey: "deaths",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <span className="flex items-center gap-2">
          Deaths
          {column.getIsSorted() === "asc" ? <ArrowUp className="w-[16px]" /> : column.getIsSorted() === "desc" ? <ArrowDown className="w-[16px]" /> : <div className="w-[16px]" />}
        </span>
      </button>
    ),
  },
  {
    accessorKey: "adr",
    header: ({ column }) => (
      <button onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        <span className="flex items-center gap-2">
          ADR
          {column.getIsSorted() === "asc" ? <ArrowUp className="w-[16px]" /> : column.getIsSorted() === "desc" ? <ArrowDown className="w-[16px]" /> : <div className="w-[16px]" />}
        </span>
      </button>
    ),
  },
];
