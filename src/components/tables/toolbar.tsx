import { type ReactNode } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchInput } from "./search-input";
import { FilterButton, SortButton } from "./filter-button";

interface ToolbarProps {
  onAdd?: () => void;
  addLabel?: string;
  showFilters?: boolean;
  onSearch?: (value: string) => void;
  searchValue?: string;
  extra?: ReactNode;
}

/** Barre d'outils standardisée pour listes/tables. */
export function Toolbar({
  onAdd,
  addLabel = "Ajouter",
  showFilters = true,
  onSearch,
  searchValue,
  extra,
}: ToolbarProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-border p-4 md:flex-row md:items-center md:justify-between">
      <SearchInput
        value={searchValue}
        onChange={onSearch}
        className="flex-1 md:max-w-sm"
      />
      <div className="flex flex-wrap items-center gap-2">
        {showFilters && (
          <>
            <FilterButton />
            <SortButton />
          </>
        )}
        {extra}
        {onAdd !== undefined && (
          <Button size="sm" onClick={onAdd} className="gap-2">
            <Plus className="h-4 w-4" />
            {addLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
