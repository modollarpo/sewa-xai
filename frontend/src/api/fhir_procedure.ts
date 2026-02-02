// FHIR Procedure API client
export async function searchProcedures(patientId?: string, code?: string) {
  const params = new URLSearchParams();
  if (patientId) params.append('patient_id', patientId);
  if (code) params.append('code', code);
  const res = await fetch(`/api/fhir/Procedure?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch procedures');
  return res.json();
}
