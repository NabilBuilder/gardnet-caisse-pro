/** Instances de repositories par entité (implémentation en mémoire). */
import {
  createAvance,
  createCategorie,
  createContact,
  createDepense,
  createHistorique,
  createMois,
  createUtilisateur,
} from "@/lib/business/factories";
import type {
  Avance,
  AvanceCreateInput,
  AvanceUpdateInput,
  Categorie,
  CategorieCreateInput,
  CategorieUpdateInput,
  Contact,
  ContactCreateInput,
  ContactUpdateInput,
  Depense,
  DepenseCreateInput,
  DepenseUpdateInput,
  Historique,
  HistoriqueCreateInput,
  Mois,
  MoisCreateInput,
  MoisUpdateInput,
  Utilisateur,
  UtilisateurCreateInput,
  UtilisateurUpdateInput,
} from "@/types";
import {
  MOCK_AVANCES,
  MOCK_CATEGORIES,
  MOCK_CONTACTS,
  MOCK_DEPENSES,
  MOCK_HISTORIQUE,
  MOCK_MOIS,
  MOCK_UTILISATEURS,
} from "@/data/mocks";
import { InMemoryRepository } from "./in-memory-repository";
import type { Repository } from "./types";

export type MoisRepository = Repository<Mois, MoisCreateInput, MoisUpdateInput>;
export type CategorieRepository = Repository<Categorie, CategorieCreateInput, CategorieUpdateInput>;
export type ContactRepository = Repository<Contact, ContactCreateInput, ContactUpdateInput>;
export type DepenseRepository = Repository<Depense, DepenseCreateInput, DepenseUpdateInput>;
export type AvanceRepository = Repository<Avance, AvanceCreateInput, AvanceUpdateInput>;
export type UtilisateurRepository = Repository<Utilisateur, UtilisateurCreateInput, UtilisateurUpdateInput>;
/** L'historique est append-only : pas de mise à jour ni suppression métier. */
export type HistoriqueRepository = Pick<
  Repository<Historique, HistoriqueCreateInput, never>,
  "list" | "getById" | "create"
>;

export const moisRepository: MoisRepository = new InMemoryRepository({
  seed: MOCK_MOIS,
  build: createMois,
});

export const categorieRepository: CategorieRepository = new InMemoryRepository({
  seed: MOCK_CATEGORIES,
  build: createCategorie,
});

export const contactRepository: ContactRepository = new InMemoryRepository({
  seed: MOCK_CONTACTS,
  build: createContact,
});

export const depenseRepository: DepenseRepository = new InMemoryRepository({
  seed: MOCK_DEPENSES,
  build: createDepense,
});

export const avanceRepository: AvanceRepository = new InMemoryRepository({
  seed: MOCK_AVANCES,
  build: createAvance,
});

export const utilisateurRepository: UtilisateurRepository = new InMemoryRepository({
  seed: MOCK_UTILISATEURS,
  build: createUtilisateur,
});

export const historiqueRepository: HistoriqueRepository = new InMemoryRepository({
  seed: MOCK_HISTORIQUE,
  build: createHistorique,
});
