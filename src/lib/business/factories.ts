/** Factories : construction d'entités avec valeurs par défaut cohérentes. */
import { ContactStatut, MoisStatut } from "@/constants/enums";
import type {
  Avance,
  AvanceCreateInput,
  Categorie,
  CategorieCreateInput,
  Contact,
  ContactCreateInput,
  Depense,
  DepenseCreateInput,
  Historique,
  HistoriqueCreateInput,
  Mois,
  MoisCreateInput,
  Utilisateur,
  UtilisateurCreateInput,
} from "@/types";
import { generateId } from "./id";

function nowIso(): string {
  return new Date().toISOString();
}

function baseAudit() {
  const now = nowIso();
  return { id: generateId(), createdAt: now, updatedAt: now };
}

export function createMois(input: MoisCreateInput): Mois {
  const dateDebut = `${input.annee}-${String(input.mois).padStart(2, "0")}-01`;
  const last = new Date(input.annee, input.mois, 0).getDate();
  const dateFin = `${input.annee}-${String(input.mois).padStart(2, "0")}-${String(last).padStart(2, "0")}`;
  return {
    ...baseAudit(),
    annee: input.annee,
    mois: input.mois,
    dateDebut,
    dateFin,
    statut: MoisStatut.Ouvert,
    reportPrecedent: input.reportPrecedent,
  };
}

export function createCategorie(input: CategorieCreateInput): Categorie {
  return {
    ...baseAudit(),
    nom: input.nom,
    description: input.description,
    couleur: input.couleur,
    actif: input.actif ?? true,
  };
}

export function createContact(input: ContactCreateInput): Contact {
  return {
    ...baseAudit(),
    nom: input.nom,
    fonction: input.fonction,
    email: input.email,
    whatsapp: input.whatsapp,
    statut: input.statut ?? ContactStatut.Actif,
  };
}

export function createDepense(input: DepenseCreateInput): Depense {
  return {
    ...baseAudit(),
    date: input.date,
    moisId: input.moisId,
    categorieId: input.categorieId,
    contactId: input.contactId,
    montant: input.montant,
    description: input.description,
    justificatifUrl: input.justificatifUrl,
  };
}

export function createAvance(input: AvanceCreateInput): Avance {
  return {
    ...baseAudit(),
    date: input.date,
    moisId: input.moisId,
    montant: input.montant,
    observation: input.observation,
    contactId: input.contactId,
  };
}

export function createUtilisateur(input: UtilisateurCreateInput): Utilisateur {
  return {
    ...baseAudit(),
    nom: input.nom,
    email: input.email,
    type: input.type,
    actif: input.actif ?? true,
    avatarUrl: input.avatarUrl,
  };
}

export function createHistorique(input: HistoriqueCreateInput): Historique {
  return {
    ...baseAudit(),
    date: input.date ?? nowIso(),
    utilisateurId: input.utilisateurId,
    action: input.action,
    entite: input.entite,
    entiteId: input.entiteId,
    details: input.details,
  };
}
