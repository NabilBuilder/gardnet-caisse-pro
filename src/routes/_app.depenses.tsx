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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/_app/depenses")({
  component: DepensesPage,
});

function DepensesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dépenses"
        description="Suivi des dépenses de la caisse"
      />

      <DataTableShell
        onAdd={() => setOpen(true)}
        addLabel="Nouvelle dépense"
        columns={["Date", "Catégorie", "Description", "Montant (DH)", "Actions"]}
        emptyMessage="Aucune dépense enregistrée."
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Nouvelle dépense</DialogTitle>
            <DialogDescription>
              Renseignez les informations de la dépense.
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
              <Label htmlFor="category">Catégorie</Label>
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
            </div>
            <div className="space-y-2">
              <Label htmlFor="desc">Description</Label>
              <Textarea id="desc" placeholder="Description de la dépense..." rows={3} />
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
