import { validateCategorie } from "@/lib/business/validators";
import { categorieRepository } from "@/lib/repositories";
import type { Categorie, CategorieCreateInput, CategorieUpdateInput, EntityId } from "@/types";
import { ensureValid } from "./base-service";

export const categorieService = {
  list: (): Promise<Categorie[]> => categorieRepository.list(),
  getById: (id: EntityId) => categorieRepository.getById(id),
  create: (input: CategorieCreateInput) => {
    ensureValid(validateCategorie(input), "Catégorie");
    return categorieRepository.create(input);
  },
  update: (id: EntityId, input: CategorieUpdateInput) =>
    categorieRepository.update(id, input),
  remove: (id: EntityId) => categorieRepository.remove(id),
};
