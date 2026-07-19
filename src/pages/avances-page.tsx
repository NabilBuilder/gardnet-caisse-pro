import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { DataTable } from "@/components/tables/data-table";
import { FormDialog } from "@/components/dialogs/form-dialog";
import { FormField } from "@/components/forms/form-field";
import { FormGrid } from "@/components/forms/form-grid";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const COLUMNS = ["Date", "Montant (DH)", "Observation", "Actions"];

export function AvancesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <PageHeader title="Avances" description="Gestion des avances accordées" />

      <DataTable
        onAdd={() => setOpen(true)}
        addLabel="Nouvelle avance"
        columns={COLUMNS}
        emptyMessage="Aucune avance enregistrée."
      />

      <FormDialog
        open={open}
        onOpenChange={setOpen}
        title="Nouvelle avance"
        description="Renseignez les informations de l'avance."
      >
        <FormGrid>
          <FormField id="date" label="Date">
            <Input id="date" type="date" />
          </FormField>
          <FormField id="amount" label="Montant (DH)">
            <Input id="amount" type="number" placeholder="0,00" />
          </FormField>
        </FormGrid>
        <FormField id="obs" label="Observation">
          <Textarea id="obs" placeholder="Observation..." rows={3} />
        </FormField>
      </FormDialog>
    </div>
  );
}
