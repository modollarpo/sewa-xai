
import React from 'react';
import ClinicalCard from '../components/ClinicalCard';

const meta = {
  title: 'SEWA XAI Pricing Plans',
  description: 'Transparent, flexible pricing for hospitals, radiology groups, and clinics. Choose the right AI plan for your clinical workflow.',
  keywords: 'SEWA XAI, pricing, plans, hospital AI, radiology AI, healthcare SaaS, enterprise AI, medical AI pricing',
};

const pricingTiers = [
  {
    plan: 'Starter',
    features: [
      'Basic AI triage tools',
      'Up to 200 scans/month',
      'Email support',
      'Standard compliance',
    ],
    price: '$99/mo',
  },
  {
    plan: 'Professional',
    features: [
      'All Starter features',
      'Up to 1,000 scans/month',
      'Advanced analytics',
      'Priority support',
      'Audit dashboard',
    ],
    price: '$299/mo',
  },
  {
    plan: 'Enterprise',
    features: [
      'All Pro features',
      'Unlimited scans',
      'Custom integrations',
      'Dedicated CSM',
      'On-premise/Hybrid deployment',
      '24/7 phone support',
      'Custom compliance reporting',
    ],
    price: 'Contact us',
  },
];

const PricingTable: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F9FAFB] via-[#F6F8F7] to-[#E6F9F5] font-sans">
    {/* Meta tags for SEO */}
    <head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
    </head>
    <div className="w-full max-w-4xl mt-8">
      <ClinicalCard
        title={<span style={{ fontSize: '1.7rem', fontWeight: 700, color: '#1A7F6B' }}>Pricing Plans</span>}
        className="shadow-lg border-0"
      >
        <p className="mb-4 text-gray-700 text-base">
          SEWA XAI offers flexible, transparent pricing for healthcare organizations of all sizes. Our tiered pricing is designed to scale with your needs, from small clinics to large hospital networks. All plans include enterprise security, compliance, and onboarding support.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-[#F6F8F7]">
              <tr>
                <th className="px-4 py-2 text-left text-[#1A202C] font-semibold">Plan</th>
                <th className="px-4 py-2 text-left text-[#1A202C] font-semibold">Key Features</th>
                <th className="px-4 py-2 text-left text-[#1A202C] font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {pricingTiers.map(tier => (
                <tr className="border-t" key={tier.plan}>
                  <td className="px-4 py-2 font-semibold">{tier.plan}</td>
                  <td className="px-4 py-2">
                    <ul className="list-disc ml-4">
                      {tier.features.map(f => <li key={f}>{f}</li>)}
                    </ul>
                  </td>
                  <td className="px-4 py-2 font-bold">{tier.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-gray-700 text-base">
          <h3 className="font-semibold text-lg mb-2">How is pricing determined?</h3>
          <p>
            Our pricing is based on the number of scans processed per month, level of support, and compliance requirements. Starter and Professional plans are best for clinics and mid-sized hospitals, while Enterprise is tailored for large networks needing custom integrations and advanced compliance.
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Volume discounts available for high-scan institutions</li>
            <li>Custom plans for research, teaching hospitals, and government</li>
            <li>Contact our sales team for a personalized quote</li>
          </ul>
        </div>
      </ClinicalCard>
    </div>
  </div>
);

export default PricingTable;
