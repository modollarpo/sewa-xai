
import React from 'react';
import ClinicalCard from '../components/ClinicalCard';

const meta = {
  title: 'SEWA XAI | Meet Our Team',
  description: 'Meet the SEWA XAI team: clinicians, engineers, and healthcare leaders building the future of clinical AI.',
  keywords: 'SEWA XAI, team, leadership, clinical AI, healthcare, engineers, clinicians',
};

const team = [
  {
    name: 'Dr. Aisha Rahman',
    title: 'Chief Medical Officer',
    bio: 'Board-certified radiologist and digital health leader with 15+ years of experience in clinical AI and workflow transformation.'
  },
  {
    name: 'Samuel Lee',
    title: 'Chief Technology Officer',
    bio: 'AI engineer and architect, previously at top medtech startups. Expert in scalable, secure healthcare platforms.'
  },
  {
    name: 'Priya Patel',
    title: 'Head of Product',
    bio: 'Product leader with a passion for user-centered design and clinical innovation. Formerly at global EHR vendors.'
  },
  {
    name: 'Fatima Al-Mansouri',
    title: 'Compliance Lead',
    bio: 'Specialist in healthcare compliance, privacy, and regulatory affairs. Drives SEWA’s audit and certification programs.'
  },
  {
    name: 'Omar El-Sayed',
    title: 'Customer Success',
    bio: 'Dedicated to client onboarding, training, and support. Ensures every SEWA customer achieves clinical impact.'
  },
];

const Team: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F9FAFB] via-[#F6F8F7] to-[#E6F9F5] font-sans">
    {/* Meta tags for SEO */}
    <head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
    </head>
    <div className="w-full max-w-2xl mt-8">
      <ClinicalCard
        title={<span style={{ fontSize: '1.7rem', fontWeight: 700, color: '#1A7F6B' }}>Our Team</span>}
        className="shadow-lg border-0"
      >
        <div className="text-gray-700 text-base space-y-4">
          <ul className="space-y-6">
            {team.map(member => (
              <li key={member.name}>
                <strong>{member.name}</strong> – {member.title}
                <div className="text-sm text-gray-600 mt-1">{member.bio}</div>
              </li>
            ))}
          </ul>
          <p className="mt-4">We are a diverse, mission-driven team dedicated to transforming healthcare with AI. <a href="/about" className="text-[#1A7F6B] font-semibold hover:underline">Learn more</a> or <a href="/contact" className="text-[#F6A700] font-semibold hover:underline">contact us</a>.</p>
        </div>
      </ClinicalCard>
    </div>
  </div>
);

export default Team;
