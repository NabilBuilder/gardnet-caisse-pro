/** Calculs métier purs (sans I/O). */
import type { Avance, Depense, Mois } from "@/types";

/** Somme des montants d'une collection. */
export function sumMontants(items: readonly { montant: number }[]): number {
  return items.reduce((acc, i) => acc + (Number.isFinite(i.montant) ? i.montant : 0), 0);
}

/** Total des avances (optionnellement filtrées par mois). */
export function totalAvances(avances: readonly Avance[], moisId?: string): number {
  return sumMontants(moisId ? avances.filter((a) => a.moisId === moisId) : avances);
}

/** Total des dépenses (optionnellement filtrées par mois). */
export function totalDepenses(depenses: readonly Depense[], moisId?: string): number {
  return sumMontants(moisId ? depenses.filter((d) => d.moisId === moisId) : depenses);
}

/**
 * Solde d'un mois = report précédent + avances - dépenses.
 * Utilisé pour l'affichage du "solde actuel".
 */
export function calculerSolde(
  mois: Pick<Mois, "reportPrecedent">,
  avances: readonly Avance[],
  depenses: readonly Depense[],
): number {
  return mois.reportPrecedent + totalAvances(avances) - totalDepenses(depenses);
}

/**
 * Report vers le mois suivant. Par défaut identique au solde,
 * mais peut être override lors de la clôture.
 */
export function calculerReport(
  mois: Pick<Mois, "reportPrecedent">,
  avances: readonly Avance[],
  depenses: readonly Depense[],
): number {
  return calculerSolde(mois, avances, depenses);
}

/** Ventile les totaux par catégorie. */
export function totauxParCategorie(
  depenses: readonly Depense[],
): Record<string, number> {
  const map: Record<string, number> = {};
  for (const d of depenses) {
    map[d.categorieId] = (map[d.categorieId] ?? 0) + d.montant;
  }
  return map;
}

/** Résumé synthétique d'un mois. */
export interface MoisResume {
  readonly moisId: string;
  readonly reportPrecedent: number;
  readonly totalAvances: number;
  readonly totalDepenses: number;
  readonly solde: number;
}

export function resumerMois(
  mois: Mois,
  avances: readonly Avance[],
  depenses: readonly Depense[],
): MoisResume {
  const av = avances.filter((a) => a.moisId === mois.id);
  const dp = depenses.filter((d) => d.moisId === mois.id);
  const totAv = totalAvances(av);
  const totDp = totalDepenses(dp);
  return {
    moisId: mois.id,
    reportPrecedent: mois.reportPrecedent,
    totalAvances: totAv,
    totalDepenses: totDp,
    solde: mois.reportPrecedent + totAv - totDp,
  };
}
