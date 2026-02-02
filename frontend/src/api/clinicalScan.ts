import axios from 'axios';
import { ClinicalScan } from 'types/clinical';

export async function getClinicalScans(params: Partial<ClinicalScan> = {}): Promise<ClinicalScan[]> {
  const res = await axios.get('/api/clinical-scan', { params });
  return res.data;
}

export async function flagClinicalScan(id: string, status: 'flagged' | 'pending' | 'reviewed') {
  const res = await axios.patch(`/api/clinical-scan/${id}/flag`, { status });
  return res.data;
}
