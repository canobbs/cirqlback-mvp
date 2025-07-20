import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('cirql_data');
    if (stored) setData(JSON.parse(stored));
  }, []);

  if (!data) return <div className="p-8 text-center">No data found.</div>;

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">📊 Cirqlback Dashboard</h1>
      <div className="w-full max-w-md space-y-4">
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-1">🏪 Business Info</h2>
          <p><strong>Name:</strong> {data.business}</p>
          <p><strong>Address:</strong> {data.address}</p>
          <p><strong>Category:</strong> {data.category}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-1">📣 Campaign</h2>
          <p><strong>Type:</strong> {data.campaignType}</p>
          <p><strong>Message:</strong> {data.campaignMessage}</p>
          <p><strong>Reward:</strong> {data.reward}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-1">🔗 Referral Link</h2>
          <a href={data.referralLink} target="_blank" className="text-blue-600 underline">{data.referralLink}</a>
        </div>
      </div>
    </div>
  );
}