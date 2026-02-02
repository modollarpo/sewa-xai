
import React from 'react';
import ClinicalCard from '../components/ClinicalCard';

const meta = {
  title: 'SEWA XAI Compliance Certifications',
  description: 'SEWA XAI is certified and compliant with HIPAA, GDPR, ISO 27001, SOC 2, and more. See our audit and certification status for enterprise healthcare AI.',
  keywords: 'SEWA XAI, compliance, HIPAA, GDPR, ISO 27001, SOC 2, healthcare AI compliance, audit, certification',
};

const complianceRows = [
  { standard: 'HIPAA', status: 'Compliant', lastAudit: '2025-11-10', details: 'US healthcare data privacy and security' },
  { standard: 'GDPR', status: 'Compliant', lastAudit: '2025-10-01', details: 'EU data protection and privacy' },
  { standard: 'ISO 27001', status: 'Certified', lastAudit: '2025-09-15', details: 'Information security management' },
  { standard: 'SOC 2', status: 'Compliant', lastAudit: '2025-08-20', details: 'Service organization controls' },
  { standard: 'NIST 800-53', status: 'In Progress', lastAudit: '2026-01-15', details: 'US federal security controls' },
];

const ComplianceTable: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F9FAFB] via-[#F6F8F7] to-[#E6F9F5] font-sans">
    {/* Meta tags for SEO */}
    <head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
    </head>
    <div className="w-full max-w-4xl mt-8">
      <ClinicalCard
        title={<span style={{ fontSize: '1.7rem', fontWeight: 700, color: '#1A7F6B' }}>Compliance & Certifications</span>}
        className="shadow-lg border-0"
      >
        <p className="mb-4 text-gray-700 text-base">
          SEWA XAI is committed to the highest standards of data privacy, security, and regulatory compliance. Our platform undergoes regular audits and maintains certifications required for enterprise healthcare deployments worldwide.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-[#F6F8F7]">
              <tr>
                <th className="px-4 py-2 text-left text-[#1A202C] font-semibold">Standard</th>
                <th className="px-4 py-2 text-left text-[#1A202C] font-semibold">Status</th>
                <th className="px-4 py-2 text-left text-[#1A202C] font-semibold">Last Audit</th>
                <th className="px-4 py-2 text-left text-[#1A202C] font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              {complianceRows.map(row => (
                <tr className="border-t" key={row.standard}>
                  <td className="px-4 py-2 font-semibold">{row.standard}</td>
                  <td className="px-4 py-2 text-green-700 font-semibold">{row.status}</td>
                  <td className="px-4 py-2">{row.lastAudit}</td>
                  <td className="px-4 py-2">{row.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-gray-700 text-base">
          <h3 className="font-semibold text-lg mb-2">Our Approach</h3>
          <ul className="list-disc ml-6">
            <li>Annual third-party audits and penetration testing</li>
            <li>Continuous monitoring and incident response</li>
            <li>Role-based access controls and full audit trails</li>
            <li>Compliance with local, national, and international regulations</li>
          </ul>
          <p className="mt-2">For documentation or custom compliance requests, <a href="/contact" className="text-[#1A7F6B] font-semibold hover:underline">contact our compliance team</a>.</p>
        </div>
      </ClinicalCard>
    </div>
  </div>
);

export default ComplianceTable;
