import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ShortcutCardProps {
  href: string;
  title: string;
  description: string;
}

export function ShortcutCard({ href, title, description }: ShortcutCardProps) {
  return (
    <Card className="border-border/60 p-0 overflow-hidden">
      <Link
        to={href}
        className="flex items-center justify-between p-5 hover:bg-accent/40 transition-colors"
      >
        <div>
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-muted-foreground" />
      </Link>
    </Card>
  );
}
