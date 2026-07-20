/** Point d'entrée unique des types métier. */
import type { LucideIcon } from "lucide-react";

export * from "./common";
export * from "./mois";
export * from "./categorie";
export * from "./contact";
export * from "./depense";
export * from "./avance";
export * from "./utilisateur";
export * from "./historique";

/* --- Types UI conservés (préexistants). --- */

export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  accent: string;
  trend?: string;
}

/**
 * Alias rétro-compatibles pour le code UI existant qui référence encore
 * l'ancienne interface `HistoriqueEntry`.
 */
export interface HistoriqueEntry {
  id: string;
  date: string;
  utilisateur: string;
  action: string;
}
