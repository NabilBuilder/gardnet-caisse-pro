import {
  Wallet,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  Calendar,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/layout/page-header";
import { Section } from "@/components/layout/section";
import { StatCard } from "@/components/cards/stat-card";
import { formatMonthYear, formatMoney } from "@/lib/format";
import type { StatItem } from "@/types";

const EMPTY_MONEY = formatMoney(0);

const STATS: StatItem[] = [
  {
    label: "Solde actuel",
    value: EMPTY_MONEY,
    icon: Wallet,
    accent: "from-primary to-primary-glow",
    trend: "Disponible en caisse",
  },
  {
    label: "Report précédent",
    value: EMPTY_MONEY,
    icon: TrendingUp,
    accent: "from-slate-700 to-slate-500",
    trend: "Mois précédent",
  },
  {
    label: "Total des avances",
    value: EMPTY_MONEY,
    icon: ArrowUpRight,
    accent: "from-amber-600 to-amber-400",
    trend: "Ce mois-ci",
  },
  {
    label: "Total des dépenses",
    value: EMPTY_MONEY,
    icon: TrendingDown,
    accent: "from-rose-700 to-rose-500",
    trend: "Ce mois-ci",
  },
];

export function DashboardPage() {
  const currentMonth = formatMonthYear();

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
        {STATS.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <Section
        padded={false}
        title="Dernières dépenses"
        description="Aperçu des mouvements du mois"
      >
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
                <TableCell colSpan={4} className="h-32 text-center text-sm text-muted-foreground">
                  Aucune dépense enregistrée pour le moment.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Section>
    </div>
  );
}
