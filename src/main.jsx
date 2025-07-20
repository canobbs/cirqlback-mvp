import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Referral from './pages/Referral';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/referral/:refId" element={<Referral />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);