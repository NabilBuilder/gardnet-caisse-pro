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
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/_app/avances")({
  component: AvancesPage,
});

function AvancesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Avances"
        description="Gestion des avances accordées"
      />

      <DataTableShell
        onAdd={() => setOpen(true)}
        addLabel="Nouvelle avance"
        columns={["Date", "Montant (DH)", "Observation", "Actions"]}
        emptyMessage="Aucune avance enregistrée."
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Nouvelle avance</DialogTitle>
            <DialogDescription>
              Renseignez les informations de l'avance.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="grid gap-2 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Montant (DH)</Label>
                <Input id="amount" type="number" placeholder="0,00" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="obs">Observation</Label>
              <Textarea id="obs" placeholder="Observation..." rows={3} />
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
