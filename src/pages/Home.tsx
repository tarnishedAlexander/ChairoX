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

export const Home = () => {
  return (
    <div className="presentation">
      <Slide 
        title="Términos de Referencia para la Creación y Desarrollo de la Plataforma Web con E-Learning de ROMMOS S.R.L."
        content={
          <div>
            <p>Documento de referencia para el desarrollo de la nueva plataforma web y e-learning.</p>
          </div>
        }
      />
      
      <Slide 
        title="1. Datos Generales"
        content={
          <div>
            <p><strong>ROMMOS S.R.L.</strong> es un emprendimiento boliviano de asesoramiento profesional integral que brinda servicios en consultoría, gestión empresarial, asesoría legal e inmobiliaria nacional e internacional, además de capacitación continua. El propósito es impulsar el desarrollo de las empresas mediante asesoramiento financiero, administrativo, de gestión de calidad, legal, de imagen corporativa y programas de formación permanente.</p>
            
            <p><strong>Dirección:</strong> Santa Cruz, Bolivia</p>
            
            <p><strong>Contacto:</strong> Equipo de ingenieros de sistemas con respaldo de profesionales en auditoría, contabilidad, economía, derecho y publicidad. Para la coordinación, se sugiere designar como representante interno al gerente general.</p>
            
            <h3>Especialidades:</h3>
            <ul>
              <li><strong>Asesoría en crecimiento empresarial (CEC):</strong> reingeniería, contabilidad, tributación, recursos humanos, imagen corporativa y publicidad.</li>
              <li><strong>Servicios legales e inmobiliarios (SERLIS):</strong> civil/comercial, tributario/aduanero, laboral, inmobiliario, arbitraje y conciliación.</li>
              <li><strong>Centro de capacitación continua (CCC):</strong> cursos presenciales, semipresenciales, talleres en competencias laborales, tributación, marketing, entre otros.</li>
            </ul>
            
            <p>ROMMOS S.R.L. promueve el crecimiento empresarial de sus clientes mediante un enfoque multidisciplinario y un equipo de especialistas en diversas áreas.</p>
            
            <h3>Valores:</h3>
            <p>Compromiso, responsabilidad, oportunidad, confiabilidad, cuidado profesional y calidad, orientados a brindar un servicio integral basado en información confiable y veraz.</p>
          </div>
        }
      />
      
      <Slide 
        title="2. Antecedentes y Justificación del Proyecto"
        content={
          <div>
            <h3>2.1 Antecedentes</h3>
            <p>ROMMOS S.R.L. ofrece programas de capacitación continua en diferentes modalidades, que incluyen seminarios presenciales en áreas como planificación estratégica, contabilidad, finanzas, administración y marketing; cursos semipresenciales en administración, tributación e imagen corporativa; además de talleres orientados a competencias laborales, psicopedagogía, ofimática e inglés técnico.</p>
            
            <p>Sin embargo, la empresa no cuenta con una plataforma e-learning ni con una página web oficial activa, lo que limita su capacidad de difusión, actualización de contenidos y captación de nuevos clientes.</p>
            
            <p>Actualmente, solo dispone de un portal básico con secciones como ¿Quiénes Somos?, Nuestra Filosofía, Nuestras Estrategias, Nuestros Valores y Nuestros Servicios. Este sitio resulta poco atractivo, ya que presenta un diseño amateur con tipografías simples, imágenes genéricas y marcas de agua en cada página. Además, no es interactivo, su navegación es lineal y poco intuitiva, carece de formularios y botones dinámicos, muestra los servicios únicamente como texto plano, sin jerarquía ni recursos visuales modernos. Esta situación ha generado una presencia digital limitada y desactualizada, que no refleja la identidad profesional ni la visión innovadora de la empresa, afectando incluso su credibilidad.</p>
            
            <p>Frente a esta realidad, surge la necesidad de crear una nueva plataforma web con módulo e-learning, que represente adecuadamente los valores y servicios de ROMMOS S.R.L. La nueva web permitirá proyectar una imagen más profesional y competitiva, con un diseño actual y orientado a la interacción dinámica con los clientes. Asimismo, servirá como un espacio para gestionar, difundir cursos y servicios, fortaleciendo la relación con los usuarios mediante formularios de contacto, registros e inscripciones directas.</p>
            
            <p>Este proyecto busca no solo modernizar la presencia digital de la empresa, sino también posicionarla en el ámbito nacional, ofreciendo alternativas educativas acordes a las necesidades de formación y competencias laborales que demanda el mercado. En un contexto globalizado, donde la identidad digital es clave para competir y crecer, la creación de esta plataforma constituye un paso estratégico para consolidar a ROMMOS S.R.L. como referente en asesoría integral y capacitación continua.</p>
          </div>
        }
      />
      
      <Slide 
        title="2.2 Justificación"
        content={
          <div>
            <p>El proyecto surge como respuesta a la desvinculación entre la educación formal y las demandas del mercado laboral, así como a la necesidad de aprovechar la digitalización para mejorar la captación de clientes y el acceso a programas de capacitación en áreas clave como tributación, recursos humanos, contabilidad, administración y derecho.</p>
            
            <p>La creación de una plataforma web con e-learning permitirá a ROMMOS S.R.L. superar su actual problema de visibilidad digital y posicionarse como referente en consultoría y capacitación multidisciplinaria a nivel nacional e internacional. Este avance se alinea con la visión de liderazgo innovador de la empresa, su misión de brindar asistencia integral personalizada basada en información confiable y veraz, sus objetivos estratégicos de generar valor, mitigar riesgos y fomentar la excelencia en la producción de bienes y servicios.</p>
            
            <p>La nueva web no solo modernizará la imagen corporativa, sino que también facilitará la interacción con los usuarios al ofrecer información accesible, mejorar la navegación, reducir consultas repetitivas en la atención al cliente y optimizar la comunicación con formularios y servicios digitales. Se espera, además, que contribuya a atraer nuevos clientes mediante la generación de clientes, con un potencial estimado de 200 al mes, y reduzca en un 30% las consultas presenciales o telefónicas al centralizar la información en línea.</p>
            
            <p>Asimismo, al digitalizar servicios como el desarrollo de imagen corporativa, la publicidad y la capacitación especializada, la plataforma apoyará la toma de decisiones oportuna por parte de los clientes, generará valor agregado y permitirá gestionar riesgos en distintos horizontes de tiempo. Todo ello fortalecerá la imagen institucional de ROMMOS S.R.L., apoyará la comercialización de sus servicios, facilitará procesos administrativos y consolidará su presencia en un entorno globalizado altamente competitivo.</p>
          </div>
        }
      />
      
      <Slide 
        title="3. Alcance del Proyecto"
        content={
          <div>
            <h3>3.1 Objetivos Generales</h3>
            <p>El objetivo general del proyecto es desarrollar internamente una plataforma e-learning y un sitio web corporativo moderno que fortalezcan la identidad digital de ROMMOS S.R.L. y promuevan sus servicios de consultoría y capacitación.</p>
            <p>El sitio web corporativo permitirá mejorar la visibilidad institucional, facilitar la interacción con clientes y captar nuevos usuarios mediante una experiencia digital clara y funcional.</p>
          </div>
        }
      />
      
      <Slide 
        title="3.2 Objetivos Específicos"
        content={
          <div>
            <ul>
              <li>Implementar una plataforma e-learning con al menos 5 cursos disponibles en los primeros seis meses, cada uno con sistema de registro, evaluación y certificación.</li>
              <li>Entregar un sitio web corporativo funcional y accesible que muestre información institucional (misión, visión, valores), la oferta de servicios (CEC, SERLIS, CCC) y noticias/eventos.</li>
              <li>Implementar un sistema de gestión de contenidos (CMS) que permita al personal de ROMMOS publicar, editar y eliminar información de manera autónoma, capacitando al menos a dos usuarios internos.</li>
              <li>Desarrollar e integrar al menos cuatro formularios web: contacto, inscripción a cursos, solicitud de cotización y descarga de documentos.</li>
              <li>Proveer un servicio de hosting estable con disponibilidad mínima del 99%, certificado SSL activo y copias de seguridad automáticas semanales.</li>
              <li>Capacitar al personal de ROMMOS en la administración del sitio web y el CMS, entregando un manual de usuario y una guía técnica al finalizar la implementación.</li>
            </ul>
          </div>
        }
      />
      
      <Slide 
        title="3.3 Funcionalidades Clave"
        content={
          <div>
            <h4>Página de Inicio</h4>
            <ul>
              <li>Resumen de la filosofía institucional: visión, misión, objetivos, estrategias y valores.</li>
              <li>Resumen de servicios ofrecidos.</li>
              <li>Llamadas a la acción para contactar o registrarse en cursos.</li>
            </ul>
            
            <h4>Quiénes Somos</h4>
            <ul>
              <li>Información sobre la empresa, equipo multidisciplinario y cultura de valores.</li>
              <li>Presentación de visión, misión, objetivos y estrategias.</li>
              <li>Infografías y elementos visuales que refuercen la identidad corporativa.</li>
            </ul>
            
            <h4>Catálogo de Cursos y Servicios</h4>
            <ul>
              <li>Listado de cursos presenciales, semipresenciales y talleres: RRHH, contables, administrativos, marketing, ofimática.</li>
              <li>Sub-secciones detalladas: CEC (Outsourcing, Reingeniería, etc.), SERLIS (Derecho Civil y Comercial, etc.), CCC (Cursos presenciales, etc.).</li>
              <li>Enlaces en cada subsección: “Le interesa nuestro servicio XXXXXXX, contáctenos”.</li>
              <li>Registro en línea para cursos y talleres.</li>
            </ul>
            
            <h4>Registro de Usuarios</h4>
            <p>Perfiles personalizados con historial de cursos, inscripciones y certificaciones.</p>
            
            <h4>Aula Virtual</h4>
            <p>Videos, quizzes, materiales descargables y foros de discusión para interacción entre usuarios.</p>
            
            <h4>Certificación Automática</h4>
            <p>Emisión de certificados basada en competencias y progreso del curso.</p>
            
            <h4>Formulario de Contacto</h4>
            <p>Consultas generales, solicitud de cotización o negociación. Datos almacenados en base de datos para seguimiento.</p>
            
            <h4>Panel Administrativo</h4>
            <p>Gestión de contenidos, usuarios, cursos, inscripciones y analíticas web.</p>
            
            <h4>Integración con Mapas y Redes Sociales</h4>
            <p>Ubicación de la empresa y enlaces a perfiles de redes sociales.</p>
            
            <h4>Formularios Procesables</h4>
            <p>Contacto, inscripción y solicitud de cotización, con almacenamiento en base de datos. API REST para integración con sistemas externos o CRM.</p>
            
            <h4>Repositorio de Documentos</h4>
            <p>PDFs descargables y material de referencia para usuarios.</p>
          </div>
        }
      />
      
      <Slide 
        title="3.4 Requisitos Técnicos"
        content={
          <div>
            <h4>Plataforma y Desarrollo</h4>
            <ul>
              <li>Plataforma e-learning: Moodle o LMS similar, compatible con competencias laborales.</li>
              <li>Desarrollo web: Principal herramienta React.</li>
            </ul>
            
            <h4>Hosting y Dominio</h4>
            <ul>
              <li>Hosting Dedicado solo para Bolivia usando “Neolo”, con soporte para alto tráfico.</li>
              <li>Registro de dominio, por ejemplo rommos.com.</li>
              <li>Disponibilidad mínima garantizada del 99.9%.</li>
              <li>Políticas de backup diario con retención mínima de 30 días y plan de recuperación ante desastres.</li>
            </ul>
            
            <h4>Seguridad</h4>
            <ul>
              <li>Certificado SSL obligatorio para seguridad y confianza del usuario.</li>
              <li>Actualización periódica de componentes y protección contra vulnerabilidades OWASP.</li>
              <li>Procedimientos documentados para reporte y gestión de incidentes de seguridad.</li>
            </ul>
            
            <h4>Optimización y SEO</h4>
            <ul>
              <li>Optimización básica para motores de búsqueda (SEO).</li>
              <li>Velocidad de carga optimizada para soportar grandes volúmenes de visitas.</li>
            </ul>
            
            <h4>Entornos de Desarrollo</h4>
            <p>Configuración de ambientes separados: desarrollo, pruebas y producción.</p>
            
            <h4>Flexibilidad y Gestión</h4>
            <p>Administración autónoma de contenidos, cursos y usuarios a través de CMS o LMS.</p>
          </div>
        }
      />
      
      <Slide 
        title="3.5 Integraciones"
        content={
          <div>
            <h4>CRM para clientes y Gestión de Inscripciones</h4>
            <p>Formularios de contacto y registro de cursos conectados a un sistema de CRM para seguimiento de clientes potenciales y gestión de inscripciones.</p>
            
            <h4>Pasarelas de Pago</h4>
            <p>Integración opcional con PayPal y pasarelas locales bolivianas para pagos de cursos o servicios en línea.</p>
            
            <h4>Redes Sociales</h4>
            <ul>
              <li>Enlaces a perfiles corporativos en redes sociales.</li>
              <li>Botones de compartición de contenido desde cursos, noticias o blog.</li>
            </ul>
            
            <h4>Área Privada para Clientes/Miembros</h4>
            <p>Módulo de acceso restringido para clientes o miembros registrados.</p>
          </div>
        }
      />
      
      <Slide 
        title="4. Entregables Esperados"
        content={
          <div>
            <h3>4.1 Diseño (UI/UX)</h3>
            <ul>
              <li>Mockups detallados de todas las secciones del sitio web.</li>
              <li>Prototipos interactivos para revisión y validación interna.</li>
              <li>Guía de estilo visual alineada con la imagen corporativa: colores naranja y azul, logotipo y tipografías elegantes.</li>
              <li>Propuesta de arquitectura de información y navegación coherente con la identidad de ROMMOS.</li>
            </ul>
            
            <h3>4.2 Desarrollo</h3>
            <ul>
              <li>Código fuente completo del sitio web (front-end y back-end).</li>
              <li>Base de datos para gestión de usuarios, cursos, progresos y contenido.</li>
              <li>Implementación amigable con paneles para gestión de páginas, servicios, cursos y descarga de documentos.(Con React)</li>
              <li>Sitio web funcional y probado en múltiples navegadores.</li>
              <li>Integración de competencias laborales en los cursos de e-learning.</li>
            </ul>
            
            <h3>4.3 Contenido</h3>
            <ul>
              <li>Plan de contenidos basado en CCC: seminarios y talleres de contabilidad, tributación, marketing, administración y derecho.</li>
              <li>Textos e imágenes proporcionados por ROMMOS, optimizados para SEO y claridad.</li>
              <li>Estructura de URLs amigables (ej.: /servicios/cec, /servicios/serlis).</li>
              <li>Inclusión de enlaces de contacto en todas las pestañas de servicios.</li>
            </ul>
            
            <h3>4.4 Otros Entregables</h3>
            <ul>
              <li>Manual de usuario y administrador para la gestión de la plataforma y CMS.</li>
              <li>Capacitación al equipo de ROMMOS para actualización y administración de contenidos.</li>
              <li>Entrega del deploy de la página web y documentación técnica completa.</li>
              <li>Informes de pruebas de funcionalidad y usabilidad del sitio web.</li>
            </ul>
          </div>
        }
      />
      
      <Slide 
        title="5. Plazos y Cronograma"
        content={
          <div>
            <h3>5.1 Fechas Tentativas Clave</h3>
            <ul>
              <li><strong>Mes 1:</strong> Presentación del plan de trabajo, cronograma detallado, recolección de contenidos y definición de la arquitectura de información del sitio web y la plataforma e-learning. <strong>50% del precio acordado</strong></li>
              <li><strong>Meses 2 a 4:</strong> Desarrollo del sitio web y la plataforma e-learning, incluyendo la creación de mockups, implementación de funcionalidades y carga de contenidos. <strong>20% del precio acordado</strong></li>
              <li><strong>Mes 5:</strong> Pruebas unitarias, verificación de funcionalidades, ajustes finales y despliegue del sitio y plataforma en el entorno de producción. <strong>20% del precio acordado</strong></li>
              <li><strong>Mes 6:</strong> Capacitación al equipo de ROMMOS para la administración de contenidos, gestión de usuarios, cursos y operación general de la plataforma. <strong>10% del precio acordado</strong></li>
            </ul>
          </div>
        }
      />
    </div>
  );
}
