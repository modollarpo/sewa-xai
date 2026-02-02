import React from 'react';
import ConfidenceBadge from '../../components/shared/ConfidenceBadge';
import UncertaintyWarning from '../../components/shared/UncertaintyWarning';

const mockWorklist = [
  { id: 'scan-001', patient: 'John Doe', study: 'Chest X-ray', risk: 'High', confidence: 0.92, uncertainty: 0.08, status: 'Pending', urgent: true },
  { id: 'scan-002', patient: 'Jane Smith', study: 'Head CT', risk: 'Moderate', confidence: 0.81, uncertainty: 0.19, status: 'Pending', urgent: false },
  { id: 'scan-003', patient: 'Sam Lee', study: 'Abdomen MRI', risk: 'Low', confidence: 0.67, uncertainty: 0.33, status: 'Pending', urgent: false },
];

const DoctorDashboard: React.FC = () => (
  <div className="min-h-screen bg-white p-8">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-[#0D4F3D] mb-4">Doctor Dashboard</h1>
      <p className="mb-6 text-gray-700">AI-prioritized worklist. High-risk findings are shown first. All AI outputs require human review and sign-off.</p>
      <table className="w-full bg-white rounded shadow mb-8">
        <thead>
          <tr className="bg-[#F6F8F7] text-[#0D4F3D]">
            <th className="py-2 px-4 text-left">Patient</th>
            <th className="py-2 px-4 text-left">Study</th>
            <th className="py-2 px-4 text-left">Risk</th>
            <th className="py-2 px-4 text-left">AI Confidence</th>
            <th className="py-2 px-4 text-left">Uncertainty</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {mockWorklist.map(scan => (
            <tr key={scan.id} className={scan.urgent ? 'bg-[#FFF7F7]' : ''}>
              <td className="py-2 px-4 font-semibold">{scan.patient}</td>
              <td className="py-2 px-4">{scan.study}</td>
              <td className="py-2 px-4">{scan.risk}</td>
              <td className="py-2 px-4"><ConfidenceBadge confidence={scan.confidence} /></td>
              <td className="py-2 px-4"><UncertaintyWarning uncertainty={scan.uncertainty} /></td>
              <td className="py-2 px-4">{scan.status}</td>
              <td className="py-2 px-4"><a href={`/doctor/scan/${scan.id}`} className="text-[#29C6B1] underline font-semibold">Review</a></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-sm text-gray-500">All actions are logged for audit. AI suggestions are never final decisions.</div>
    </div>
  </div>
);

export default DoctorDashboard;
