
import React from 'react';
import ClinicalCard from '../components/ClinicalCard';

const meta = {
  title: 'SEWA XAI | Terms & Conditions',
  description: 'Terms and conditions for using SEWA XAI. Review your rights, responsibilities, and compliance obligations as a healthcare client.',
  keywords: 'SEWA XAI, terms, conditions, healthcare AI, compliance, user agreement',
};

const Terms: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F9FAFB] via-[#F6F8F7] to-[#E6F9F5] font-sans">
    {/* Meta tags for SEO */}
    <head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
    </head>
    <div className="w-full max-w-2xl mt-8">
      <ClinicalCard
        title={<span style={{ fontSize: '1.7rem', fontWeight: 700, color: '#1A7F6B' }}>Terms & Conditions</span>}
        className="shadow-lg border-0"
      >
        <div className="text-gray-700 text-base space-y-4">
          <p>Welcome to SEWA XAI. By using our platform, you agree to the following terms and conditions. Please read them carefully and contact us with any questions.</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Use of SEWA XAI is subject to compliance with all applicable laws, regulations, and institutional policies.</li>
            <li>All data entered must be accurate, complete, and not violate patient privacy or security.</li>
            <li>Unauthorized access, misuse, or reverse engineering of the platform is strictly prohibited.</li>
            <li>SEWA XAI reserves the right to update these terms at any time. Continued use constitutes acceptance of changes.</li>
            <li>For compliance, privacy, or legal questions, please <a href="/contact" className="text-[#1A7F6B] font-semibold hover:underline">contact support</a>.</li>
          </ul>
        </div>
      </ClinicalCard>
    </div>
  </div>
);

export default Terms;
