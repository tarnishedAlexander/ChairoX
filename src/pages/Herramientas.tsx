import React from 'react'

interface SlideProps {
  title: string;
  content: React.ReactNode;
}

const cardStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  background: 'rgba(248, 245, 245, 1)',
  borderRadius: 12,
  boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
  padding: 24,
  gap: 24,
  maxWidth: 1200,
  margin: '0 auto'
};

const Slide: React.FC<SlideProps> = ({ title, content }) => (
  <div className="slide" style={{ marginBottom: 32 }}>
    <h1>{title}</h1>
    <div className="slide-content">{content}</div>
  </div>
);

export const Herramientas = () => {

  const logos = {
    linear: 'data:image/jpeg;base64,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',
    figma: 'https://www.uifrommars.com/wp-content/uploads/2019/02/introduccion-figma-opinion.jpg',
    react: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    typescript: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    postgres: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg',
    neolo: 'https://www.neolo.com/blog/wp-content/uploads/2019/05/neolo-04-768x404.png'
  };

  const LogoComponent = (name: string, logoKey: string) => (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <img 
        src={logos[logoKey as keyof typeof logos]} 
        alt={`${name} logo`} 
        style={{ width: '50px', height: '50px', marginRight: '15px', borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }} 
      />
      <strong style={{ fontSize: 22, color: '#3a3a3a' }}>{name}</strong>
    </div>
  );

  return (
    <div className="presentation">
      <Slide 
        title="Herramientas para la fase de planificación"
        content={
            <div></div>
        //   <div style={cardStyle}>
        //     <img 
        //       src={logos.linear}
        //       alt="Planificación"
        //       style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
        //     />
        //     <div>
        //       <strong style={{ fontSize: 22, color: '#3a3a3a' }}>Planificación</strong>
        //       <div style={{ color: '#444', fontSize: 16, marginTop: 8 }}>
        //         En esta fase, se utilizarán herramientas especializadas para la gestión de proyectos, diseño y desarrollo con tecnologías clave, asegurando una planificación eficiente y alineada con los objetivos del proyecto de ROMMOS S.R.L.
        //       </div>
        //     </div>
        //   </div>
        }
      />
      
      <Slide 
        title="Herramientas de gestión de proyecto"
        content={
          <div style={cardStyle}>
            <img 
              src={logos.linear}
              alt="Linear logo"
              style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
            />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <strong style={{ fontSize: 22, color: '#3a3a3a' }}>Linear</strong>
                <span style={{
                  background: '#f7b500',
                  color: '#fff',
                  borderRadius: 8,
                  padding: '2px 10px',
                  fontSize: 13,
                  fontWeight: 600,
                  marginLeft: 8
                }}>Kanban</span>
                <span style={{
                  background: '#2d9cdb',
                  color: '#fff',
                  borderRadius: 8,
                  padding: '2px 10px',
                  fontSize: 13,
                  fontWeight: 600,
                  marginLeft: 4
                }}>Scrum</span>
              </div>
              <div style={{ color: '#444', fontSize: 16 }}>
                Linear es una herramienta ágil para la gestión de proyectos, que permite el seguimiento de tareas, sprints y colaboración en equipo de manera intuitiva y eficiente.<br />
                <span style={{ color: '#222', fontWeight: 500 }}>
                  En este proyecto, utilizaremos Linear implementando las metodologías Kanban y Scrum para organizar y visualizar el flujo de trabajo, facilitando la adaptación y mejora continua del equipo.
                </span>
              </div>
            </div>
          </div>
        }
      />
      
      <Slide 
        title="Herramientas para el diseño"
        content={
          <div style={cardStyle}>
            <img 
              src={logos.figma}
              alt="Figma logo"
              style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
            />
            <div>
              <strong style={{ fontSize: 22, color: '#3a3a3a' }}>Figma</strong>
              <div style={{ color: '#444', fontSize: 16, marginTop: 8 }}>
                Figma es una plataforma colaborativa de diseño de interfaces, ideal para crear mockups, prototipos interactivos y guías de estilo visual, facilitando la iteración rápida con el equipo de ROMMOS.
              </div>
            </div>
          </div>
        }
      />
      
      <Slide 
        title="Tecnologías"
        content={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={cardStyle}>
              <img 
                src={logos.react}
                alt="React logo"
                style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              />
              <div>
                <strong style={{ fontSize: 22, color: '#3a3a3a' }}>React</strong>
                <div style={{ color: '#444', fontSize: 16, marginTop: 8 }}>
                  Biblioteca de JavaScript para construir interfaces de usuario dinámicas y componentes reutilizables.
                </div>
              </div>
            </div>
            <div style={cardStyle}>
              <img 
                src={logos.typescript}
                alt="TypeScript logo"
                style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              />
              <div>
                <strong style={{ fontSize: 22, color: '#3a3a3a' }}>TypeScript</strong>
                <div style={{ color: '#444', fontSize: 16, marginTop: 8 }}>
                  Superset de JavaScript que añade tipado estático para un desarrollo más robusto y mantenible.
                </div>
              </div>
            </div>
            <div style={cardStyle}>
              <img 
                src={logos.postgres}
                alt="Postgres logo"
                style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              />
              <div>
                <strong style={{ fontSize: 22, color: '#3a3a3a' }}>Postgres</strong>
                <div style={{ color: '#444', fontSize: 16, marginTop: 8 }}>
                  Base de datos relacional de código abierto, escalable y confiable para el almacenamiento de usuarios, cursos y contenidos.
                </div>
              </div>
            </div>
            <div style={cardStyle}>
              <img 
                src={logos.neolo}
                alt="Neolo logo"
                style={{ width: 64, height: 64, borderRadius: 8, background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}
              />
              <div>
                <strong style={{ fontSize: 22, color: '#3a3a3a' }}>Neolo</strong>
                <div style={{ color: '#444', fontSize: 16, marginTop: 8 }}>
                  Hosting boliviano con soporte para alto tráfico, disponibilidad mínima del 99.9% y políticas de backup diarias.
                </div>
              </div>
            </div>
          </div>
        }
      />
    </div>
  )
}