import type { BaseEntity, EntityId, IsoDateTime } from "./common";
import type { HistoriqueAction, HistoriqueEntite } from "@/constants/enums";

/** Entrée du journal d'audit. */
export interface Historique extends BaseEntity {
  readonly date: IsoDateTime;
  readonly utilisateurId: EntityId;
  readonly action: HistoriqueAction;
  readonly entite: HistoriqueEntite;
  readonly entiteId?: EntityId;
  readonly details?: string;
}

export type HistoriqueCreateInput = Pick<
  Historique,
  "utilisateurId" | "action" | "entite"
> & {
  readonly entiteId?: EntityId;
  readonly details?: string;
  readonly date?: IsoDateTime;
};
