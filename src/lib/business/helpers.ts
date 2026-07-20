/** Helpers métier légers, réutilisables partout. */
import type { IsoDate } from "@/types";

/** Retourne "YYYY-MM" pour une date ISO. */
export function toYearMonth(date: IsoDate): string {
  return date.slice(0, 7);
}

/** Retourne l'année et le mois calendaire (1-12) d'une date ISO. */
export function extractAnneeMois(date: IsoDate): { annee: number; mois: number } {
  const [y, m] = date.split("-");
  return { annee: Number(y), mois: Number(m) };
}

/** Trie décroissant par date (les plus récents en premier). */
export function sortByDateDesc<T extends { date: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/** Filtre non-nul strict (utile pour `.filter(isDefined)`). */
export function isDefined<T>(v: T | null | undefined): v is T {
  return v !== null && v !== undefined;
}
