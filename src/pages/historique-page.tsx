import { PageHeader } from "@/components/layout/page-header";
import { DataTable } from "@/components/tables/data-table";

const COLUMNS = ["Date", "Utilisateur", "Action"];

export function HistoriquePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Historique"
        description="Journal des actions effectuées dans l'application"
      />
      <DataTable columns={COLUMNS} emptyMessage="Aucune action enregistrée." />
    </div>
  );
}
