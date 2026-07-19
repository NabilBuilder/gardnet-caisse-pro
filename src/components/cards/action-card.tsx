import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ActionCardProps {
  label: string;
  description: string;
  icon: LucideIcon;
  color: string;
  cta?: string;
  onClick?: () => void;
}

export function ActionCard({
  label,
  description,
  icon: Icon,
  color,
  cta = "Lancer →",
  onClick,
}: ActionCardProps) {
  return (
    <Card className="group cursor-pointer border-border/60 p-5 transition-all hover:shadow-md hover:-translate-y-0.5">
      <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${color} text-white shadow-sm`}>
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="mt-4 text-sm font-semibold text-foreground">{label}</h4>
      <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      <Button
        variant="ghost"
        size="sm"
        onClick={onClick}
        className="mt-3 px-0 text-primary hover:text-primary hover:bg-transparent"
      >
        {cta}
      </Button>
    </Card>
  );
}
