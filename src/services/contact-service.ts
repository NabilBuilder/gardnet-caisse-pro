import { validateContact } from "@/lib/business/validators";
import { contactRepository } from "@/lib/repositories";
import type { Contact, ContactCreateInput, ContactUpdateInput, EntityId } from "@/types";
import { ensureValid } from "./base-service";

export const contactService = {
  list: (): Promise<Contact[]> => contactRepository.list(),
  getById: (id: EntityId) => contactRepository.getById(id),
  create: (input: ContactCreateInput) => {
    ensureValid(validateContact(input), "Contact");
    return contactRepository.create(input);
  },
  update: (id: EntityId, input: ContactUpdateInput) =>
    contactRepository.update(id, input),
  remove: (id: EntityId) => contactRepository.remove(id),
};
