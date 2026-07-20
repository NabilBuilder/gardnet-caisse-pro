/** Contrats génériques du Repository Pattern. */
import type { EntityId } from "@/types";

export interface Repository<TEntity, TCreate, TUpdate> {
  list(): Promise<TEntity[]>;
  getById(id: EntityId): Promise<TEntity | null>;
  create(input: TCreate): Promise<TEntity>;
  update(id: EntityId, input: TUpdate): Promise<TEntity>;
  remove(id: EntityId): Promise<void>;
}
