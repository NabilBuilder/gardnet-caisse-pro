import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Grille responsive 1 ou 2 colonnes pour formulaires. */
export function FormGrid({
  children,
  cols = 2,
  className,
}: {
  children: ReactNode;
  cols?: 1 | 2;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-2",
        cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
