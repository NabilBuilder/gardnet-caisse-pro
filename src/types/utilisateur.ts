import type { BaseEntity } from "./common";
import type { UtilisateurType } from "@/constants/enums";

/** Utilisateur applicatif. Les rôles sont stockés dans `type`. */
export interface Utilisateur extends BaseEntity {
  readonly nom: string;
  readonly email: string;
  readonly type: UtilisateurType;
  readonly actif: boolean;
  readonly avatarUrl?: string;
}

export type UtilisateurCreateInput = Pick<
  Utilisateur,
  "nom" | "email" | "type"
> & {
  readonly actif?: boolean;
  readonly avatarUrl?: string;
};

export type UtilisateurUpdateInput = Partial<UtilisateurCreateInput>;
