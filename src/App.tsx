import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ChallengesPage from './pages/ChallengesPage';
import DashboardPage from './pages/DashboardPage';
import VillagePage from './pages/VillagesPage';
import SolutionsPage from './pages/SolutionsPage';

function App() {
  return (
    <Router>
      <div className="app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/village" element={<VillagePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;