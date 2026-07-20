/**
 * Données de démonstration réalistes. Utilisées uniquement pour amorcer
 * les repositories en mémoire — jamais référencées par l'UI directement.
 */
import { ContactStatut, MoisStatut, UtilisateurType } from "@/constants/enums";
import type {
  Avance,
  Categorie,
  Contact,
  Depense,
  Historique,
  Mois,
  Utilisateur,
} from "@/types";
import { HistoriqueAction, HistoriqueEntite } from "@/constants/enums";

const now = "2026-07-01T08:00:00Z";

function stamp<T extends object>(id: string, extra: T): T & {
  id: string;
  createdAt: string;
  updatedAt: string;
} {
  return { id, createdAt: now, updatedAt: now, ...extra };
}

export const MOCK_UTILISATEURS: readonly Utilisateur[] = [
  stamp("usr_admin", {
    nom: "Admin Gardnet",
    email: "admin@gardnet.ma",
    type: UtilisateurType.Admin,
    actif: true,
  }),
  stamp("usr_gest", {
    nom: "Karim Bennani",
    email: "karim@gardnet.ma",
    type: UtilisateurType.Gestionnaire,
    actif: true,
  }),
];

export const MOCK_MOIS: readonly Mois[] = [
  stamp("mois_2026_07", {
    annee: 2026,
    mois: 7,
    dateDebut: "2026-07-01",
    dateFin: "2026-07-31",
    statut: MoisStatut.Ouvert,
    reportPrecedent: 4200,
  }),
  stamp("mois_2026_06", {
    annee: 2026,
    mois: 6,
    dateDebut: "2026-06-01",
    dateFin: "2026-06-30",
    statut: MoisStatut.Cloture,
    reportPrecedent: 3100,
    soldeCloture: 4200,
    cloturePar: "usr_admin",
  }),
];

export const MOCK_CATEGORIES: readonly Categorie[] = [
  stamp("cat_carburant", {
    nom: "Carburant",
    description: "Essence, diesel, péages",
    couleur: "#e11d48",
    actif: true,
  }),
  stamp("cat_bureau", {
    nom: "Fournitures bureau",
    description: "Papeterie, consommables",
    couleur: "#0ea5e9",
    actif: true,
  }),
  stamp("cat_entretien", {
    nom: "Entretien",
    description: "Maintenance et nettoyage",
    couleur: "#22c55e",
    actif: true,
  }),
];

export const MOCK_CONTACTS: readonly Contact[] = [
  stamp("ctc_shell", {
    nom: "Station Shell Ain Sebaa",
    fonction: "Fournisseur",
    email: "contact@shell-ma.example",
    whatsapp: "+212 522 000 111",
    statut: ContactStatut.Actif,
  }),
  stamp("ctc_papeterie", {
    nom: "Papeterie Al Madina",
    fonction: "Fournisseur",
    email: "vente@almadina.example",
    statut: ContactStatut.Actif,
  }),
];

export const MOCK_AVANCES: readonly Avance[] = [
  stamp("av_1", {
    date: "2026-07-02",
    moisId: "mois_2026_07",
    montant: 5000,
    observation: "Avance de trésorerie mensuelle",
  }),
];

export const MOCK_DEPENSES: readonly Depense[] = [
  stamp("dep_1", {
    date: "2026-07-05",
    moisId: "mois_2026_07",
    categorieId: "cat_carburant",
    contactId: "ctc_shell",
    montant: 620.5,
    description: "Plein de carburant véhicule utilitaire",
  }),
  stamp("dep_2", {
    date: "2026-07-10",
    moisId: "mois_2026_07",
    categorieId: "cat_bureau",
    contactId: "ctc_papeterie",
    montant: 245,
    description: "Ramettes A4 et cartouches",
  }),
];

export const MOCK_HISTORIQUE: readonly Historique[] = [
  stamp("hist_1", {
    date: "2026-07-05T09:12:00Z",
    utilisateurId: "usr_gest",
    action: HistoriqueAction.Creation,
    entite: HistoriqueEntite.Depense,
    entiteId: "dep_1",
    details: "Création dépense carburant",
  }),
];
