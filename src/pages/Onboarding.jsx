import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    business: '',
    address: '',
    category: '',
    campaignType: '',
    campaignMessage: '',
    reward: '',
    referralLink: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('cirql_data', JSON.stringify(form));
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Cirqlback Onboarding</h2>
        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={form[key]}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        ))}
        <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Generate Magic Link & Go to Dashboard
        </button>
      </form>
    </div>
  );
}