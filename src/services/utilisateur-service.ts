import { validateUtilisateur } from "@/lib/business/validators";
import { utilisateurRepository } from "@/lib/repositories";
import type {
  EntityId,
  Utilisateur,
  UtilisateurCreateInput,
  UtilisateurUpdateInput,
} from "@/types";
import { ensureValid } from "./base-service";

export const utilisateurService = {
  list: (): Promise<Utilisateur[]> => utilisateurRepository.list(),
  getById: (id: EntityId) => utilisateurRepository.getById(id),
  create: (input: UtilisateurCreateInput) => {
    ensureValid(validateUtilisateur(input), "Utilisateur");
    return utilisateurRepository.create(input);
  },
  update: (id: EntityId, input: UtilisateurUpdateInput) =>
    utilisateurRepository.update(id, input),
  remove: (id: EntityId) => utilisateurRepository.remove(id),
};
