import React from 'react';

const EmptyState: React.FC<{ message?: string }> = ({ message }) => (
  <div className="min-h-screen flex items-center justify-center bg-[#F6F8F7]">
    <div className="bg-white p-8 rounded shadow max-w-md w-full text-center">
      <h1 className="text-2xl font-bold text-[#0D4F3D] mb-4">No Data</h1>
      <p className="text-gray-700 mb-4">{message || 'There is currently no data to display.'}</p>
      <a href="/" className="text-[#29C6B1] underline font-semibold">Return Home</a>
    </div>
  </div>
);

export default EmptyState;
