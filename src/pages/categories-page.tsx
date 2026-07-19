import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { DataTable } from "@/components/tables/data-table";
import { FormDialog } from "@/components/dialogs/form-dialog";
import { FormField } from "@/components/forms/form-field";
import { Input } from "@/components/ui/input";

const COLUMNS = ["Nom", "Description", "Actions"];

export function CategoriesPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-6">
      <PageHeader
        title="Catégories"
        description="Organisez vos dépenses par catégorie"
      />
      <DataTable
        onAdd={() => setOpen(true)}
        addLabel="Nouvelle catégorie"
        showFilters={false}
        columns={COLUMNS}
        emptyMessage="Aucune catégorie créée."
      />
      <FormDialog
        open={open}
        onOpenChange={setOpen}
        title="Nouvelle catégorie"
        size="sm"
      >
        <FormField id="name" label="Nom">
          <Input id="name" placeholder="Ex: Carburant" />
        </FormField>
        <FormField id="desc" label="Description">
          <Input id="desc" placeholder="Description..." />
        </FormField>
      </FormDialog>
    </div>
  );
}
