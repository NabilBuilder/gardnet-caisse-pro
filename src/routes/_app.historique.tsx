import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { DataTableShell } from "@/components/data-table-shell";

export const Route = createFileRoute("/_app/historique")({
  component: HistoriquePage,
});

function HistoriquePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Historique"
        description="Journal des actions effectuées dans l'application"
      />
      <DataTableShell
        columns={["Date", "Utilisateur", "Action"]}
        emptyMessage="Aucune action enregistrée."
      />
    </div>
  );
}
