import { ArrowUp, ArrowDown } from "lucide-react";
import { HeaderContext } from "@tanstack/react-table";

type SortableHeaderProps<T> = {
  column: HeaderContext<T, unknown>["column"];
  label: string;
};

export function SortableHeader<T>({ column, label }: SortableHeaderProps<T>) {
  const sorted = column.getIsSorted();

  return (
    <button
      type="button"
      onClick={() => column.toggleSorting(sorted === "asc")}
      className="flex items-center gap-2 text-left"
    >
      {label}
      {sorted === "asc" ? (
        <ArrowUp size={"16"} />
      ) : sorted === "desc" ? (
        <ArrowDown size={"16"} />
      ) : (
        <div className="w-[16px]" />
      )}
    </button>
  );
}
