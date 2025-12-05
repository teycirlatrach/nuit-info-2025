import React from 'react';

const DashboardPage: React.FC = () => {
  const userStats = {
    score: 850,
    rank: 24,
    challengesCompleted: 3,
    challengesInProgress: 2,
    team: 'Les Codeurs Nocturnes'
  };

  const recentChallenges = [
    { id: 1, name: 'Accessibilité Web', progress: 100, points: 250 },
    { id: 2, name: 'Performance', progress: 75, points: 150 },
    { id: 3, name: 'Design Responsive', progress: 25, points: 200 }
  ];

  const events = [
    { time: '18:00', title: 'Lancement officiel', desc: 'Révélation du thème national' },
    { time: '20:00', title: 'Premier checkpoint', desc: 'Validation des équipes' },
    { time: '02:00', title: 'Checkpoint nocturne', desc: 'Avancement intermédiaire' },
    { time: '08:00', title: 'Checkpoint matinal', desc: 'Finalisation des projets' },
    { time: '16:00', title: 'Soumission finale', desc: 'Clôture des soumissions' }
  ];

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Mon Dashboard</h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
        Suivez votre progression pendant la Nuit de l'Info
      </p>

      {/* Statistiques principales */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: '1.5rem', marginBottom: '2rem' }}>
        {[
          { label: 'Score Total', value: userStats.score, color: '#f59e0b', icon: '🏆' },
          { label: 'Classement', value: `#${userStats.rank}`, color: '#10b981', icon: '📈' },
          { label: 'Défis Terminés', value: userStats.challengesCompleted, color: '#3b82f6', icon: '🎯' },
          { label: 'Mon Équipe', value: userStats.team, color: '#8b5cf6', icon: '👥' }
        ].map((stat, index) => (
          <div key={index} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ color: '#6b7280', fontSize: '0.875rem' }}>{stat.label}</div>
                <div style={{ fontSize: '1.875rem', fontWeight: 'bold', color: stat.color }}>
                  {stat.value}
                </div>
              </div>
              <div style={{ fontSize: '2rem' }}>{stat.icon}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Contenu principal */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
        {/* Défis en cours */}
        <div className="card">
          <h2 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🎯</span>
            Mes Défis en Cours
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentChallenges.map((challenge) => (
              <div key={challenge.id} style={{ 
                border: '1px solid #e5e7eb', 
                borderRadius: '0.5rem',
                padding: '1rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0 }}>{challenge.name}</h3>
                  <span style={{ fontWeight: 'bold' }}>{challenge.points} pts</span>
                </div>
                
                <div style={{ 
                  width: '100%', 
                  backgroundColor: '#e5e7eb', 
                  borderRadius: '9999px',
                  height: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  <div 
                    style={{ 
                      backgroundColor: '#2563eb',
                      height: '100%',
                      borderRadius: '9999px',
                      width: `${challenge.progress}%`,
                      transition: 'width 0.5s ease'
                    }}
                  />
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  fontSize: '0.875rem',
                  color: '#6b7280'
                }}>
                  <span>Progression</span>
                  <span>{challenge.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Échéances */}
        <div className="card">
          <h2 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>⏰</span>
            Prochaines Échéances
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {events.map((event, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                gap: '1rem', 
                padding: '0.75rem',
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem'
              }}>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: '60px'
                }}>
                  <div style={{ fontWeight: 'bold', color: '#2563eb' }}>{event.time}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Heure</div>
                </div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1rem' }}>{event.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Conseils */}
      <div style={{
        backgroundColor: '#f0f9ff',
        border: '1px solid #bae6fd',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        marginTop: '2rem'
      }}>
        <h2 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>💡</span>
          Conseils pour la Nuit
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '1rem' }}>
          {[
            'Commencez par les défis bonus pour des points rapides',
            'Formez une équipe complémentaire',
            'Testez régulièrement votre code',
            'Documentez votre processus',
            'Prenez des pauses régulières',
            'Hydratez-vous et mangez léger'
          ].map((tip, index) => (
            <div key={index} style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              padding: '1rem',
              borderRadius: '0.5rem',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#f59e0b' }}>⭐</span>
                <span style={{ fontWeight: '500' }}>Conseil {index + 1}</span>
              </div>
              <p style={{ margin: 0, color: '#374151' }}>{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;