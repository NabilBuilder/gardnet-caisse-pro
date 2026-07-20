import { historiqueRepository } from "@/lib/repositories";
import type { Historique, HistoriqueCreateInput } from "@/types";

export const historiqueService = {
  list: (): Promise<Historique[]> => historiqueRepository.list(),
  log: (input: HistoriqueCreateInput) => historiqueRepository.create(input),
};
