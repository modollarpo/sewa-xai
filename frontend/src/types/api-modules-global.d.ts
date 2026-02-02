// TypeScript module declaration stubs for missing API modules

declare module "@/api/analytics" {
  export function getUsageMetrics(): Promise<any>;
}

declare module "@/api/compliance" {
  export function getComplianceStatus(): Promise<any>;
}

declare module "@/api/fhir" {
  export function searchPatients(name?: string, gender?: string): Promise<any>;
  export function getPatient(patientId: string): Promise<any>;
}
