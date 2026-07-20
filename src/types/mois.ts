import type { BaseEntity, EntityId, IsoDate } from "./common";
import type { MoisStatut } from "@/constants/enums";

/**
 * Un mois comptable regroupe l'ensemble des mouvements (avances, dépenses)
 * survenus entre `dateDebut` et `dateFin` inclus.
 */
export interface Mois extends BaseEntity {
  readonly annee: number;
  /** Mois calendaire (1-12). */
  readonly mois: number;
  readonly dateDebut: IsoDate;
  readonly dateFin: IsoDate;
  readonly statut: MoisStatut;
  /** Solde reporté depuis le mois précédent. */
  readonly reportPrecedent: number;
  /** Solde de clôture (renseigné une fois le mois clôturé). */
  readonly soldeCloture?: number;
  readonly cloturePar?: EntityId;
}

/** Payload de création d'un mois. */
export type MoisCreateInput = Pick<Mois, "annee" | "mois" | "reportPrecedent">;

/** Payload de mise à jour partielle. */
export type MoisUpdateInput = Partial<
  Pick<Mois, "statut" | "reportPrecedent" | "soldeCloture" | "cloturePar">
>;
