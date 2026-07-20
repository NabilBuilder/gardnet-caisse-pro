/**
 * Configuration de la source de données.
 *
 * Aujourd'hui, tous les repositories sont en mémoire (mocks). Demain, un
 * simple flag pourra basculer vers une implémentation Supabase sans toucher
 * ni aux services ni à l'UI : il suffira d'exposer de nouvelles instances de
 * `Repository<T, C, U>` conformes au contrat existant.
 */
export type DataSourceKind = "in-memory" | "supabase";

export interface DataSourceConfig {
  readonly kind: DataSourceKind;
}

export const dataSourceConfig: DataSourceConfig = {
  kind: "in-memory",
};
