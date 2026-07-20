import type { BaseEntity, EntityId, IsoDate } from "./common";

/** Avance en caisse (entrée d'argent). */
export interface Avance extends BaseEntity {
  readonly date: IsoDate;
  readonly moisId: EntityId;
  readonly montant: number;
  readonly observation?: string;
  readonly contactId?: EntityId;
}

export type AvanceCreateInput = Pick<Avance, "date" | "moisId" | "montant"> & {
  readonly observation?: string;
  readonly contactId?: EntityId;
};

export type AvanceUpdateInput = Partial<Omit<AvanceCreateInput, "moisId">>;
