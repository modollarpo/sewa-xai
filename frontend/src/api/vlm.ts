// VLM Explainability API client
export async function getVLMExplanation(scanId: string) {
  const res = await fetch(`/api/vlm/explanation/${scanId}`);
  if (!res.ok) throw new Error('Failed to fetch VLM explanation');
  return res.json();
}
