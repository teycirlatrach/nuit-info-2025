import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{ 
        background: 'linear-gradient(135deg, #1e40af, #7c3aed)',
        color: 'white',
        padding: '5rem 0'
      }}>
        <div className="container">
          <div className="text-center">
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
              Le Village Numérique Résistant
            </h1>
            <p style={{ 
              fontSize: '1.5rem', 
              maxWidth: '800px', 
              margin: '0 auto 2rem',
              opacity: 0.9
            }}>
              Comment les établissements scolaires peuvent tenir tête aux Big Tech ?
            </p>
            <p style={{
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto 2rem',
              fontStyle: 'italic'
            }}>
              "David contre Goliath, Astérix contre l'Empire numérique"
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/village" className="btn btn-primary">
                Explorer le Village
              </Link>
              <Link to="/solutions" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
                Voir les Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction NIRD */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2" style={{ gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '1rem' }}>Qu'est-ce que NIRD ?</h2>
              <p style={{ marginBottom: '1rem' }}>
                NIRD signifie <strong>Numérique Inclusif, Responsable et Durable</strong>. 
                C'est une démarche portée par un collectif enseignant qui vise à permettre 
                aux établissements scolaires d'adopter progressivement un numérique éducatif 
                plus autonome et durable.
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Face à l'empire numérique des Big Tech, l'École peut devenir un 
                <strong> village résistant</strong>, ingénieux et créatif, à l'image du 
                célèbre village d'Astérix.
              </p>
              <Link to="/village" className="btn btn-primary">
                Découvrir la démarche
              </Link>
            </div>
            <div style={{
              backgroundColor: '#f0f9ff',
              padding: '2rem',
              borderRadius: '1rem',
              border: '2px solid #bfdbfe'
            }}>
              <h3 style={{ marginBottom: '1rem', color: '#1e40af' }}>🎯 Objectifs</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Réduire la dépendance aux Big Tech',
                  'Lutter contre l\'obsolescence programmée',
                  'Promouvoir les logiciels libres',
                  'Favoriser le réemploi du matériel',
                  'Développer l\'autonomie numérique'
                ].map((item, index) => (
                  <li key={index} style={{ 
                    marginBottom: '0.75rem',
                    paddingLeft: '1.5rem',
                    position: 'relative'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: '#3b82f6'
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Problématique */}
      <section style={{ backgroundColor: '#f8fafc', padding: '4rem 0' }}>
        <div className="container">
          <h2 className="text-center mb-12">Le Défi Actuel</h2>
          
          <div className="grid md:grid-cols-3">
            {[
              {
                title: 'Obsolescence Programmée',
                desc: 'Matériel rendu obsolète alors qu\'il fonctionne encore',
                icon: '💻',
                color: '#ef4444'
              },
              {
                title: 'Coûts Élevés',
                desc: 'Licences coûteuses et abonnements indispensables',
                icon: '💰',
                color: '#f59e0b'
              },
              {
                title: 'Dépendance Structurelle',
                desc: 'Écosystèmes fermés et stockage de données hors UE',
                icon: '🔗',
                color: '#8b5cf6'
              }
            ].map((problem, index) => (
              <div key={index} className="card text-center">
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem',
                  color: problem.color
                }}>
                  {problem.icon}
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>{problem.title}</h3>
                <p style={{ color: '#6b7280' }}>{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-center mb-12">Les Solutions NIRD</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Linux Éducatif',
                desc: 'Utiliser Linux pour prolonger la vie des ordinateurs',
                icon: '🐧',
                color: '#10b981'
              },
              {
                title: 'Matériel Reconditionné',
                desc: 'Réutiliser et reconditionner le matériel existant',
                icon: '♻️',
                color: '#0d9488'
              },
              {
                title: 'Logiciels Libres',
                desc: 'Adopter des alternatives libres et gratuites',
                icon: '🆓',
                color: '#3b82f6'
              },
              {
                title: 'Communauté',
                desc: 'Mutualiser les ressources entre établissements',
                icon: '👥',
                color: '#8b5cf6'
              }
            ].map((solution, index) => (
              <div key={index} className="card text-center">
                <div style={{ 
                  fontSize: '2.5rem', 
                  marginBottom: '1rem',
                  color: solution.color
                }}>
                  {solution.icon}
                </div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem' }}>{solution.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>{solution.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/solutions" style={{ 
              color: '#2563eb', 
              fontWeight: '600', 
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}>
              Explorer toutes les solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0f766e, #059669)',
        color: 'white',
        padding: '4rem 0'
      }}>
        <div className="container text-center">
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>
            Prêt à rejoindre le village résistant ?
          </h2>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.9)', 
            maxWidth: '600px', 
            margin: '0 auto 2rem',
            fontSize: '1.1rem'
          }}>
            Contribuez à créer un numérique éducatif plus inclusif, responsable et durable.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/challenges" className="btn" style={{
              backgroundColor: 'white',
              color: '#0f766e',
              fontWeight: 'bold'
            }}>
              Relever les Défis
            </Link>
            <a 
              href="https://nird.forge.apps.education.fr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ color: 'white', borderColor: 'white' }}
            >
              Site Officiel NIRD
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;