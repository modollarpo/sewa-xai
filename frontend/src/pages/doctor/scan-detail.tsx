import React from 'react';
import ExplainabilityPanel from '../../components/shared/ExplainabilityPanel';
import AuditTimeline from '../../components/shared/AuditTimeline';
import ConfidenceBadge from '../../components/shared/ConfidenceBadge';
import UncertaintyWarning from '../../components/shared/UncertaintyWarning';

const mockScan = {
  id: 'scan-001',
  patient: 'John Doe',
  study: 'Chest X-ray',
  aiFinding: 'Possible pneumonia',
  confidence: 0.92,
  uncertainty: 0.08,
  gradCamImageUrl: '/mock/gradcam.png',
  reasoningPath: 'AI detected opacity in right lower lobe. Pattern matches pneumonia with high confidence.',
  auditEvents: [
    { timestamp: '2026-01-27 09:12', user: 'AI Engine', action: 'Triage: High risk', details: 'Confidence 92%' },
    { timestamp: '2026-01-27 09:13', user: 'Dr. Smith', action: 'Reviewed', details: 'Agreed with AI' },
  ],
};

const ScanDetail: React.FC = () => (
  <div className="min-h-screen bg-white p-8">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-[#0D4F3D] mb-2">Scan Detail</h1>
      <div className="mb-4 text-gray-700">Patient: <span className="font-semibold">{mockScan.patient}</span> | Study: <span className="font-semibold">{mockScan.study}</span></div>
      <div className="mb-6">
        <ConfidenceBadge confidence={mockScan.confidence} />
        <span className="mx-2" />
        <UncertaintyWarning uncertainty={mockScan.uncertainty} />
      </div>
      <div className="mb-6">
        <ExplainabilityPanel reasoningPath={mockScan.reasoningPath} gradCamImageUrl={mockScan.gradCamImageUrl} />
      </div>
      <div className="mb-6">
        <AuditTimeline events={mockScan.auditEvents} />
      </div>
      <div className="flex gap-4 mt-8">
        <button className="bg-[#0D4F3D] text-white px-6 py-2 rounded font-semibold hover:bg-[#29C6B1] transition">Sign Off (Human Override)</button>
        <button className="bg-[#E57373] text-white px-6 py-2 rounded font-semibold hover:bg-[#c0392b] transition">Flag for Manual Review</button>
      </div>
      <div className="text-xs text-gray-500 mt-6">AI suggestions are for clinical support only. Final decision belongs to the clinician. All actions are logged for audit.</div>
    </div>
  </div>
);

export default ScanDetail;
