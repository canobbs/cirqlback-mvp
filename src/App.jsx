import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('cirql_data');
    if (stored) navigate('/dashboard');
    else navigate('/onboarding');
  }, []);

  return null;
}