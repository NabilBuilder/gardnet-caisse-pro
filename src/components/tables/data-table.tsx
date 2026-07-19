import { type ReactNode } from "react";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Toolbar } from "./toolbar";

interface DataTableProps {
  onAdd?: () => void;
  addLabel?: string;
  showFilters?: boolean;
  columns: string[];
  emptyMessage?: string;
  children?: ReactNode;
  footer?: ReactNode;
}

/** Coquille standard pour toutes les tables (barre d'outils + tête + corps). */
export function DataTable({
  onAdd,
  addLabel,
  showFilters = true,
  columns,
  emptyMessage = "Aucune donnée disponible.",
  children,
  footer,
}: DataTableProps) {
  return (
    <Card className="border-border/60 p-0 overflow-hidden">
      <Toolbar onAdd={onAdd} addLabel={addLabel} showFilters={showFilters} />
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
      {footer}
    </Card>
  );
}
