import React from 'react';

const VillagePage: React.FC = () => {
  const pillars = [
    {
      title: 'Inclusion',
      description: 'Un numérique accessible à tous, quels que soient les moyens techniques ou financiers.',
      color: '#3b82f6',
      icon: '🤝',
      actions: [
        'Former tous les acteurs (élèves, enseignants, familles)',
        'Utiliser des outils simples et accessibles',
        'Développer les compétences numériques de base'
      ]
    },
    {
      title: 'Responsabilité',
      description: 'Un numérique éthique, respectueux des données et de la vie privée.',
      color: '#10b981',
      icon: '🌱',
      actions: [
        'Protéger les données personnelles',
        'Utiliser des logiciels éthiques',
        'Promouvoir la sobriété numérique'
      ]
    },
    {
      title: 'Durabilité',
      description: 'Un numérique écologique qui lutte contre l\'obsolescence programmée.',
      color: '#0d9488',
      icon: '♻️',
      actions: [
        'Prolonger la durée de vie du matériel',
        'Réduire la consommation énergétique',
        'Favoriser le réemploi et le reconditionnement'
      ]
    }
  ];

  const actors = [
    { name: 'Élèves et éco-délégués', role: 'Sensibilisation et action', icon: '🎓' },
    { name: 'Enseignants', role: 'Mise en œuvre pédagogique', icon: '👨‍🏫' },
    { name: 'Directions d\'établissements', role: 'Pilotage et soutien', icon: '🏛️' },
    { name: 'Techniciens réseaux', role: 'Infrastructure et maintenance', icon: '🔧' },
    { name: 'Collectivités territoriales', role: 'Financement et accompagnement', icon: '🏙️' },
    { name: 'Associations partenaires', role: 'Expertise et ressources', icon: '🤝' }
  ];

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Le Village Numérique Résistant</h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '1.1rem' }}>
        Découvrez comment les établissements scolaires peuvent devenir des bastions de résistance 
        face à l'empire des Big Tech.
      </p>

      {/* Métaphore Astérix */}
      <div style={{
        backgroundColor: '#fef3c7',
        border: '2px solid #f59e0b',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛡️</div>
        <h2 style={{ color: '#92400e', marginBottom: '1rem' }}>
          Astérix contre l'Empire Numérique
        </h2>
        <p style={{ color: '#92400e', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          Comme le village gaulois qui résiste à l'Empire romain, les établissements scolaires 
          peuvent résister à l'empire numérique des Big Tech grâce à l'ingéniosité, la solidarité 
          et les solutions alternatives.
        </p>
      </div>

      {/* Les 3 piliers NIRD */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Les 3 Piliers de la Démarche NIRD
        </h2>
        
        <div className="grid md:grid-cols-3" style={{ gap: '1.5rem' }}>
          {pillars.map((pillar, index) => (
            <div key={index} className="card" style={{ 
              borderTop: `4px solid ${pillar.color}`,
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{pillar.icon}</div>
              <h3 style={{ 
                color: pillar.color,
                marginBottom: '0.5rem'
              }}>
                {pillar.title}
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                {pillar.description}
              </p>
              
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: pillar.color }}>
                  Actions concrètes :
                </h4>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0,
                  fontSize: '0.875rem'
                }}>
                  {pillar.actions.map((action, i) => (
                    <li key={i} style={{ 
                      marginBottom: '0.5rem',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: pillar.color
                      }}>•</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Les acteurs */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Les Acteurs du Village
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '1.5rem' }}>
          {actors.map((actor, index) => (
            <div key={index} className="card" style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{ 
                fontSize: '2.5rem',
                marginBottom: '1rem',
                width: '60px',
                height: '60px',
                backgroundColor: '#eff6ff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {actor.icon}
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>{actor.name}</h3>
              <p style={{ 
                color: '#6b7280',
                fontSize: '0.875rem',
                margin: 0
              }}>
                {actor.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Témoignages */}
      <section style={{
        backgroundColor: '#f0f9ff',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#1e40af' }}>
          Ils l'ont fait !
        </h2>
        
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ marginBottom: '1rem' }}>Lycée Carnot - Bruay-la-Buissière</h3>
            <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
              Premier établissement à avoir mis en place la démarche NIRD. 
              Grâce à Linux et au matériel reconditionné, le lycée a réduit 
              ses coûts de 40% tout en prolongeant la durée de vie de son parc informatique.
            </p>
            <a 
              href="https://www.cafepedagogique.net/2025/04/27/bruay-labuissiere-voyage-au-centre-du-libre-educatif/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#2563eb',
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              Lire l'article →
            </a>
          </div>
          
          <div style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            flex: 1,
            minWidth: '300px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#fef3c7',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem'
              }}>
                💬
              </div>
              <div>
                <div style={{ fontWeight: 'bold' }}>Témoignage</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  Enseignant du lycée
                </div>
              </div>
            </div>
            <blockquote style={{
              margin: 0,
              fontStyle: 'italic',
              color: '#4b5563',
              borderLeft: '3px solid #f59e0b',
              paddingLeft: '1rem'
            }}>
              "Avec NIRD, nous avons redécouvert que le numérique pouvait être 
              un outil d'émancipation plutôt qu'une source de dépendance."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Passage à l'action */}
      <div className="card" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Comment rejoindre le mouvement ?</h2>
        <p style={{ color: '#6b7280', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto' }}>
          Commencez par de petites actions et progressez à votre rythme vers 
          un numérique plus résilient.
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}>
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            Commencer le parcours
          </button>
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'transparent',
            color: '#3b82f6',
            border: '2px solid #3b82f6',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            Voir les ressources
          </button>
        </div>
      </div>
    </div>
  );
};

export default VillagePage;