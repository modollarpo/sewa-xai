
import React from 'react';
import ClinicalCard from '../components/ClinicalCard';

const meta = {
  title: 'SEWA XAI | Privacy Policy',
  description: 'SEWA XAI privacy policy for hospitals, radiology groups, and clinics. Learn how we protect your data and ensure compliance.',
  keywords: 'SEWA XAI, privacy, policy, data protection, healthcare AI, compliance',
};

const Privacy: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F9FAFB] via-[#F6F8F7] to-[#E6F9F5] font-sans">
    {/* Meta tags for SEO */}
    <head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
    </head>
    <div className="w-full max-w-2xl mt-8">
      <ClinicalCard
        title={<span style={{ fontSize: '1.7rem', fontWeight: 700, color: '#1A7F6B' }}>Privacy Policy</span>}
        className="shadow-lg border-0"
      >
        <div className="text-gray-700 text-base space-y-4">
          <p>Your privacy is important to us. This policy explains how SEWA XAI collects, uses, and protects your information in compliance with healthcare regulations.</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>We only collect data necessary for clinical, operational, and regulatory purposes.</li>
            <li>All data is encrypted, stored securely, and access is restricted to authorized personnel only.</li>
            <li>We do not share your information with third parties without explicit consent, except as required by law.</li>
            <li>Clients may request data access, correction, or deletion at any time.</li>
            <li>For more details or a copy of our full privacy policy, please contact our support team.</li>
          </ul>
          <p>Questions? <a href="/contact" className="text-[#1A7F6B] font-semibold hover:underline">Contact support</a>.</p>
        </div>
      </ClinicalCard>
    </div>
  </div>
);

export default Privacy;
