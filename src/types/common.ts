/** Types transverses partagés par toutes les entités métier. */

/** Identifiant unique d'une entité (UUID ou clé technique). */
export type EntityId = string;

/** Date ISO 8601 (ex: "2026-07-20"). */
export type IsoDate = string;

/** Horodatage ISO 8601 avec heure (ex: "2026-07-20T14:30:00Z"). */
export type IsoDateTime = string;

/** Champs d'audit communs à toutes les entités persistées. */
export interface AuditFields {
  readonly createdAt: IsoDateTime;
  readonly updatedAt: IsoDateTime;
  readonly createdBy?: EntityId;
  readonly updatedBy?: EntityId;
}

/** Entité de base avec identifiant et audit. */
export interface BaseEntity extends AuditFields {
  readonly id: EntityId;
}

/** Résultat d'une validation métier. */
export interface ValidationResult {
  readonly valid: boolean;
  readonly errors: readonly string[];
}

/** Résultat paginé standard pour les listes. */
export interface Paginated<T> {
  readonly items: readonly T[];
  readonly total: number;
  readonly page: number;
  readonly pageSize: number;
}

/** Options de filtrage temporel générique. */
export interface DateRangeFilter {
  readonly from?: IsoDate;
  readonly to?: IsoDate;
}
