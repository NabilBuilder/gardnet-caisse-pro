import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileText, FileSpreadsheet, Share2, Mail } from "lucide-react";

export const Route = createFileRoute("/_app/rapports")({
  component: RapportsPage,
});

const actions = [
  {
    label: "Exporter en PDF",
    description: "Générer un rapport imprimable",
    icon: FileText,
    color: "from-rose-600 to-rose-500",
  },
  {
    label: "Exporter en Excel",
    description: "Télécharger les données brutes",
    icon: FileSpreadsheet,
    color: "from-emerald-600 to-emerald-500",
  },
  {
    label: "Partager sur WhatsApp",
    description: "Envoyer le rapport via WhatsApp",
    icon: Share2,
    color: "from-green-600 to-green-500",
  },
  {
    label: "Envoyer par Email",
    description: "Transmettre le rapport par mail",
    icon: Mail,
    color: "from-sky-600 to-sky-500",
  },
];

function RapportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Rapports"
        description="Générez et partagez vos rapports de caisse"
      />

      <Card className="border-border/60 p-5">
        <h3 className="text-sm font-semibold text-foreground">Période du rapport</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="space-y-2">
            <Label htmlFor="type">Type de rapport</Label>
            <Select>
              <SelectTrigger id="type">
                <SelectValue placeholder="Mensuel" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="jour">Journalier</SelectItem>
                <SelectItem value="mois">Mensuel</SelectItem>
                <SelectItem value="annee">Annuel</SelectItem>
                <SelectItem value="perso">Personnalisé</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="from">Du</Label>
            <Input id="from" type="date" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="to">Au</Label>
            <Input id="to" type="date" />
          </div>
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((a) => (
          <Card
            key={a.label}
            className="group cursor-pointer border-border/60 p-5 transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <div
              className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${a.color} text-white shadow-sm`}
            >
              <a.icon className="h-5 w-5" />
            </div>
            <h4 className="mt-4 text-sm font-semibold text-foreground">
              {a.label}
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">{a.description}</p>
            <Button
              variant="ghost"
              size="sm"
              className="mt-3 px-0 text-primary hover:text-primary hover:bg-transparent"
            >
              Lancer →
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
