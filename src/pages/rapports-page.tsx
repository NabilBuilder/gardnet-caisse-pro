import { FileText, FileSpreadsheet, Share2, Mail } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { ActionCard } from "@/components/cards/action-card";
import { FormField } from "@/components/forms/form-field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ACTIONS = [
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

export function RapportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Rapports"
        description="Générez et partagez vos rapports de caisse"
      />

      <Section title="Période du rapport">
        <div className="grid gap-4 sm:grid-cols-3">
          <FormField id="type" label="Type de rapport">
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
          </FormField>
          <FormField id="from" label="Du">
            <Input id="from" type="date" />
          </FormField>
          <FormField id="to" label="Au">
            <Input id="to" type="date" />
          </FormField>
        </div>
      </Section>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {ACTIONS.map((a) => (
          <ActionCard key={a.label} {...a} />
        ))}
      </div>
    </div>
  );
}
