import React from 'react'

interface SlideProps {
  title: string;
  content: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ title, content }) => (
  <div className="slide">
    <h1>{title}</h1>
    <div className="slide-content">{content}</div>
  </div>
);

export const Cursos = () => {
  return (
    <div className="presentation">
      <Slide 
        title="Plan de Gestión de Riesgos ROMMOS S.R.L"
        content={
          <div>
            <p>Plan detallado para identificar, mitigar y gestionar los riesgos clave en el proyecto de desarrollo de la plataforma web con e-learning.</p>
          </div>
        }
      />
      
      <Slide 
        title="1. Cambios en los Requisitos del Proyecto"
        content={
          <div>
            <h3>Mitigación:</h3>
            <p>Mantener comunicación constante y revisiones periódicas de los requisitos al final de la planificación y antes de iniciar cada fase de desarrollo.</p>
            
            <h3>Contingencia:</h3>
            <p>Reservar tiempo y recursos adicionales para acomodar cambios inevitables, priorizando la coherencia con la visión de ROMMOS como líder en consultoría multidisciplinaria.</p>
          </div>
        }
      />
      
      <Slide 
        title="2. Retrasos en la Entrega de Contenido"
        content={
          <div>
            <h3>Mitigación:</h3>
            <p>Priorizar el contenido esencial al inicio del proyecto y organizar la carga de información de forma gradual, evitando agregar tareas adicionales que retrasen el desarrollo. Mantener una lista clara de tareas pendientes para seguimiento interno.</p>
            
            <h3>Contingencia:</h3>
            <p>Ajustar el cronograma interno si surgen tareas nuevas, asegurando que no afecten la fecha de entrega final del sitio y la plataforma e-learning.</p>
          </div>
        }
      />
      
      <Slide 
        title="3. Seguridad e Integridad de la Información durante el Desarrollo"
        content={
          <div>
            <h3>Mitigación:</h3>
            <p>Establecer controles internos para garantizar que los datos cargados, formularios y contenidos no se pierdan ni se filtren durante el desarrollo. Hacer respaldos periódicos de la base de datos y del código fuente.</p>
            
            <h3>Contingencia:</h3>
            <p>Restaurar rápidamente versiones anteriores desde los respaldos en caso de errores o pérdida de información.</p>
          </div>
        }
      />
      
      <Slide 
        title="4. Riesgo de Incumplimiento de Pago"
        content={
          <div>
            <h3>Mitigación:</h3>
            <p>Formalizar un contrato claro con puntos de pago definidos y seguimiento financiero interno.</p>
            
            <h3>Contingencia:</h3>
            <p>Retener derechos de código, diseño y soporte hasta completar los pagos correspondientes.</p>
          </div>
        }
      />
      
      <Slide 
        title="5. Riesgo de Hosting"
        content={
          <div>
            <h3>Mitigación:</h3>
            <p>Usar un proveedor confiable con disponibilidad mínima garantizada del 99.9%, preferiblemente AWS, para asegurar estabilidad, rendimiento y seguridad.</p>
            
            <h3>Contingencia:</h3>
            <p>Tener una lista de proveedores alternativos de hosting para migración rápida en caso de fallas.</p>
          </div>
        }
      />
    </div>
  );
}
