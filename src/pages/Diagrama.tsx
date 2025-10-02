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

export const Diagrama = () => {
  return (
    <div className="presentation">
      <Slide
        title="Diagrama del Sistema Web E-learning"
        content={
          <svg width="1200" height="600" viewBox="0 0 1200 600">
            <defs>
              <marker
              id="arrow"
              markerWidth="10"
              markerHeight="10"
              refX="9"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L0,6 L9,3 z" fill="#0e0d0dff" /> {/* Cambiado a blanco */}
            </marker>
            </defs>

            {/* Nodes */}
            <rect
              x="10"
              y="250"
              width="140"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text x="80" y="270" textAnchor="middle" alignmentBaseline="middle">
              Página de Inicio
            </text>

            <rect
              x="10"
              y="50"
              width="140"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text x="80" y="70" textAnchor="middle" alignmentBaseline="middle">
              Quiénes Somos
            </text>

            <rect
              x="200"
              y="100"
              width="180"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="290"
              y="120"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Registro/Login de Usuario
            </text>

            <rect
              x="410"
              y="100"
              width="140"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="480"
              y="120"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Autenticación
            </text>

            <rect
              x="580"
              y="100"
              width="140"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="650"
              y="120"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Perfil de Usuario
            </text>

            <rect
              x="750"
              y="100"
              width="120"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="810"
              y="120"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Aula Virtual
            </text>

            <rect
              x="900"
              y="100"
              width="180"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="990"
              y="120"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Certificación Automática
            </text>

            <rect
              x="200"
              y="250"
              width="200"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="300"
              y="270"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Catálogo de Cursos y Servicios
            </text>

            <rect
              x="430"
              y="180"
              width="140"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="500"
              y="200"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Servicios CEC
            </text>

            <rect
              x="430"
              y="250"
              width="140"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="500"
              y="270"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Servicios SERLIS
            </text>

            <rect
              x="430"
              y="320"
              width="180"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="520"
              y="340"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Cursos / Talleres CCC
            </text>

            <rect
              x="640"
              y="270"
              width="180"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="730"
              y="290"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Repositorio de Documentos
            </text>

            <rect
              x="200"
              y="450"
              width="200"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="300"
              y="470"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Formulario de Contacto / Cotización
            </text>

            <rect
              x="430"
              y="450"
              width="160"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="510"
              y="470"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Panel Administrativo
            </text>

            <rect
              x="620"
              y="350"
              width="140"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="690"
              y="370"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              CRUD Cursos
            </text>

            <rect
              x="620"
              y="400"
              width="160"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="700"
              y="420"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Gestión de Usuarios
            </text>

            <rect
              x="620"
              y="450"
              width="180"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="710"
              y="470"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Gestión de Inscripciones
            </text>

            <rect
              x="620"
              y="500"
              width="160"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="700"
              y="520"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Reportes y Analíticas
            </text>

            <rect
              x="620"
              y="550"
              width="220"
              height="40"
              rx="5"
              stroke="black"
              fill="white"
            />
            <text
              x="730"
              y="570"
              textAnchor="middle"
              alignmentBaseline="middle"
            >
              Gestión de Consultoría/Auditoría
            </text>

            {/* Arrows */}
            <line
              x1="150"
              y1="270"
              x2="10"
              y2="70"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="150"
              y1="270"
              x2="200"
              y2="120"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="380"
              y1="120"
              x2="410"
              y2="120"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="550"
              y1="120"
              x2="580"
              y2="120"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="720"
              y1="120"
              x2="750"
              y2="120"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="870"
              y1="120"
              x2="900"
              y2="120"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="150"
              y1="270"
              x2="200"
              y2="270"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="400"
              y1="270"
              x2="430"
              y2="200"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="400"
              y1="270"
              x2="430"
              y2="270"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="400"
              y1="270"
              x2="430"
              y2="340"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="400"
              y1="270"
              x2="640"
              y2="290"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="150"
              y1="270"
              x2="200"
              y2="470"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="400"
              y1="470"
              x2="430"
              y2="470"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="590"
              y1="470"
              x2="620"
              y2="370"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="590"
              y1="470"
              x2="620"
              y2="420"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="590"
              y1="470"
              x2="620"
              y2="470"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="590"
              y1="470"
              x2="620"
              y2="520"
              stroke="black"
              markerEnd="url(#arrow)"
            />
            <line
              x1="590"
              y1="470"
              x2="620"
              y2="570"
              stroke="black"
              markerEnd="url(#arrow)"
            />
          </svg>
        }
      />
    </div>
  );
};
