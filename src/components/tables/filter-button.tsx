import { Filter, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FilterButton({ onClick }: { onClick?: () => void }) {
  return (
    <Button variant="outline" size="sm" onClick={onClick} className="gap-2">
      <Filter className="h-4 w-4" />
      Filtrer
    </Button>
  );
}

export function SortButton({ onClick }: { onClick?: () => void }) {
  return (
    <Button variant="outline" size="sm" onClick={onClick} className="gap-2">
      <ArrowUpDown className="h-4 w-4" />
      Trier
    </Button>
  );
}
