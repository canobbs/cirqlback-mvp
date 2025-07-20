import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('cirql_data');
    setTimeout(() => {
      if (stored) {
        navigate('/dashboard');
      } else {
        navigate('/onboarding');
      }
    }, 500);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-xl">🔓 Logging you in via magic link…</p>
    </div>
  );
}