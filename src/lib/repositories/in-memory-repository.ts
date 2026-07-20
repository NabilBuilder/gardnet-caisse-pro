/**
 * Repository générique en mémoire. Servira de fallback tant que la couche
 * distante (Supabase) n'est pas branchée. L'API est asynchrone pour rester
 * substituable par une implémentation distante sans changement d'appelants.
 */
import type { BaseEntity, EntityId } from "@/types";
import type { Repository } from "./types";

export interface InMemoryRepoOptions<TEntity, TCreate> {
  readonly seed?: readonly TEntity[];
  readonly build: (input: TCreate) => TEntity;
}

export class InMemoryRepository<
  TEntity extends BaseEntity,
  TCreate,
  TUpdate extends Partial<Record<string, unknown>>,
> implements Repository<TEntity, TCreate, TUpdate>
{
  protected items: TEntity[];
  private readonly build: (input: TCreate) => TEntity;

  constructor(options: InMemoryRepoOptions<TEntity, TCreate>) {
    this.items = [...(options.seed ?? [])];
    this.build = options.build;
  }

  async list(): Promise<TEntity[]> {
    return [...this.items];
  }

  async getById(id: EntityId): Promise<TEntity | null> {
    return this.items.find((i) => i.id === id) ?? null;
  }

  async create(input: TCreate): Promise<TEntity> {
    const entity = this.build(input);
    this.items = [entity, ...this.items];
    return entity;
  }

  async update(id: EntityId, input: TUpdate): Promise<TEntity> {
    const idx = this.items.findIndex((i) => i.id === id);
    if (idx === -1) throw new Error(`Entité introuvable: ${id}`);
    const updated = {
      ...this.items[idx],
      ...input,
      updatedAt: new Date().toISOString(),
    } as TEntity;
    this.items = this.items.map((it, i) => (i === idx ? updated : it));
    return updated;
  }

  async remove(id: EntityId): Promise<void> {
    this.items = this.items.filter((i) => i.id !== id);
  }
}
