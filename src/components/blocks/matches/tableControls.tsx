import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Match } from "@/lib/types";
import { PaginationState, Table } from "@tanstack/react-table";
import { memo } from "react";

export const TableControls = memo(function TableControls({
  table,
  paginationState,
}: {
  table: Table<Match>;
  paginationState: PaginationState;
}) {
  return (
    <>
      <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
        Previous
      </Button>
      <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
        Next
      </Button>
      <span>{`${paginationState.pageIndex + 1}/${table.getPageCount()}`}</span>
      <Select
        value={String(paginationState.pageSize)}
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
    </>
  );
});
