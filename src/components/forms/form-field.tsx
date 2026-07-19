import { type ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface FormFieldProps {
  id: string;
  label: string;
  children: ReactNode;
  hint?: string;
  className?: string;
}

/** Groupe standard Label + champ (utilise n'importe quel input contrôlé shadcn). */
export function FormField({ id, label, children, hint, className }: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}
