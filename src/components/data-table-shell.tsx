import { type ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, Filter, ArrowUpDown } from "lucide-react";

interface DataTableShellProps {
  onAdd?: () => void;
  addLabel?: string;
  showFilters?: boolean;
  columns: string[];
  emptyMessage?: string;
  children?: ReactNode;
}

export function DataTableShell({
  onAdd,
  addLabel = "Ajouter",
  showFilters = true,
  columns,
  emptyMessage = "Aucune donnée disponible.",
  children,
}: DataTableShellProps) {
  return (
    <Card className="border-border/60 p-0 overflow-hidden">
      <div className="flex flex-col gap-3 border-b border-border p-4 md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher..." className="pl-9" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {showFilters && (
            <>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filtrer
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <ArrowUpDown className="h-4 w-4" />
                Trier
              </Button>
            </>
          )}
          {onAdd !== undefined && (
            <Button size="sm" onClick={onAdd} className="gap-2">
              <Plus className="h-4 w-4" />
              {addLabel}
            </Button>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((c, i) => (
                <TableHead
                  key={c}
                  className={i === columns.length - 1 ? "text-right" : ""}
                >
                  {c}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {children ?? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-32 text-center text-sm text-muted-foreground"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
