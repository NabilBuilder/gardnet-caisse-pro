import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/page-header";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Calendar,
} from "lucide-react";

export const Route = createFileRoute("/_app/dashboard")({
  component: DashboardPage,
});

const stats = [
  {
    label: "Solde actuel",
    value: "0,00 DH",
    icon: Wallet,
    accent: "from-primary to-primary-glow",
    trend: "Disponible en caisse",
  },
  {
    label: "Report précédent",
    value: "0,00 DH",
    icon: TrendingUp,
    accent: "from-slate-700 to-slate-500",
    trend: "Mois précédent",
  },
  {
    label: "Total des avances",
    value: "0,00 DH",
    icon: ArrowUpRight,
    accent: "from-amber-600 to-amber-400",
    trend: "Ce mois-ci",
  },
  {
    label: "Total des dépenses",
    value: "0,00 DH",
    icon: TrendingDown,
    accent: "from-rose-700 to-rose-500",
    trend: "Ce mois-ci",
  },
];

const currentMonth = new Date().toLocaleDateString("fr-FR", {
  month: "long",
  year: "numeric",
});

function DashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Tableau de bord"
        description="Vue d'ensemble de votre caisse"
        actions={
          <Badge variant="secondary" className="gap-1.5 px-3 py-1.5 text-sm capitalize">
            <Calendar className="h-3.5 w-3.5" />
            {currentMonth}
          </Badge>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((s) => (
          <Card
            key={s.label}
            className="relative overflow-hidden p-5 border-border/60 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </p>
                <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{s.trend}</p>
              </div>
              <div
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-sm`}
              >
                <s.icon className="h-5 w-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="border-border/60 p-0 overflow-hidden">
        <div className="flex items-center justify-between border-b border-border p-5">
          <div>
            <h2 className="text-base font-semibold text-foreground">
              Dernières dépenses
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Aperçu des mouvements du mois
            </p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Catégorie</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Montant</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="h-32 text-center text-sm text-muted-foreground"
                >
                  Aucune dépense enregistrée pour le moment.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
