"use client";

import { useIndexes } from "@/hooks/useMatch";
import { memo } from "react";

export const SearchBar = memo(function SearchBar() {
  const {
    data: indexes,
    isLoading: isIndexesLoading,
    error: indexesError,
  } = useIndexes();
  console.log("indexes :>> ", indexes);

  return <span>TBD</span>;
});
