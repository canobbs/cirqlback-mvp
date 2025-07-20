import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Referral() {
  const { refId } = useParams();

  useEffect(() => {
    // Save referral visit in localStorage or trigger logic
    const visits = JSON.parse(localStorage.getItem('referral_visits') || '[]');
    visits.push({ id: refId, timestamp: Date.now() });
    localStorage.setItem('referral_visits', JSON.stringify(visits));
  }, [refId]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8 text-center">
      <h1 className="text-3xl font-bold">🎉 Welcome!</h1>
      <p className="mt-4 text-lg">
        You came through a referral link:
        <span className="font-mono text-blue-600 block mt-2">{refId}</span>
      </p>
      <p className="mt-6 text-sm text-gray-500">You can now explore or sign up.</p>
    </div>
  );
}