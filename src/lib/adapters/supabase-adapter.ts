/**
 * Adaptateur Supabase (squelette).
 *
 * L'objectif est de pouvoir remplacer une implémentation `InMemoryRepository`
 * par un `SupabaseRepository` en changeant uniquement l'export dans
 * `src/lib/repositories/entity-repositories.ts`. Toute la couche services /
 * UI reste inchangée.
 *
 * Cette classe n'est pas encore branchée : elle documente le contrat attendu
 * quand Lovable Cloud sera activé.
 */
import type { BaseEntity, EntityId } from "@/types";
import type { Repository } from "@/lib/repositories/types";

export interface SupabaseLike {
  from(table: string): {
    select: (cols?: string) => Promise<{ data: unknown; error: unknown }>;
    insert: (row: unknown) => Promise<{ data: unknown; error: unknown }>;
    update: (row: unknown) => { eq: (col: string, val: unknown) => Promise<{ data: unknown; error: unknown }> };
    delete: () => { eq: (col: string, val: unknown) => Promise<{ error: unknown }> };
  };
}

export interface SupabaseRepoOptions<TCreate> {
  readonly client: SupabaseLike;
  readonly table: string;
  readonly toRow: (input: TCreate) => Record<string, unknown>;
}

export class SupabaseRepository<
  TEntity extends BaseEntity,
  TCreate,
  TUpdate extends Partial<Record<string, unknown>>,
> implements Repository<TEntity, TCreate, TUpdate>
{
  constructor(private readonly opts: SupabaseRepoOptions<TCreate>) {}

  async list(): Promise<TEntity[]> {
    throw new Error("SupabaseRepository.list() : non implémenté (activer Lovable Cloud).");
  }
  async getById(_id: EntityId): Promise<TEntity | null> {
    throw new Error("SupabaseRepository.getById() : non implémenté.");
  }
  async create(_input: TCreate): Promise<TEntity> {
    throw new Error("SupabaseRepository.create() : non implémenté.");
  }
  async update(_id: EntityId, _input: TUpdate): Promise<TEntity> {
    throw new Error("SupabaseRepository.update() : non implémenté.");
  }
  async remove(_id: EntityId): Promise<void> {
    throw new Error("SupabaseRepository.remove() : non implémenté.");
  }
}
