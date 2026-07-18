import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { DataTableShell } from "@/components/data-table-shell";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/_app/contacts")({
  component: ContactsPage,
});

function ContactsPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-6">
      <PageHeader
        title="Contacts"
        description="Répertoire des contacts professionnels"
      />
      <DataTableShell
        onAdd={() => setOpen(true)}
        addLabel="Nouveau contact"
        columns={["Nom", "Fonction", "Email", "WhatsApp", "Actif", "Actions"]}
        emptyMessage="Aucun contact enregistré."
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Nouveau contact</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" placeholder="Nom complet" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Fonction</Label>
                <Input id="role" placeholder="Fonction" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="exemple@domaine.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wa">WhatsApp</Label>
              <Input id="wa" placeholder="+212 ..." />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border p-3">
              <div>
                <Label htmlFor="active" className="text-sm">Actif</Label>
                <p className="text-xs text-muted-foreground">Contact utilisable</p>
              </div>
              <Switch id="active" defaultChecked />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Annuler
            </Button>
            <Button onClick={() => setOpen(false)}>Enregistrer</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
