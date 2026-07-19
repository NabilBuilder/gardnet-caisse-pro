import { type ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  padded?: boolean;
}

/** Bloc de contenu carte-titre-corps réutilisable. */
export function Section({
  title,
  description,
  actions,
  children,
  className,
  padded = true,
}: SectionProps) {
  return (
    <Card className={cn("border-border/60 overflow-hidden", padded ? "p-5" : "p-0", className)}>
      {(title || actions) && (
        <div className={cn("flex items-center justify-between", padded ? "mb-4" : "border-b border-border p-5")}>
          <div className="min-w-0">
            {title && (
              <h2 className="text-base font-semibold text-foreground">{title}</h2>
            )}
            {description && (
              <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
            )}
          </div>
          {actions}
        </div>
      )}
      {children}
    </Card>
  );
}
