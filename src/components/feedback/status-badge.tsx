import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Status = "active" | "inactive" | "pending" | "success" | "error";

const STYLES: Record<Status, string> = {
  active: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  inactive: "bg-muted text-muted-foreground border-transparent",
  pending: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  success: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  error: "bg-destructive/10 text-destructive border-destructive/20",
};

const LABELS: Record<Status, string> = {
  active: "Actif",
  inactive: "Inactif",
  pending: "En attente",
  success: "Succès",
  error: "Erreur",
};

interface StatusBadgeProps {
  status: Status;
  label?: string;
  className?: string;
}

export function StatusBadge({ status, label, className }: StatusBadgeProps) {
  return (
    <Badge variant="outline" className={cn(STYLES[status], className)}>
      {label ?? LABELS[status]}
    </Badge>
  );
}
