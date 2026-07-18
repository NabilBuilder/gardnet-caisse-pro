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

export const Route = createFileRoute("/_app/categories")({
  component: CategoriesPage,
});

function CategoriesPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-6">
      <PageHeader
        title="Catégories"
        description="Organisez vos dépenses par catégorie"
      />
      <DataTableShell
        onAdd={() => setOpen(true)}
        addLabel="Nouvelle catégorie"
        showFilters={false}
        columns={["Nom", "Description", "Actions"]}
        emptyMessage="Aucune catégorie créée."
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Nouvelle catégorie</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nom</Label>
              <Input id="name" placeholder="Ex: Carburant" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="desc">Description</Label>
              <Input id="desc" placeholder="Description..." />
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
