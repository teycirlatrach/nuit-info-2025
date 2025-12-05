import React from 'react';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      category: 'Systèmes d\'exploitation',
      items: [
        {
          name: 'Linux Éducatif',
          description: 'Distribution Linux spécialement adaptée pour l\'éducation',
          link: 'https://edubuntu.org/',
          icon: '🐧'
        },
        {
          name: 'Ubuntu',
          description: 'Alternative libre à Windows, facile à utiliser',
          link: 'https://ubuntu.com/',
          icon: '🖥️'
        }
      ]
    },
    {
      category: 'Bureautique',
      items: [
        {
          name: 'LibreOffice',
          description: 'Alternative complète à Microsoft Office',
          link: 'https://www.libreoffice.org/',
          icon: '📝'
        },
        {
          name: 'OnlyOffice',
          description: 'Suite bureautique collaborative en ligne',
          link: 'https://www.onlyoffice.com/',
          icon: '📊'
        }
      ]
    },
    {
      category: 'Matériel',
      items: [
        {
          name: 'Matériel Reconditionné',
          description: 'Ordinateurs remis à neuf avec garantie',
          link: 'https://www.backmarket.fr/',
          icon: '♻️'
        },
        {
          name: 'Associations de reconditionnement',
          description: 'Structures locales qui forment et reconditionnent',
          icon: '🏭'
        }
      ]
    },
    {
      category: 'Ressources Pédagogiques',
      items: [
        {
          name: 'La Forge des Communs',
          description: 'Plateforme de ressources éducatives libres',
          link: 'https://forge.apps.education.fr/',
          icon: '📚'
        },
        {
          name: 'Framasoft',
          description: 'Association promouvant le logiciel libre',
          link: 'https://framasoft.org/',
          icon: '🔓'
        }
      ]
    }
  ];

  const steps = [
    {
      step: 1,
      title: 'Sensibiliser',
      description: 'Informer sur les enjeux du numérique et les alternatives',
      duration: '1-2 mois',
      icon: '📢'
    },
    {
      step: 2,
      title: 'Expérimenter',
      description: 'Tester sur quelques postes ou une salle',
      duration: '3-6 mois',
      icon: '🧪'
    },
    {
      step: 3,
      title: 'Former',
      description: 'Former les enseignants et le personnel',
      duration: '6-12 mois',
      icon: '👨‍🏫'
    },
    {
      step: 4,
      title: 'Généraliser',
      description: 'Déployer à l\'échelle de l\'établissement',
      duration: '12-24 mois',
      icon: '🚀'
    }
  ];

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Solutions et Alternatives</h1>
      <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
        Découvrez les alternatives libres et durables pour réduire la dépendance aux Big Tech.
      </p>

      {/* Introduction */}
      <div style={{
        backgroundColor: '#f0f9ff',
        borderLeft: '4px solid #3b82f6',
        padding: '1.5rem',
        marginBottom: '3rem',
        borderRadius: '0 0.5rem 0.5rem 0'
      }}>
        <h3 style={{ color: '#1e40af', marginBottom: '0.5rem' }}>💡 Pourquoi changer ?</h3>
        <p style={{ margin: 0, color: '#4b5563' }}>
          Les solutions NIRD permettent de reprendre le contrôle sur votre numérique : 
          moins de dépendance, plus de liberté, une meilleure maîtrise des coûts et 
          un impact environnemental réduit.
        </p>
      </div>

      {/* Étapes de transition */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Par où commencer ? Le parcours en 4 étapes
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: '1.5rem' }}>
          {steps.map((step) => (
            <div key={step.step} className="card" style={{ 
              position: 'relative',
              textAlign: 'center'
            }}>
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '40px',
                height: '40px',
                backgroundColor: '#3b82f6',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.25rem'
              }}>
                {step.step}
              </div>
              
              <div style={{ fontSize: '2.5rem', margin: '1rem 0' }}>
                {step.icon}
              </div>
              
              <h3 style={{ marginBottom: '0.5rem' }}>{step.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                {step.description}
              </p>
              
              <div style={{
                backgroundColor: '#f3f4f6',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: '#6b7280'
              }}>
                {step.duration}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions par catégorie */}
      {solutions.map((category) => (
        <section key={category.category} style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            marginBottom: '1.5rem',
            paddingBottom: '0.5rem',
            borderBottom: '2px solid #e5e7eb'
          }}>
            {category.category}
          </h2>
          
          <div className="grid md:grid-cols-2" style={{ gap: '1rem' }}>
            {category.items.map((item, index) => (
              <div key={index} className="card" style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start'
              }}>
                <div style={{ 
                  fontSize: '2rem',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{ marginBottom: '0.25rem' }}>{item.name}</h3>
                  <p style={{ 
                    color: '#6b7280', 
                    fontSize: '0.875rem',
                    marginBottom: '0.75rem'
                  }}>
                    {item.description}
                  </p>
                  
                  {item.link && (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        color: '#3b82f6',
                        textDecoration: 'none',
                        fontWeight: '500',
                        fontSize: '0.875rem'
                      }}
                    >
                      Visiter le site
                      <span style={{ fontSize: '0.75rem' }}>→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Vidéos et ressources */}
      <section style={{ 
        backgroundColor: '#f8fafc',
        borderRadius: '1rem',
        padding: '2rem',
        marginBottom: '3rem'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Ressources Complémentaires
        </h2>
        
        <div className="grid md:grid-cols-2" style={{ gap: '1.5rem' }}>
          {[
            {
              title: 'Windows 11 : l\'alternative des logiciels libres',
              description: 'Reportage France 3 Alpes (2 min)',
              link: 'https://video.echirolles.fr/w/hVykGUtRZqRenBeiutqRvQ',
              type: '🎥 Vidéo'
            },
            {
              title: 'Mises à jour de Windows : face à l\'obsolescence programmée',
              description: 'Grand reportage France Inter (4 min)',
              link: 'https://www.radiofrance.fr/franceinter/podcasts/le-grand-reportage-de-france-inter/',
              type: '🎧 Audio'
            },
            {
              title: 'Logiciel obsolète : l\'État obligé de jeter des milliers d\'ordinateurs ?',
              description: 'Reportage France Info (3 min)',
              link: 'https://www.youtube.com/watch?v=7GT8oubek-c',
              type: '🎥 Vidéo'
            },
            {
              title: 'L\'Ordinateur Obsolète',
              description: 'Campagne Back Market (1 min)',
              link: 'https://www.youtube.com/watch?v=S6GLqkhykmA',
              type: '🎥 Vidéo'
            }
          ].map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                padding: '1.5rem',
                textDecoration: 'none',
                color: 'inherit',
                border: '1px solid #e5e7eb',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '0.5rem'
              }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{resource.title}</h3>
                <span style={{
                  backgroundColor: '#f3f4f6',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#6b7280'
                }}>
                  {resource.type}
                </span>
              </div>
              <p style={{ 
                margin: 0,
                color: '#6b7280',
                fontSize: '0.875rem'
              }}>
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Calcul d\'impact */}
      <div className="card" style={{ textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1rem' }}>Calculez votre impact</h2>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Découvrez combien vous pourriez économiser et quel serait votre impact environnemental.
        </p>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {[
            { label: 'Ordinateurs', value: '50', unit: 'postes' },
            { label: 'Économies annuelles', value: '15 000', unit: '€' },
            { label: 'CO₂ évité', value: '2,5', unit: 'tonnes' },
            { label: 'Déchets réduits', value: '500', unit: 'kg' }
          ].map((stat, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: 'bold',
                color: '#3b82f6',
                marginBottom: '0.25rem'
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                {stat.label}
              </div>
              <div style={{ 
                fontSize: '0.75rem', 
                color: '#9ca3af',
                marginTop: '0.25rem'
              }}>
                {stat.unit}
              </div>
            </div>
          ))}
        </div>
        
        <button style={{
          padding: '0.75rem 2rem',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '0.5rem',
          cursor: 'pointer',
          fontWeight: '600',
          fontSize: '1rem'
        }}>
          Simuler mon établissement
        </button>
      </div>
    </div>
  );
};

export default SolutionsPage;