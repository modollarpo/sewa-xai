
import React, { useState } from 'react';
import ClinicalCard from '../components/ClinicalCard';
import ClinicalButton from '../components/ClinicalButton';
import ClinicalNotification from '../components/ClinicalNotification';

const meta = {
  title: 'SEWA XAI | Contact Support',
  description: 'Contact SEWA XAI support for hospitals, radiology groups, and clinics. 24/7 enterprise support, onboarding, and technical help.',
  keywords: 'SEWA XAI, contact, support, help, onboarding, healthcare AI, enterprise support',
};

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setStatus('Thank you for contacting SEWA XAI! Our enterprise support team will respond within 24 hours.');
      setLoading(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F9FAFB] via-[#F6F8F7] to-[#E6F9F5] font-sans">
      {/* Meta tags for SEO */}
      <head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
      </head>
      {status && (
        <ClinicalNotification message={status} type="success" onClose={() => setStatus(null)} />
      )}
      <div className="w-full max-w-lg mt-8">
        <ClinicalCard
          title={
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <span style={{ fontSize: '1.7rem', fontWeight: 700, color: '#1A7F6B', letterSpacing: 1 }}>Contact Support</span>
              <span style={{ color: '#6B7280', fontSize: '1.05rem', marginTop: 2 }}>24/7 enterprise support for all clients</span>
            </div>
          }
          className="shadow-lg border-0"
        >
          <div className="mb-4 text-gray-700 text-base">
            <p>For urgent issues, onboarding, or technical help, please use the form below. Our support team is available 24/7 for hospitals, radiology groups, and clinics.</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Enterprise onboarding and training</li>
              <li>Technical support and troubleshooting</li>
              <li>Compliance and documentation requests</li>
              <li>Custom integration and partnership inquiries</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
            <label className="font-medium text-[#1A202C]">
              Name
              <input
                className="w-full border border-gray-200 rounded px-3 py-2 mt-1 text-base bg-[#F9FAFB] focus:border-[#29C6B1] outline-none transition"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                placeholder="Your name"
              />
            </label>
            <label className="font-medium text-[#1A202C]">
              Email
              <input
                className="w-full border border-gray-200 rounded px-3 py-2 mt-1 text-base bg-[#F9FAFB] focus:border-[#29C6B1] outline-none transition"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="you@domain.com"
              />
            </label>
            <label className="font-medium text-[#1A202C]">
              Message
              <textarea
                className="w-full border border-gray-200 rounded px-3 py-2 mt-1 text-base bg-[#F9FAFB] focus:border-[#29C6B1] outline-none transition"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="How can we help you?"
              />
            </label>
            <ClinicalButton type="submit" disabled={loading} className="font-semibold text-lg rounded bg-[#1A7F6B] text-white py-3 mt-2">
              {loading ? 'Sending...' : 'Send Message'}
            </ClinicalButton>
          </form>
        </ClinicalCard>
      </div>
    </div>
  );
};

export default Contact;
