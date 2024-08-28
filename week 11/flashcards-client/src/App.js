import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FlashcardPage from './pages/FlashcardPage';
import DashboardPage from './pages/DashboardPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Router>
      <div className="bg-dark-purple text-white min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<FlashcardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


