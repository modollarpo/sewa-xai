
import React from 'react';
import ClinicalCard from '../components/ClinicalCard';

const meta = {
  title: 'About SEWA XAI | Our Mission & Vision',
  description: 'Learn about SEWA XAI’s mission, vision, and values. Meet the team building the future of clinical AI for hospitals and radiology.',
  keywords: 'SEWA XAI, about, mission, vision, values, clinical AI, healthcare innovation, team',
};

const About: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F9FAFB] via-[#F6F8F7] to-[#E6F9F5] font-sans">
    {/* Meta tags for SEO */}
    <head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
    </head>
    <div className="w-full max-w-2xl mt-8">
      <ClinicalCard
        title={<span style={{ fontSize: '1.7rem', fontWeight: 700, color: '#1A7F6B' }}>About SEWA XAI</span>}
        className="shadow-lg border-0"
      >
        <div className="text-gray-700 text-base space-y-4">
          <h2 className="font-semibold text-lg mb-2">Our Mission</h2>
          <p>To empower healthcare professionals and institutions with explainable, secure, and compliant AI that improves patient outcomes and operational efficiency.</p>
          <h2 className="font-semibold text-lg mb-2">Our Vision</h2>
          <p>To be the global leader in clinical AI, trusted by hospitals, radiology groups, and clinics for safe, transparent, and innovative solutions.</p>
          <h2 className="font-semibold text-lg mb-2">Our Values</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Patient safety and data privacy first</li>
            <li>Transparency and explainability in AI</li>
            <li>Continuous innovation and learning</li>
            <li>Collaboration with clinicians and partners</li>
            <li>Equity and accessibility in healthcare</li>
          </ul>
          <p>SEWA XAI is built by a diverse, mission-driven team of clinicians, engineers, and healthcare leaders. <a href="/team" className="text-[#1A7F6B] font-semibold hover:underline">Meet our team</a> or <a href="/contact" className="text-[#F6A700] font-semibold hover:underline">contact us</a> to learn more.</p>
        </div>
      </ClinicalCard>
    </div>
  </div>
);

export default About;
