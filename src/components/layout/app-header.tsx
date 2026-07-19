import { Link } from "@tanstack/react-router";
import { Bell, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePageTitle } from "@/hooks/use-page-title";

export function AppHeader() {
  const currentTitle = usePageTitle();

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-card/80 px-4 backdrop-blur">
      <SidebarTrigger className="-ml-1" />
      <div className="flex-1 min-w-0">
        <span className="truncate text-sm font-medium text-foreground">
          {currentTitle}
        </span>
      </div>
      <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Notifications">
        <Bell className="h-4 w-4" />
      </Button>
      <Link
        to="/parametres"
        className="flex items-center gap-2 rounded-lg border border-border bg-secondary px-2.5 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-accent"
      >
        <UserCircle2 className="h-4 w-4 text-primary" />
        <span className="hidden sm:inline">Administrateur</span>
      </Link>
    </header>
  );
}
