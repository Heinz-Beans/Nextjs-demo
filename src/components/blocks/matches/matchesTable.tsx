"use client";

import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMatches } from "@/hooks/useMatch";
import { useAppStore } from "@/stores/appStore";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { memo, useCallback, useMemo, useState } from "react";
import { columns } from "./columns";

export const MatchesTable = memo(function MatchesTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { selectedMatchId, setSelectedMatchId, filters } = useAppStore();

  const setMatchCb = useCallback(
    (index: number) => {
      setSelectedMatchId(index);
    },
    [setSelectedMatchId]
  );

  const combinedIds = useMemo(() => {
    if (!filters) {
      return undefined;
    }
    const { map, team, player } = filters;
    const allIds = [
      ...Object.values(map || {}),
      ...Object.values(team || {}),
      ...Object.values(player || {}),
    ];

    return [...new Set(allIds.flat())];
  }, [filters]);

  const { data, isLoading, error } = useMatches(combinedIds);

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  });

  if (isLoading) {
    return <LoadingSpinner className="flex justify-center p-15 h-[342px]" />;
  }
  if (error) {
    return (
      <span className="text-error-main bold text-4xl text-center">
        Error loading matches
      </span>
    );
  }

  if (!data || data.length === 0) {
    return <span className="text-error-main bold text-4xl text-center">No matches</span>;
  }

  return (
    <div className="w-full min-h-[342px]">
      <Table>
        <TableHeader className="bg-(image:--gradient-primary-main)">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="text-primary-contrast-text">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              className={row.original.id === selectedMatchId ? "bg-grey-500" : ""}
              onClick={() => setMatchCb(row.original.id)}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </Button>
        <span>{`${
          table.getState().pagination.pageIndex + 1
        }/${table.getPageCount()}`}</span>
        <Select
          value={String(table.getState().pagination.pageSize)}
          onValueChange={(value) => table.setPageSize(Number(value))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Show 5" />
          </SelectTrigger>
          <SelectContent>
            {[5, 10, 20, 50].map((size) => (
              <SelectItem key={size} value={size.toString()}>
                Show {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
});
