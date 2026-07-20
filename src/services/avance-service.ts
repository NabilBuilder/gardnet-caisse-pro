import { validateAvance } from "@/lib/business/validators";
import { avanceRepository } from "@/lib/repositories";
import type { Avance, AvanceCreateInput, AvanceUpdateInput, EntityId } from "@/types";
import { ensureValid } from "./base-service";

export const avanceService = {
  list: (): Promise<Avance[]> => avanceRepository.list(),
  listByMois: async (moisId: EntityId) => {
    const all = await avanceRepository.list();
    return all.filter((a) => a.moisId === moisId);
  },
  getById: (id: EntityId) => avanceRepository.getById(id),
  create: (input: AvanceCreateInput) => {
    ensureValid(validateAvance(input), "Avance");
    return avanceRepository.create(input);
  },
  update: (id: EntityId, input: AvanceUpdateInput) =>
    avanceRepository.update(id, input),
  remove: (id: EntityId) => avanceRepository.remove(id),
};
