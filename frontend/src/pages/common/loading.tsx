import React from 'react';

const LoadingState: React.FC<{ message?: string }> = ({ message }) => (
  <div className="min-h-screen flex items-center justify-center bg-[#F6F8F7]">
    <div className="bg-white p-8 rounded shadow max-w-md w-full text-center">
      <svg className="mx-auto mb-4 animate-spin" width="40" height="40" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" fill="none" stroke="#29C6B1" strokeWidth="5" strokeDasharray="31.4 31.4"/></svg>
      <h1 className="text-2xl font-bold text-[#0D4F3D] mb-2">Loading</h1>
      <p className="text-gray-700">{message || 'Please wait while we load your data.'}</p>
    </div>
  </div>
);

export default LoadingState;
