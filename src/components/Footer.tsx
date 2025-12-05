import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer" style={{ 
      backgroundColor: '#1e293b',
      color: 'white',
      padding: '3rem 0',
      marginTop: 'auto'
    }}>
      <div className="container text-center">
        <h3 style={{ color: 'white', marginBottom: '1rem' }}>
          Village Numérique Résistant - NIRD 2025
        </h3>
        <p style={{ maxWidth: '600px', margin: '0 auto 1rem', opacity: 0.8 }}>
          Une initiative du collectif enseignant NIRD pour un numérique éducatif 
          inclusif, responsable et durable.
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '2rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <a 
            href="https://nird.forge.apps.education.fr/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#93c5fd', textDecoration: 'none' }}
          >
            Site officiel NIRD
          </a>
          <a 
            href="https://forge.apps.education.fr/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#93c5fd', textDecoration: 'none' }}
          >
            La Forge des Communs
          </a>
          <a 
            href="https://www.cafepedagogique.net/2025/04/27/bruay-labuissiere-voyage-au-centre-du-libre-educatif/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#93c5fd', textDecoration: 'none' }}
          >
            Article Café Pédagogique
          </a>
        </div>
        
        <p style={{ 
          marginTop: '2rem', 
          fontSize: '0.875rem', 
          opacity: 0.6,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '1rem'
        }}>
          Développé pendant la Nuit de l'Info 2025 - Licence libre - Ressources libres de droit
        </p>
      </div>
    </footer>
  );
};

export default Footer;