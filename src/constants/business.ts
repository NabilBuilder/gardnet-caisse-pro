/** Constantes métier (règles de gestion, limites). */

/** Nombre maximum de décimales acceptées sur un montant. */
export const MONEY_DECIMALS = 2;

/** Montant minimal d'une opération (dépense ou avance). */
export const MIN_AMOUNT = 0.01;

/** Montant maximal accepté pour une opération unitaire (garde-fou). */
export const MAX_AMOUNT = 10_000_000;

/** Taille de page par défaut pour les listes. */
export const DEFAULT_PAGE_SIZE = 20;

/** Longueur max d'un libellé court (nom, catégorie...). */
export const LABEL_MAX_LENGTH = 120;

/** Longueur max d'une description libre. */
export const DESCRIPTION_MAX_LENGTH = 1000;
