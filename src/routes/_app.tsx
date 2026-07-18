import { createFileRoute, Outlet, Link, useRouterState } from "@tanstack/react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { Bell, UserCircle2 } from "lucide-react";

export const Route = createFileRoute("/_app")({
  component: AppLayout,
});

const titles: Record<string, string> = {
  "/dashboard": "Tableau de bord",
  "/depenses": "Dépenses",
  "/avances": "Avances",
  "/categories": "Catégories",
  "/contacts": "Contacts",
  "/rapports": "Rapports",
  "/historique": "Historique",
  "/parametres": "Paramètres",
};

function AppLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const currentTitle = titles[pathname] ?? "Gardnet Caisse";

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <div className="flex flex-1 flex-col min-w-0">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-card/80 px-4 backdrop-blur">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1 min-w-0">
              <span className="truncate text-sm font-medium text-foreground">
                {currentTitle}
              </span>
            </div>
            <Button variant="ghost" size="icon" className="h-9 w-9">
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
          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
