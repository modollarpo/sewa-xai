// FHIR Encounter API client
export async function searchEncounters(patientId?: string, status?: string) {
  const params = new URLSearchParams();
  if (patientId) params.append('patient_id', patientId);
  if (status) params.append('status', status);
  const res = await fetch(`/api/fhir/Encounter?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch encounters');
  return res.json();
}
