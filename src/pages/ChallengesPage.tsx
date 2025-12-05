import React, { useState } from 'react';

interface Challenge {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  participants: number;
  status: 'active' | 'upcoming' | 'completed';
}

const ChallengesPage: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const challenges: Challenge[] = [
    { id: 1, title: 'Défi National 2025', description: 'Le défi principal de la Nuit de l\'Info', category: 'national', difficulty: 'hard', points: 500, participants: 150, status: 'upcoming' },
    { id: 2, title: 'Accessibilité Web', description: 'Créer une interface accessible WCAG 2.1 AA', category: 'partner', difficulty: 'medium', points: 250, participants: 89, status: 'active' },
    { id: 3, title: 'Performance Optimale', description: 'Optimiser les performances web', category: 'bonus', difficulty: 'easy', points: 150, participants: 120, status: 'active' },
    { id: 4, title: 'Design Responsive', description: 'Créer un design adaptatif', category: 'partner', difficulty: 'medium', points: 200, participants: 75, status: 'active' },
    { id: 5, title: 'Sécurité Web', description: 'Implémenter la sécurité web', category: 'bonus', difficulty: 'hard', points: 300, participants: 45, status: 'active' }
  ];

  const filteredChallenges = filter === 'all' 
    ? challenges 
    : challenges.filter(c => c.category === filter);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'hard': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'national': return '#3b82f6';
      case 'partner': return '#8b5cf6';
      case 'bonus': return '#f97316';
      default: return '#6b7280';
    }
  };

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Défis de la Nuit</h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
        Choisissez un défi à relever pendant la Nuit de l'Info 2025
      </p>

      {/* Filtres */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => setFilter('all')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: filter === 'all' ? '#2563eb' : '#f3f4f6',
            color: filter === 'all' ? 'white' : '#374151',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          Tous
        </button>
        <button
          onClick={() => setFilter('national')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: filter === 'national' ? '#3b82f6' : '#f3f4f6',
            color: filter === 'national' ? 'white' : '#374151',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          National
        </button>
        <button
          onClick={() => setFilter('partner')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: filter === 'partner' ? '#8b5cf6' : '#f3f4f6',
            color: filter === 'partner' ? 'white' : '#374151',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          Partenaires
        </button>
        <button
          onClick={() => setFilter('bonus')}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: filter === 'bonus' ? '#f97316' : '#f3f4f6',
            color: filter === 'bonus' ? 'white' : '#374151',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: '500'
          }}
        >
          Bonus
        </button>
      </div>

      {/* Liste des défis */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {filteredChallenges.map((challenge) => (
          <div key={challenge.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
              <span className="badge" style={{ 
                backgroundColor: getCategoryColor(challenge.category) + '20',
                color: getCategoryColor(challenge.category)
              }}>
                {challenge.category === 'national' ? '🏆 National' : 
                 challenge.category === 'partner' ? '🤝 Partenaire' : '✨ Bonus'}
              </span>
              <span className="badge" style={{ 
                backgroundColor: getDifficultyColor(challenge.difficulty) + '20',
                color: getDifficultyColor(challenge.difficulty)
              }}>
                {challenge.difficulty === 'easy' ? 'Facile' : 
                 challenge.difficulty === 'medium' ? 'Moyen' : 'Difficile'}
              </span>
            </div>
            
            <h3 style={{ marginBottom: '0.5rem' }}>{challenge.title}</h3>
            <p style={{ color: '#6b7280', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
              {challenge.description}
            </p>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '1rem',
              fontSize: '0.875rem',
              color: '#6b7280'
            }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#111827' }}>{challenge.points} pts</div>
                  <div>Points</div>
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#111827' }}>{challenge.participants}</div>
                  <div>Participants</div>
                </div>
              </div>
              
              {challenge.status === 'active' && (
                <span style={{ color: '#10b981', fontWeight: '500' }}>Actif</span>
              )}
            </div>
            
            <button style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: challenge.status === 'upcoming' ? '#9ca3af' : '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: challenge.status === 'upcoming' ? 'not-allowed' : 'pointer',
              fontWeight: '600',
              opacity: challenge.status === 'upcoming' ? 0.7 : 1
            }}>
              {challenge.status === 'upcoming' ? 'Bientôt disponible' : 'Relever le défi'}
            </button>
          </div>
        ))}
      </div>

      {/* Statistiques */}
      <div style={{
        background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
        color: 'white',
        borderRadius: '0.75rem',
        padding: '2rem',
        marginTop: '3rem'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'white' }}>Statistiques Globales</h2>
        <div className="grid md:grid-cols-3" style={{ textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{challenges.length}</div>
            <div style={{ opacity: 0.9 }}>Défis disponibles</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
              {challenges.reduce((sum, c) => sum + c.participants, 0)}
            </div>
            <div style={{ opacity: 0.9 }}>Participants total</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
              {challenges.reduce((sum, c) => sum + c.points, 0)}
            </div>
            <div style={{ opacity: 0.9 }}>Points à gagner</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;