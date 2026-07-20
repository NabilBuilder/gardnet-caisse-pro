import type { BaseEntity } from "./common";
import type { ContactStatut } from "@/constants/enums";

/** Contact professionnel du répertoire. */
export interface Contact extends BaseEntity {
  readonly nom: string;
  readonly fonction?: string;
  readonly email?: string;
  readonly whatsapp?: string;
  readonly statut: ContactStatut;
}

export type ContactCreateInput = Pick<
  Contact,
  "nom" | "fonction" | "email" | "whatsapp"
> & { readonly statut?: ContactStatut };

export type ContactUpdateInput = Partial<ContactCreateInput>;
