// FHIR API client for SEWA frontend
export async function searchPatients(name?: string, gender?: string) {
  const params = new URLSearchParams();
  if (name) params.append('name', name);
  if (gender) params.append('gender', gender);
  const res = await fetch(`/api/fhir/Patient?${params.toString()}`);
  if (!res.ok) throw new Error('Failed to fetch patients');
  return res.json();
}

export async function getPatient(patientId: string) {
  const res = await fetch(`/api/fhir/Patient/${patientId}`);
  if (!res.ok) throw new Error('Failed to fetch patient');
  return res.json();
}
