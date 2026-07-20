import { validateDepense } from "@/lib/business/validators";
import { depenseRepository } from "@/lib/repositories";
import type { Depense, DepenseCreateInput, DepenseUpdateInput, EntityId } from "@/types";
import { ensureValid } from "./base-service";

export const depenseService = {
  list: (): Promise<Depense[]> => depenseRepository.list(),
  listByMois: async (moisId: EntityId) => {
    const all = await depenseRepository.list();
    return all.filter((d) => d.moisId === moisId);
  },
  getById: (id: EntityId) => depenseRepository.getById(id),
  create: (input: DepenseCreateInput) => {
    ensureValid(validateDepense(input), "Dépense");
    return depenseRepository.create(input);
  },
  update: (id: EntityId, input: DepenseUpdateInput) =>
    depenseRepository.update(id, input),
  remove: (id: EntityId) => depenseRepository.remove(id),
};
