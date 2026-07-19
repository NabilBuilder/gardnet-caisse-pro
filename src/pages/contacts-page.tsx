import { useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { DataTable } from "@/components/tables/data-table";
import { FormDialog } from "@/components/dialogs/form-dialog";
import { FormField } from "@/components/forms/form-field";
import { FormGrid } from "@/components/forms/form-grid";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const COLUMNS = ["Nom", "Fonction", "Email", "WhatsApp", "Actif", "Actions"];

export function ContactsPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-6">
      <PageHeader
        title="Contacts"
        description="Répertoire des contacts professionnels"
      />
      <DataTable
        onAdd={() => setOpen(true)}
        addLabel="Nouveau contact"
        columns={COLUMNS}
        emptyMessage="Aucun contact enregistré."
      />
      <FormDialog open={open} onOpenChange={setOpen} title="Nouveau contact">
        <FormGrid>
          <FormField id="name" label="Nom">
            <Input id="name" placeholder="Nom complet" />
          </FormField>
          <FormField id="role" label="Fonction">
            <Input id="role" placeholder="Fonction" />
          </FormField>
        </FormGrid>
        <FormField id="email" label="Email">
          <Input id="email" type="email" placeholder="exemple@domaine.com" />
        </FormField>
        <FormField id="wa" label="WhatsApp">
          <Input id="wa" placeholder="+212 ..." />
        </FormField>
        <div className="flex items-center justify-between rounded-lg border border-border p-3">
          <div>
            <Label htmlFor="active" className="text-sm">Actif</Label>
            <p className="text-xs text-muted-foreground">Contact utilisable</p>
          </div>
          <Switch id="active" defaultChecked />
        </div>
      </FormDialog>
    </div>
  );
}
