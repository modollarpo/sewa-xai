import ClinicalCard from '../components/ClinicalCard';
import ClinicalSection from '../components/ClinicalSection';

const PublicPricing: React.FC = () => (
  <div className="max-w-4xl mx-auto p-8">
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 32 }}>
      <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" style={{ width: 56, height: 56, borderRadius: 12, boxShadow: '0 2px 8px 0 rgba(41,198,177,0.10)' }} />
      <div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1A7F6B', margin: 0, letterSpacing: 1 }}>SEWA Pricing</h1>
        <p style={{ color: '#6B7280', fontSize: '1.2rem', margin: '8px 0 0' }}>Transparent, flexible pricing for hospitals and clinics.</p>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#408D7B]">
        <div className="text-xs text-gray-500 mb-1">Enterprise</div>
        <div className="text-2xl font-bold">£10,000/mo</div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-[#F6A700]">
        <div className="text-xs text-gray-500 mb-1">Transactional</div>
        <div className="text-2xl font-bold">£2.50/scan</div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <ClinicalSection title={<span style={{ color: '#408D7B' }}>Enterprise Subscription</span>}>
        <ul className="list-disc ml-6 text-gray-700">
          <li>£10,000/month</li>
          <li>6,000 scans included</li>
          <li>£2.50 per extra scan</li>
          <li>£25,000 implementation fee</li>
          <li>For NHS Trusts and large hospitals</li>
        </ul>
      </ClinicalSection>
      <ClinicalSection title={<span style={{ color: '#F6A700' }}>Transactional Pricing</span>}>
        <ul className="list-disc ml-6 text-gray-700">
          <li>£2.50 per scan</li>
          <li>No minimum commitment</li>
          <li>No implementation fee</li>
          <li>For private clinics and pilots</li>
        </ul>
      </ClinicalSection>
    </div>
    <div className="mt-8 text-center text-gray-600">
      <p>Contact <a href="mailto:sales@sewa.com" className="text-[#408D7B] underline">sales@sewa.com</a> for enterprise quotes or custom integrations.</p>
    </div>
  </div>
);

export default PublicPricing;
