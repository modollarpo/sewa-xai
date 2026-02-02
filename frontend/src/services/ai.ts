// Centralized AI API service for SEWA frontend
export async function aiInfer(imageRef: string): Promise<any> {
  const res = await fetch('/backend/ai-inference/run', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageRef }),
  });
  if (!res.ok) throw new Error('AI inference error');
  return res.json();
}
