/** Enums métier (utilisés côté client et prêts pour Supabase). */

/** Statut d'un mois comptable. */
export enum MoisStatut {
  Ouvert = "ouvert",
  Cloture = "cloture",
  Archive = "archive",
}

/** Type/rôle d'utilisateur applicatif. */
export enum UtilisateurType {
  Admin = "admin",
  Gestionnaire = "gestionnaire",
  Lecteur = "lecteur",
}

/** Statut d'un contact du répertoire. */
export enum ContactStatut {
  Actif = "actif",
  Inactif = "inactif",
}

/** Actions historisées dans le journal d'audit. */
export enum HistoriqueAction {
  Creation = "creation",
  Modification = "modification",
  Suppression = "suppression",
  Cloture = "cloture",
  Connexion = "connexion",
  Deconnexion = "deconnexion",
  Export = "export",
}

/** Entité ciblée par une entrée d'historique. */
export enum HistoriqueEntite {
  Depense = "depense",
  Avance = "avance",
  Categorie = "categorie",
  Contact = "contact",
  Utilisateur = "utilisateur",
  Mois = "mois",
  Session = "session",
}
