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

export const Perfil = () => {
  return (
    <div className="presentation">
      <Slide 
        title="Metodologías para la fase de pruebas y control de calidad"
        content={
          <div>
            <p>Para garantizar que el sitio web corporativo y la plataforma e-learning de ROMMOS S.R.L. cumplan con los más altos estándares de calidad, ChairuX aplicará un conjunto de metodologías de pruebas adaptadas al contexto del proyecto, priorizando la seguridad, estabilidad, usabilidad y cumplimiento de los requerimientos definidos.</p>
          </div>
        }
      />
      
      <Slide 
        title="1. Pruebas Ágiles (Scrum/Kanban)"
        content={
          <div>
            <p>Se realizarán pruebas de manera continua e incremental durante el desarrollo de cada módulo.</p>
            
            <p>Cada funcionalidad será validada en el sprint correspondiente.</p>
            
            <p>La retroalimentación temprana permitirá correcciones rápidas y reducirá riesgos de acumulación de errores.</p>
          </div>
        }
      />
      
      <Slide 
        title="2. Modelo V (Validación Paralela)"
        content={
          <div>
            <p>Se asociarán pruebas específicas a cada fase de desarrollo:</p>
            
            <ul>
              <li><strong>Diseño</strong> → pruebas de diseño y arquitectura de información.</li>
              <li><strong>Desarrollo</strong> → pruebas unitarias del código.</li>
              <li><strong>Implementación</strong> → pruebas funcionales completas.</li>
            </ul>
            
            <p>Este enfoque asegura la detección temprana de errores en cada etapa.</p>
          </div>
        }
      />
      
      <Slide 
        title="3. Pruebas de Aceptación del Usuario (UAT)"
        content={
          <div>
            <p>ROMMOS validará el sistema en un entorno de pre-producción antes de su despliegue definitivo.</p>
            
            <p>Se verificará que la plataforma cumpla con los objetivos de visibilidad, administración de contenidos, cursos y comunicación con clientes.</p>
            
            <p>La aprobación de estas pruebas se realizará antes de la entrega final.</p>
          </div>
        }
      />
      
      <Slide 
        title="4. Pruebas de Regresión Automatizadas"
        content={
          <div>
            <p>Cada vez que se realicen ajustes o nuevas implementaciones al sistema, se aplicarán pruebas de regresión para confirmar que las funcionalidades ya implementadas (formularios, gestión de cursos, API, etc.) se mantienen estables.</p>
          </div>
        }
      />
      
      <Slide 
        title="5. Pruebas de Carga y Rendimiento"
        content={
          <div>
            <p>Se evaluará la capacidad del sitio para soportar escenarios de tráfico realistas:</p>
            
            <ul>
              <li>Inscripción simultánea de múltiples usuarios en cursos.</li>
              <li>Consultas concurrentes en formularios.</li>
              <li>Acceso a materiales y descargas.</li>
            </ul>
          </div>
        }
      />
      
      <Slide 
        title="6. Pruebas de Seguridad e Integridad de la Información"
        content={
          <div>
            <p>Durante el desarrollo se implementarán pruebas de seguridad para garantizar la protección de datos de clientes y usuarios.</p>
            
            <p>Validación de formularios contra inyecciones y ataques XSS.</p>
            
            <p>Análisis básico de vulnerabilidades siguiendo lineamientos OWASP.</p>
          </div>
        }
      />
      
      <Slide 
        title="7. Pruebas de Usabilidad y Accesibilidad"
        content={
          <div>
            <p>Se realizarán sesiones de validación de la interfaz con foco en:</p>
            
            <ul>
              <li>Navegación intuitiva en secciones institucionales y de servicios.</li>
              <li>Acceso rápido a formularios de contacto e inscripción.</li>
              <li>Cumplimiento con estándares básicos de accesibilidad para facilitar el uso por cualquier perfil de usuario.</li>
            </ul>
          </div>
        }
      />
      
      <Slide 
        title="8. Pruebas de Cross-Browser y Cross-Platform"
        content={
          <div>
            <p>Se verificará la correcta visualización y funcionalidad del sistema en navegadores modernos (Chrome, Firefox, Edge, Safari) y en sistemas operativos comunes (Windows, Linux, macOS).</p>
            
            <p><em>(Nota: la versión móvil/responsive no está contemplada en esta fase, según los términos acordados con ROMMOS).</em></p>
          </div>
        }
      />
      
      <Slide 
        title="9. Pruebas Exploratorias"
        content={
          <div>
            <p>Además de los planes definidos, se aplicarán pruebas exploratorias realizadas por el equipo de ChairuX para descubrir problemas no previstos en los guiones de prueba, especialmente en interacciones entre módulos.</p>
          </div>
        }
      />
    </div>
  )
}
