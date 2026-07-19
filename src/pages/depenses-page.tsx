import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { DataTable } from "@/components/tables/data-table";
import { FormDialog } from "@/components/dialogs/form-dialog";
import { FormField } from "@/components/forms/form-field";
import { FormGrid } from "@/components/forms/form-grid";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const COLUMNS = ["Date", "Catégorie", "Description", "Montant (DH)", "Actions"];

export function DepensesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <PageHeader title="Dépenses" description="Suivi des dépenses de la caisse" />

      <DataTable
        onAdd={() => setOpen(true)}
        addLabel="Nouvelle dépense"
        columns={COLUMNS}
        emptyMessage="Aucune dépense enregistrée."
      />

      <FormDialog
        open={open}
        onOpenChange={setOpen}
        title="Nouvelle dépense"
        description="Renseignez les informations de la dépense."
      >
        <FormGrid>
          <FormField id="date" label="Date">
            <Input id="date" type="date" />
          </FormField>
          <FormField id="amount" label="Montant (DH)">
            <Input id="amount" type="number" placeholder="0,00" />
          </FormField>
        </FormGrid>
        <FormField id="category" label="Catégorie">
          <Select>
            <SelectTrigger id="category">
              <SelectValue placeholder="Sélectionner une catégorie" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bureau">Fournitures bureau</SelectItem>
              <SelectItem value="carburant">Carburant</SelectItem>
              <SelectItem value="autre">Autre</SelectItem>
            </SelectContent>
          </Select>
        </FormField>
        <FormField id="desc" label="Description">
          <Textarea id="desc" placeholder="Description de la dépense..." rows={3} />
        </FormField>
      </FormDialog>
    </div>
  );
}
