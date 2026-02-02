
import React from 'react';
import ClinicalCard from '../components/ClinicalCard';

const meta = {
  title: 'SEWA XAI | Page Not Found',
  description: '404 error page for SEWA XAI. The page you are looking for does not exist. Return to the home page or contact support.',
  keywords: 'SEWA XAI, 404, not found, error, healthcare AI',
};

const NotFound: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F9FAFB] via-[#F6F8F7] to-[#E6F9F5] font-sans">
    {/* Meta tags for SEO */}
    <head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
    </head>
    <div className="w-full max-w-md mt-8">
      <ClinicalCard
        title={<span style={{ fontSize: '2rem', fontWeight: 700, color: '#EF4444' }}>404 - Not Found</span>}
        className="shadow-lg border-0 text-center"
      >
        <p className="text-lg text-gray-600 mb-4">Sorry, the page you are looking for does not exist or has been moved.</p>
        <a href="/" className="text-[#1A7F6B] font-semibold hover:underline">Return to Home</a>
        <div className="mt-4 text-sm text-gray-500">If you believe this is an error, please <a href="/contact" className="text-[#F6A700] font-semibold hover:underline">contact support</a>.</div>
      </ClinicalCard>
    </div>
  </div>
);

export default NotFound;
