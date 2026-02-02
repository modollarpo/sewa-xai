// Wildcard module declaration for all modules in src/api with named exports
declare module "../../api/*" {
  export const getUsageMetrics: any;
  export const getComplianceStatus: any;
  export const searchPatients: any;
  export const getPatient: any;
}
