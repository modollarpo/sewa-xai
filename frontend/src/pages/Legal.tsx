
import React from 'react';
import ClinicalCard from '../components/ClinicalCard';

const meta = {
  title: 'SEWA XAI | Legal Notice',
  description: 'Legal information for SEWA XAI. Terms of use, copyright, and legal contacts for enterprise healthcare AI clients.',
  keywords: 'SEWA XAI, legal, copyright, terms, healthcare AI, legal notice',
};

const Legal: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F9FAFB] via-[#F6F8F7] to-[#E6F9F5] font-sans">
    {/* Meta tags for SEO */}
    <head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
    </head>
    <div className="w-full max-w-2xl mt-8">
      <ClinicalCard
        title={<span style={{ fontSize: '1.7rem', fontWeight: 700, color: '#1A7F6B' }}>Legal Notice</span>}
        className="shadow-lg border-0"
      >
        <div className="text-gray-700 text-base space-y-4">
          <p>SEWA XAI is operated by SEWA Health Technologies. All rights reserved. The information provided on this platform is for healthcare professionals and institutions only.</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>All content is for informational purposes only and not a substitute for professional medical advice or diagnosis.</li>
            <li>Unauthorized use, distribution, or reproduction of content is strictly prohibited.</li>
            <li>For legal inquiries, copyright, or compliance documentation, please <a href="/contact" className="text-[#1A7F6B] font-semibold hover:underline">contact us</a>.</li>
            <li>SEWA XAI complies with all applicable laws and regulations in the jurisdictions where it operates.</li>
          </ul>
        </div>
      </ClinicalCard>
    </div>
  </div>
);

export default Legal;
