import type { BaseEntity } from "./common";

/** Catégorie de dépense. */
export interface Categorie extends BaseEntity {
  readonly nom: string;
  readonly description?: string;
  /** Couleur d'affichage optionnelle (hex ou token). */
  readonly couleur?: string;
  readonly actif: boolean;
}

export type CategorieCreateInput = Pick<
  Categorie,
  "nom" | "description" | "couleur"
> & { readonly actif?: boolean };

export type CategorieUpdateInput = Partial<CategorieCreateInput>;
