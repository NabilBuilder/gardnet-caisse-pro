import { calculerReport, resumerMois, type MoisResume } from "@/lib/business/calculators";
import { validateMois } from "@/lib/business/validators";
import {
  avanceRepository,
  depenseRepository,
  moisRepository,
} from "@/lib/repositories";
import { MoisStatut } from "@/constants/enums";
import type { EntityId, Mois, MoisCreateInput, MoisUpdateInput } from "@/types";
import { BusinessError, ensureValid } from "./base-service";

export const moisService = {
  list: (): Promise<Mois[]> => moisRepository.list(),
  getById: (id: EntityId) => moisRepository.getById(id),

  create: (input: MoisCreateInput) => {
    ensureValid(validateMois(input), "Mois");
    return moisRepository.create(input);
  },

  update: (id: EntityId, input: MoisUpdateInput) => moisRepository.update(id, input),

  /** Retourne le mois courant (le plus récent ouvert), ou null. */
  async getMoisCourant(): Promise<Mois | null> {
    const all = await moisRepository.list();
    const ouverts = all
      .filter((m) => m.statut === MoisStatut.Ouvert)
      .sort((a, b) => (a.dateDebut < b.dateDebut ? 1 : -1));
    return ouverts[0] ?? null;
  },

  /** Résumé (report, avances, dépenses, solde) d'un mois. */
  async resume(moisId: EntityId): Promise<MoisResume> {
    const mois = await moisRepository.getById(moisId);
    if (!mois) throw new BusinessError("Mois introuvable");
    const [avances, depenses] = await Promise.all([
      avanceRepository.list(),
      depenseRepository.list(),
    ]);
    return resumerMois(mois, avances, depenses);
  },

  /** Clôture un mois : fige le solde, calcule le report pour le mois suivant. */
  async cloturer(moisId: EntityId, utilisateurId: EntityId): Promise<Mois> {
    const mois = await moisRepository.getById(moisId);
    if (!mois) throw new BusinessError("Mois introuvable");
    if (mois.statut !== MoisStatut.Ouvert)
      throw new BusinessError("Seul un mois ouvert peut être clôturé.");

    const [avances, depenses] = await Promise.all([
      avanceRepository.list(),
      depenseRepository.list(),
    ]);
    const report = calculerReport(
      mois,
      avances.filter((a) => a.moisId === moisId),
      depenses.filter((d) => d.moisId === moisId),
    );

    return moisRepository.update(moisId, {
      statut: MoisStatut.Cloture,
      soldeCloture: report,
      cloturePar: utilisateurId,
    });
  },
};
