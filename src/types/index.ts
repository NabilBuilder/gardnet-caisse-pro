/** Types partagés de l'application Gardnet Caisse. */
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export interface Categorie {
  id: string;
  nom: string;
  description?: string;
}

export interface Contact {
  id: string;
  nom: string;
  fonction?: string;
  email?: string;
  whatsapp?: string;
  actif: boolean;
}

export interface Depense {
  id: string;
  date: string;
  categorieId: string;
  description?: string;
  montant: number;
}

export interface Avance {
  id: string;
  date: string;
  montant: number;
  observation?: string;
}

export interface HistoriqueEntry {
  id: string;
  date: string;
  utilisateur: string;
  action: string;
}

export interface StatItem {
  label: string;
  value: string;
  icon: LucideIcon;
  accent: string;
  trend?: string;
}
