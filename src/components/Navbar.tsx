import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <span style={{ color: '#2563eb' }}>🛡️</span>
          <span>Village Numérique Résistant</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/village" className="nav-link">Le Village</Link>
          <Link to="/solutions" className="nav-link">Solutions</Link>
          <Link to="/challenges" className="nav-link">Défis</Link>
          <Link to="/dashboard" className="nav-link">Progression</Link>
          <Link to="/challenges" className="btn btn-primary">Rejoindre</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;