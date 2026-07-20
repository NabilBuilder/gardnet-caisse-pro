/** Erreur métier propagée par les services (validation, règle de gestion). */
export class BusinessError extends Error {
  readonly errors: readonly string[];
  constructor(message: string, errors: readonly string[] = []) {
    super(message);
    this.name = "BusinessError";
    this.errors = errors;
  }
}

import type { ValidationResult } from "@/types";

/** Lève une `BusinessError` si la validation échoue. */
export function ensureValid(result: ValidationResult, context: string): void {
  if (!result.valid) {
    throw new BusinessError(`${context}: validation échouée`, result.errors);
  }
}
