import {
  LayoutDashboard,
  Receipt,
  ArrowUpRight,
  Tags,
  Users,
  FileBarChart,
  History,
  Settings,
} from "lucide-react";
import type { NavItem } from "@/types";

export const MAIN_NAV: NavItem[] = [
  { title: "Accueil", url: "/dashboard", icon: LayoutDashboard },
  { title: "Dépenses", url: "/depenses", icon: Receipt },
  { title: "Avances", url: "/avances", icon: ArrowUpRight },
  { title: "Catégories", url: "/categories", icon: Tags },
  { title: "Contacts", url: "/contacts", icon: Users },
];

export const TOOLS_NAV: NavItem[] = [
  { title: "Rapports", url: "/rapports", icon: FileBarChart },
  { title: "Historique", url: "/historique", icon: History },
  { title: "Paramètres", url: "/parametres", icon: Settings },
];

export const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Tableau de bord",
  "/depenses": "Dépenses",
  "/avances": "Avances",
  "/categories": "Catégories",
  "/contacts": "Contacts",
  "/rapports": "Rapports",
  "/historique": "Historique",
  "/parametres": "Paramètres",
};
