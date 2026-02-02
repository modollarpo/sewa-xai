
import React from 'react';
import ClinicalCard from '../components/ClinicalCard';

const meta = {
  title: 'SEWA XAI | Frequently Asked Questions',
  description: 'Find answers to common questions about SEWA XAI, clinical AI, security, compliance, and onboarding for hospitals and radiology.',
  keywords: 'SEWA XAI, FAQ, questions, support, clinical AI, security, compliance, onboarding',
};

const faqs = [
  {
    q: 'What is SEWA XAI?',
    a: 'SEWA XAI is an enterprise clinical AI platform for hospitals, radiology groups, and clinics. We automate triage, improve workflow, and deliver explainable AI results.'
  },
  {
    q: 'How do I get support?',
    a: 'Use the Contact page to reach our support team 24/7. We offer onboarding, training, and technical support for all clients.'
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. SEWA XAI uses industry best practices for data security, encryption, and compliance with HIPAA, GDPR, and ISO 27001.'
  },
  {
    q: 'How do I register?',
    a: 'Go to the Register page and fill out the form. Our team will review your application and onboard your institution.'
  },
  {
    q: 'Can SEWA XAI integrate with our EHR or PACS?',
    a: 'Yes. We offer custom integrations for major EHR and PACS vendors. Contact our team for details.'
  },
  {
    q: 'What compliance certifications do you have?',
    a: 'We are certified and compliant with HIPAA, GDPR, ISO 27001, SOC 2, and more. See our Compliance page for details.'
  },
  {
    q: 'How do I access pricing?',
    a: 'Visit the Pricing page for transparent plans, or contact us for a custom quote.'
  },
];

const FAQ: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F9FAFB] via-[#F6F8F7] to-[#E6F9F5] font-sans">
    {/* Meta tags for SEO */}
    <head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
    </head>
    <div className="w-full max-w-2xl mt-8">
      <ClinicalCard
        title={<span style={{ fontSize: '1.7rem', fontWeight: 700, color: '#1A7F6B' }}>Frequently Asked Questions</span>}
        className="shadow-lg border-0"
      >
        <div className="text-gray-700 text-base space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-semibold text-lg mb-1">{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </ClinicalCard>
    </div>
  </div>
);

export default FAQ;
