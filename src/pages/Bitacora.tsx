import React from "react";

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

export const Bitacora = () => {
  return (
    <div className="presentation">
      <Slide
        title="Bitácora de Entrega del Sistema Web E-learning"
        content={
          <div>
            <p>
              Fecha de Inicio de Entrega: 02 de abril de 2026 (Fin de mes 6 del
              cronograma).
            </p>
          </div>
        }
      />

      <Slide
        title="Paso 1: Preparación y Demostración Inicial"
        content={
          <div>
            <p>ChairuX agenda reunión presencial en oficinas de ROMMOS.</p>
            <p>
              Presenta plataforma completa: página de inicio con resumen
              institucional, catálogo de cursos (CEC, SERLIS, CCC con
              subsecciones detalladas), aula virtual con videos/quizzes/foros,
              panel administrativo para gestión de
              contenidos/usuarios/analíticas.
            </p>
            <p>
              ROMMOS observa: "Diseño moderno, pero ajusten tipografía para
              mayor legibilidad; infografías refuerzan identidad bien."
            </p>
          </div>
        }
      />

      <Slide
        title="Paso 2: Pruebas Funcionales Conjuntas"
        content={
          <div>
            <p>
              Sesión interactiva: Pruebas de registro de usuarios con perfiles
              personalizados/historial/certificaciones, inscripción a cursos,
              certificación automática basada en progreso, formularios
              procesables (contacto, inscripción, cotización, descarga
              documentos) con almacenamiento en base de datos. Integración API
              REST para CRM y consulta de datos.
            </p>
            <p>
              ROMMOS nota: "Funcionalidades clave operativas; foro de discusión
              necesita filtros anti-spam adicionales."
            </p>
          </div>
        }
      />

      <Slide
        title="Paso 3: Verificación de Integraciones y Seguridad"
        content={
          <div>
            <p>
              Revisión de integración con mapas/redes sociales, repositorio de
              PDFs descargables. Confirmación de seguridad: certificado SSL
              activo, copias de seguridad automáticas semanales.
            </p>
            <p>
              ROMMOS comenta: "Integraciones sólidas; sugerimos auditoría
              externa para cumplimiento normativo en datos de usuarios."
            </p>
          </div>
        }
      />

      <Slide
        title="Paso 4: Capacitación al Personal"
        content={
          <div>
            <p>
              Dos sesiones de 4 horas cada una para al menos dos usuarios
              internos de ROMMOS en CMS, administración de sitio/plataforma,
              gestión de cursos/inscripciones/analíticas. Entrega de manual de
              usuario, guía técnica, tutoriales en video.
            </p>
            <p>
              ROMMOS observa: "Capacitación clara y práctica; agreguen módulo
              sobre actualizaciones de API para mantenimiento futuro."
            </p>
          </div>
        }
      />

      <Slide
        title="Paso 5: Implementación en Producción"
        content={
          <div>
            <p>
              Migración a servidor dedicado Neolo con disponibilidad mínima
              99.9%, SSL y backups. Pruebas de carga para escalabilidad,
              verificación de al menos 5 cursos iniciales cargados.
            </p>
            <p>ROMMOS nota: "Transición suave; monitorearemos tráfico."</p>
          </div>
        }
      />

      <Slide
        title="Paso 6: Evaluación Final y Ajustes"
        content={
          <div>
            <p>
              Revisión conjunta de objetivos específicos: sitio accesible con
              información institucional/noticias/eventos. Ajustes basados en
              feedback.
            </p>
            <p>ROMMOS confirma: "Proyecto cumple expectativas."</p>
          </div>
        }
      />

      <Slide
        title="Paso 7: Cierre y Firma de Aceptación"
        content={
          <div>
            <p>
              Entrega de código fuente, documentación completa, accesos.
              Confirmación de autonomía en gestión.
            </p>
            <p>
              Observación final de ROMMOS: "Entrega exitosa; anticipamos
              expansión internacional."
            </p>
          </div>
        }
      />

      <Slide
        title="Firmas"
        content={
          <div>
            <p>
              Representante de ChairuX: Carlos Alexander Cruz Mamani, C.I.
              12957383 LP
            </p>
            <p>
              Evaluador de ROMMOS: Juan Carlos Perez Torres, C.I. 5480590 LP
            </p>
          </div>
        }
      />
    </div>
  );
};
