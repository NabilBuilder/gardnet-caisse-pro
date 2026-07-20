/** Validateurs métier : règles de gestion partagées entre UI et services. */
import {
  DESCRIPTION_MAX_LENGTH,
  LABEL_MAX_LENGTH,
  MAX_AMOUNT,
  MIN_AMOUNT,
} from "@/constants/business";
import type {
  AvanceCreateInput,
  CategorieCreateInput,
  ContactCreateInput,
  DepenseCreateInput,
  MoisCreateInput,
  UtilisateurCreateInput,
  ValidationResult,
} from "@/types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function ok(): ValidationResult {
  return { valid: true, errors: [] };
}

function ko(errors: string[]): ValidationResult {
  return { valid: errors.length === 0, errors };
}

function validateAmount(errors: string[], montant: number): void {
  if (!Number.isFinite(montant)) errors.push("Montant invalide.");
  else if (montant < MIN_AMOUNT) errors.push(`Le montant doit être ≥ ${MIN_AMOUNT}.`);
  else if (montant > MAX_AMOUNT) errors.push(`Le montant doit être ≤ ${MAX_AMOUNT}.`);
}

function validateIsoDate(errors: string[], date: string, field = "Date"): void {
  if (!ISO_DATE_RE.test(date) || Number.isNaN(Date.parse(date))) {
    errors.push(`${field} invalide (format attendu YYYY-MM-DD).`);
  }
}

function validateLabel(errors: string[], value: string, field: string): void {
  const trimmed = value?.trim() ?? "";
  if (!trimmed) errors.push(`${field} requis.`);
  else if (trimmed.length > LABEL_MAX_LENGTH)
    errors.push(`${field} trop long (max ${LABEL_MAX_LENGTH}).`);
}

function validateDescription(errors: string[], value?: string): void {
  if (value && value.length > DESCRIPTION_MAX_LENGTH) {
    errors.push(`Description trop longue (max ${DESCRIPTION_MAX_LENGTH}).`);
  }
}

export function validateCategorie(input: CategorieCreateInput): ValidationResult {
  const errors: string[] = [];
  validateLabel(errors, input.nom, "Nom");
  validateDescription(errors, input.description);
  return ko(errors);
}

export function validateContact(input: ContactCreateInput): ValidationResult {
  const errors: string[] = [];
  validateLabel(errors, input.nom, "Nom");
  if (input.email && !EMAIL_RE.test(input.email)) errors.push("Email invalide.");
  if (input.whatsapp && !/^\+?[0-9\s-]{6,20}$/.test(input.whatsapp))
    errors.push("Numéro WhatsApp invalide.");
  return ko(errors);
}

export function validateDepense(input: DepenseCreateInput): ValidationResult {
  const errors: string[] = [];
  validateIsoDate(errors, input.date);
  validateAmount(errors, input.montant);
  if (!input.categorieId) errors.push("Catégorie requise.");
  if (!input.moisId) errors.push("Mois requis.");
  validateDescription(errors, input.description);
  return ko(errors);
}

export function validateAvance(input: AvanceCreateInput): ValidationResult {
  const errors: string[] = [];
  validateIsoDate(errors, input.date);
  validateAmount(errors, input.montant);
  if (!input.moisId) errors.push("Mois requis.");
  validateDescription(errors, input.observation);
  return ko(errors);
}

export function validateMois(input: MoisCreateInput): ValidationResult {
  const errors: string[] = [];
  if (!Number.isInteger(input.annee) || input.annee < 2000 || input.annee > 2100)
    errors.push("Année invalide.");
  if (!Number.isInteger(input.mois) || input.mois < 1 || input.mois > 12)
    errors.push("Mois invalide (1-12).");
  if (!Number.isFinite(input.reportPrecedent)) errors.push("Report précédent invalide.");
  return ko(errors);
}

export function validateUtilisateur(input: UtilisateurCreateInput): ValidationResult {
  const errors: string[] = [];
  validateLabel(errors, input.nom, "Nom");
  if (!input.email || !EMAIL_RE.test(input.email)) errors.push("Email invalide.");
  return ko(errors);
}

export const _validationHelpers = { ok, validateAmount, validateIsoDate };
