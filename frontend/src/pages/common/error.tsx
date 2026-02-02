import React from 'react';

const ErrorPage: React.FC<{ message?: string }> = ({ message }) => (
  <div className="min-h-screen flex items-center justify-center bg-[#FFF0F0]">
    <div className="bg-white p-8 rounded shadow max-w-md w-full text-center">
      <h1 className="text-2xl font-bold text-[#E57373] mb-4">Error</h1>
      <p className="text-gray-700 mb-4">{message || 'An unexpected error occurred. Please try again or contact support.'}</p>
      <a href="/" className="text-[#29C6B1] underline font-semibold">Return Home</a>
    </div>
  </div>
);

export default ErrorPage;
