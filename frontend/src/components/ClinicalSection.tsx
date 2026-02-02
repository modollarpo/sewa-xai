import React from 'react';

interface ClinicalSectionProps {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const ClinicalSection: React.FC<ClinicalSectionProps> = ({ title, children, className }) => (
  <section className={`bg-white rounded-lg shadow-md p-6 mb-8 ${className || ''}`}>
    <h2 className="text-xl font-bold mb-4 text-[#408D7B] tracking-tight">{title}</h2>
    {children}
  </section>
);

export default ClinicalSection;
