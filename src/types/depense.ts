import type { BaseEntity, EntityId, IsoDate } from "./common";

/** Dépense enregistrée dans la caisse. */
export interface Depense extends BaseEntity {
  readonly date: IsoDate;
  readonly moisId: EntityId;
  readonly categorieId: EntityId;
  readonly contactId?: EntityId;
  readonly montant: number;
  readonly description?: string;
  readonly justificatifUrl?: string;
}

export type DepenseCreateInput = Pick<
  Depense,
  "date" | "moisId" | "categorieId" | "montant"
> & {
  readonly contactId?: EntityId;
  readonly description?: string;
  readonly justificatifUrl?: string;
};

export type DepenseUpdateInput = Partial<Omit<DepenseCreateInput, "moisId">>;
