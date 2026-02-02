import React, { useState } from 'react';
import ClinicalButton from '../../components/ClinicalButton';

const steps = [
  'Organization Info',
  'Admin Details',
  'Facilities Setup',
  'Cloud Gateway Setup',
  'Review & Complete',
];

const ClinicOnboarding: React.FC = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">Clinic Onboarding</h1>
        <p className="mb-6 text-gray-700">Self-service onboarding for clinics. Complete each step to gain access to SEWA.</p>
        <div className="bg-[#F6F8F7] rounded-lg p-6 shadow mb-6">
          <div className="flex items-center mb-4">
            {steps.map((label, idx) => (
              <React.Fragment key={label}>
                <div className={`flex items-center ${idx === step ? 'text-[#29C6B1]' : 'text-gray-400'}`}>
                  <span className="font-bold">{idx + 1}</span>
                  <span className="ml-2 text-sm">{label}</span>
                </div>
                {idx < steps.length - 1 && <span className="mx-2">→</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="mb-4">
            <div className="text-[#0D4F3D] font-semibold">Step {step + 1}: {steps[step]}</div>
            {/* Step content would go here */}
          </div>
          <div className="flex justify-between">
            <ClinicalButton
              className="px-4 py-2 font-semibold"
              onClick={() => setStep(s => Math.max(0, s - 1))}
              disabled={step === 0}
            >Back</ClinicalButton>
            <ClinicalButton
              className="px-4 py-2 font-semibold"
              onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))}
              disabled={step === steps.length - 1}
            >Next</ClinicalButton>
          </div>
        </div>
        <div className="text-sm text-gray-500">Need help? <a href="/support" className="text-[#29C6B1] underline">Contact support</a>.</div>
      </div>
    </div>
  );
};

export default ClinicOnboarding;
