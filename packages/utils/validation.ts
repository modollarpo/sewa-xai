// Shared validation utilities (placeholder)
// For future: zod or class-validator wrappers for DTOs

export function isValidNHSCode(code: string): boolean {
  // Simple NHS Trust code validation (UK)
  return /^[A-Z0-9]{3,6}$/.test(code);
}
