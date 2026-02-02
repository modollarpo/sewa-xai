import React, { useState } from 'react';
import ClinicalButton from '../components/ClinicalButton';
import ClinicalCard from '../components/ClinicalCard';
import ClinicalNotification from '../components/ClinicalNotification';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<any>({ username: 'doctor1', email: 'doctor1@hospital.com', role: 'doctor' });
  const [status, setStatus] = useState<string | null>(null);

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Updating profile...');
    // Replace with real API call
    setTimeout(() => setStatus('Profile updated.'), 800);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center font-sans">
      {status && (
        <ClinicalNotification message={status} type={status.includes('updated') ? 'success' : 'info'} onClose={() => setStatus(null)} />
      )}
      <div className="w-full max-w-md">
        <ClinicalCard title={<span style={{ color: '#1A7F6B' }}>Your Profile</span>}>
          <div className="flex flex-col items-center mb-6">
            <img src="/Images/Logo/sewa_logo_new.png" alt="SEWA XAI Logo" className="w-16 h-16 mb-3" />
            <p className="text-gray-500 text-base mb-0">Manage your account details and preferences</p>
          </div>
          <form onSubmit={handleUpdateProfile} className="flex flex-col gap-5">
            <label className="font-medium text-[#1A202C]">
              Username
              <input
                className="w-full border border-gray-200 rounded px-3 py-2 mt-1 text-base bg-[#F9FAFB] focus:border-[#29C6B1] outline-none transition"
                value={profile.username}
                readOnly
              />
            </label>
            <label className="font-medium text-[#1A202C]">
              Email
              <input
                className="w-full border border-gray-200 rounded px-3 py-2 mt-1 text-base bg-[#F9FAFB] focus:border-[#29C6B1] outline-none transition"
                value={profile.email}
                onChange={e => setProfile({ ...profile, email: e.target.value })}
              />
            </label>
            <label className="font-medium text-[#1A202C]">
              Role
              <input
                className="w-full border border-gray-200 rounded px-3 py-2 mt-1 text-base bg-[#F9FAFB] focus:border-[#29C6B1] outline-none transition"
                value={profile.role}
                readOnly
              />
            </label>
            <ClinicalButton type="submit" className="font-semibold text-lg rounded bg-[#1A7F6B] text-white py-3 mt-2">
              Update Profile
            </ClinicalButton>
          </form>
          <div className="mt-6 text-center text-gray-500 text-sm">
            Need to change your password?{' '}
            <a href="/reset" className="text-[#F6A700] font-semibold hover:underline">Reset it here</a>
          </div>
        </ClinicalCard>
      </div>
    </div>
  );
};

export default Profile;
