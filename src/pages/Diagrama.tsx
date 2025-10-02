import React, { useState } from "react";

interface SlideProps {
  title: string;
  content: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ title, content }) => (
  <div className="slide bg-white shadow-2xl rounded-2xl p-8 mb-6">
    <h1 className="text-3xl font-bold text-center mb-8 text-blue-900 border-b-4 border-blue-500 pb-4">
      {title}
    </h1>
    <div className="slide-content">{content}</div>
  </div>
);

// Componente para el diagrama de navegación
const DiagramaNavegacion = () => (
  <div className="flex items-center justify-center overflow-x-auto">
    <svg width="1400" height="800" viewBox="0 0 1400 800">
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
          <path d="M0,0 L0,6 L9,3 z" fill="#1e40af" />
        </marker>
      </defs>

      <rect
        x="20"
        y="20"
        width="1360"
        height="760"
        rx="20"
        stroke="#2563eb"
        strokeWidth="3"
        fill="white"
        fillOpacity="0.9"
      />

      {/* Nodos del sistema */}
      {[
        {
          x: 50,
          y: 350,
          w: 160,
          h: 50,
          stroke: "#2563eb",
          text: "Página de Inicio",
          fill: "#dbeafe",
        },
        {
          x: 300,
          y: 100,
          w: 160,
          h: 50,
          stroke: "#dc2626",
          text: "Quiénes Somos",
          fill: "#fee2e2",
        },
        {
          x: 300,
          y: 300,
          w: 220,
          h: 50,
          stroke: "#2563eb",
          text: "Catálogo de Cursos",
          fill: "#dbeafe",
        },
        {
          x: 600,
          y: 200,
          w: 160,
          h: 50,
          stroke: "#059669",
          text: "Servicios CEC",
          fill: "#d1fae5",
        },
        {
          x: 600,
          y: 280,
          w: 160,
          h: 50,
          stroke: "#059669",
          text: "Servicios SERLIS",
          fill: "#d1fae5",
        },
        {
          x: 600,
          y: 360,
          w: 200,
          h: 50,
          stroke: "#059669",
          text: "Cursos CCC",
          fill: "#d1fae5",
        },
        {
          x: 900,
          y: 300,
          w: 160,
          h: 50,
          stroke: "#7c3aed",
          text: "Aula Virtual",
          fill: "#ede9fe",
        },
        {
          x: 1150,
          y: 300,
          w: 200,
          h: 50,
          stroke: "#2563eb",
          text: "Certificación",
          fill: "#dbeafe",
        },
        {
          x: 300,
          y: 500,
          w: 220,
          h: 50,
          stroke: "#dc2626",
          text: "Registro/Login",
          fill: "#fee2e2",
        },
        {
          x: 600,
          y: 500,
          w: 160,
          h: 50,
          stroke: "#2563eb",
          text: "Autenticación",
          fill: "#dbeafe",
        },
        {
          x: 850,
          y: 200,
          w: 160,
          h: 50,
          stroke: "#7c3aed",
          text: "Perfil Usuario",
          fill: "#ede9fe",
        },
        {
          x: 850,
          y: 500,
          w: 200,
          h: 50,
          stroke: "#ea580c",
          text: "Panel Admin",
          fill: "#fed7aa",
        },
        {
          x: 1150,
          y: 400,
          w: 160,
          h: 50,
          stroke: "#059669",
          text: "CRUD Cursos",
          fill: "#d1fae5",
        },
        {
          x: 1150,
          y: 460,
          w: 200,
          h: 50,
          stroke: "#059669",
          text: "Gestión Usuarios",
          fill: "#d1fae5",
        },
        {
          x: 1150,
          y: 520,
          w: 220,
          h: 50,
          stroke: "#059669",
          text: "Inscripciones",
          fill: "#d1fae5",
        },
        {
          x: 1150,
          y: 580,
          w: 220,
          h: 50,
          stroke: "#059669",
          text: "Reportes",
          fill: "#d1fae5",
        },
        {
          x: 1150,
          y: 640,
          w: 260,
          h: 50,
          stroke: "#2563eb",
          text: "Consultoría/Auditoría",
          fill: "#dbeafe",
        },
        {
          x: 900,
          y: 100,
          w: 240,
          h: 50,
          stroke: "#7c3aed",
          text: "Contacto/Cotización",
          fill: "#ede9fe",
        },
      ].map((node, i) => (
        <g key={i}>
          <rect
            x={node.x}
            y={node.y}
            width={node.w}
            height={node.h}
            rx="8"
            stroke={node.stroke}
            strokeWidth="2"
            fill={node.fill}
          />
          <text
            x={node.x + node.w / 2}
            y={node.y + node.h / 2 + 5}
            textAnchor="middle"
            fontSize="13"
            fontWeight="600"
            fill="#1e293b"
          >
            {node.text}
          </text>
        </g>
      ))}

      {/* Conexiones */}
      {[
        [210, 375, 300, 125],
        [210, 375, 300, 325],
        [210, 375, 300, 525],
        [520, 325, 600, 225],
        [520, 325, 600, 305],
        [520, 325, 600, 385],
        [760, 225, 900, 125],
        [800, 385, 900, 325],
        [1010, 225, 980, 300],
        [1060, 325, 1150, 325],
        [520, 525, 600, 525],
        [760, 525, 850, 525],
        [760, 525, 850, 225],
        [1050, 525, 1150, 425],
        [1050, 525, 1150, 485],
        [1050, 525, 1150, 545],
        [1050, 525, 1150, 605],
        [1050, 525, 1150, 665],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#1e40af"
          strokeWidth="2"
          markerEnd="url(#arrow)"
        />
      ))}
    </svg>
  </div>
);

// Componente para el diagrama de base de datos
const DiagramaBaseDatos = () => (
  <div className="flex items-center justify-center overflow-x-auto">
    <svg width="1400" height="900" viewBox="0 0 1400 900">
      <defs>
        <marker
          id="arrow-db"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="#475569" />
        </marker>
      </defs>

      <rect
        x="10"
        y="10"
        width="1380"
        height="880"
        rx="15"
        fill="#f8fafc"
        stroke="#cbd5e1"
        strokeWidth="2"
      />

      {/* Título de secciones */}
      <text x="150" y="50" fontSize="20" fontWeight="bold" fill="#1e293b">
        Permisos y Roles
      </text>
      <text x="700" y="50" fontSize="20" fontWeight="bold" fill="#1e293b">
        Usuarios y Organizaciones
      </text>
      <text x="150" y="450" fontSize="20" fontWeight="bold" fill="#1e293b">
        Cursos y Contenido
      </text>

      {/* Tablas de la base de datos */}
      {[
        // Sección de Permisos
        {
          x: 50,
          y: 80,
          name: "permission_category",
          fields: ["id", "name", "display_name"],
          color: "#fef3c7",
        },
        {
          x: 50,
          y: 200,
          name: "permission",
          fields: ["id", "category_id", "description"],
          color: "#fef3c7",
        },
        {
          x: 280,
          y: 140,
          name: "action",
          fields: ["id", "permission_id", "name", "display_name"],
          color: "#fef3c7",
        },
        {
          x: 50,
          y: 320,
          name: "roles",
          fields: ["id", "name"],
          color: "#dbeafe",
        },
        {
          x: 280,
          y: 280,
          name: "role_permissions",
          fields: ["role_id", "permission_id"],
          color: "#e0e7ff",
        },

        // Sección de Usuarios
        {
          x: 600,
          y: 80,
          name: "organization",
          fields: ["id", "name", "nit", "celphone"],
          color: "#d1fae5",
        },
        {
          x: 600,
          y: 220,
          name: "user_account",
          fields: ["id", "username", "email", "password", "organization_id"],
          color: "#d1fae5",
        },
        {
          x: 900,
          y: 200,
          name: "user_roles",
          fields: ["user_id", "role_id"],
          color: "#e0e7ff",
        },

        // Sección de Cursos
        {
          x: 50,
          y: 480,
          name: "services",
          fields: ["id", "name", "description", "price"],
          color: "#fce7f3",
        },
        {
          x: 300,
          y: 480,
          name: "course",
          fields: ["id", "name", "description"],
          color: "#fce7f3",
        },
        {
          x: 550,
          y: 480,
          name: "class",
          fields: ["id", "course_id", "url", "content", "description"],
          color: "#fce7f3",
        },
        {
          x: 50,
          y: 650,
          name: "user_courses",
          fields: ["user_id", "course_id", "date", "status"],
          color: "#e0e7ff",
        },
        {
          x: 300,
          y: 650,
          name: "course_comments",
          fields: ["id", "course_id", "user_id", "content"],
          color: "#fed7aa",
        },
        {
          x: 550,
          y: 650,
          name: "class_comments",
          fields: ["id", "class_id", "user_id", "content"],
          color: "#fed7aa",
        },
        {
          x: 800,
          y: 580,
          name: "class_reproductions",
          fields: ["id", "user_id", "class_id", "progress", "time"],
          color: "#ede9fe",
        },
      ].map((table, i) => (
        <g key={i}>
          <rect
            x={table.x}
            y={table.y}
            width="220"
            height="20"
            fill="#1e293b"
            rx="4"
          />
          <text
            x={table.x + 110}
            y={table.y + 14}
            textAnchor="middle"
            fontSize="12"
            fontWeight="bold"
            fill="white"
          >
            {table.name}
          </text>
          <rect
            x={table.x}
            y={table.y + 20}
            width="220"
            height={table.fields.length * 20}
            fill={table.color}
            stroke="#94a3b8"
            strokeWidth="1"
            rx="4"
          />
          {table.fields.map((field, j) => (
            <text
              key={j}
              x={table.x + 10}
              y={table.y + 35 + j * 20}
              fontSize="11"
              fill="#334155"
            >
              {field}
            </text>
          ))}
        </g>
      ))}

      {/* Relaciones */}
      {[
        // Permisos
        [140, 200, 140, 180],
        [270, 235, 280, 190],
        [270, 165, 280, 165],
        [140, 340, 280, 305],
        [270, 290, 270, 260],
        // Usuarios
        [710, 220, 710, 180],
        [820, 260, 900, 230],
        [600, 340, 160, 340],
        // Cursos
        [410, 515, 550, 515],
        [770, 515, 850, 620],
        [160, 650, 160, 590],
        [320, 515, 320, 650],
        [410, 680, 550, 680],
        [660, 515, 820, 610],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#475569"
          strokeWidth="2"
          markerEnd="url(#arrow-db)"
        />
      ))}

      {/* Leyenda */}
      <g>
        <text x="1050" y="150" fontSize="16" fontWeight="bold" fill="#1e293b">
          Leyenda
        </text>
        <rect
          x="1050"
          y="170"
          width="40"
          height="20"
          fill="#fef3c7"
          stroke="#94a3b8"
        />
        <text x="1100" y="185" fontSize="12" fill="#334155">
          Permisos
        </text>
        <rect
          x="1050"
          y="200"
          width="40"
          height="20"
          fill="#dbeafe"
          stroke="#94a3b8"
        />
        <text x="1100" y="215" fontSize="12" fill="#334155">
          Roles
        </text>
        <rect
          x="1050"
          y="230"
          width="40"
          height="20"
          fill="#d1fae5"
          stroke="#94a3b8"
        />
        <text x="1100" y="245" fontSize="12" fill="#334155">
          Usuarios
        </text>
        <rect
          x="1050"
          y="260"
          width="40"
          height="20"
          fill="#fce7f3"
          stroke="#94a3b8"
        />
        <text x="1100" y="275" fontSize="12" fill="#334155">
          Cursos
        </text>
        <rect
          x="1050"
          y="290"
          width="40"
          height="20"
          fill="#e0e7ff"
          stroke="#94a3b8"
        />
        <text x="1100" y="305" fontSize="12" fill="#334155">
          Relaciones
        </text>
      </g>
    </svg>
  </div>
);

// Componente para el diagrama de arquitectura
const DiagramaArquitectura = () => (
  <div className="flex items-center justify-center">
    <svg width="1200" height="700" viewBox="0 0 1200 700">
      <defs>
        <marker
          id="arrow-arch"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="#1e40af" />
        </marker>
      </defs>

      <rect
        x="10"
        y="10"
        width="1180"
        height="680"
        rx="15"
        fill="#f8fafc"
        stroke="#2563eb"
        strokeWidth="3"
      />

      {/* Capa de Cliente */}
      <rect
        x="100"
        y="50"
        width="1000"
        height="120"
        rx="10"
        fill="#dbeafe"
        stroke="#2563eb"
        strokeWidth="2"
      />
      <text
        x="600"
        y="80"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="#1e293b"
      >
        Capa de Cliente
      </text>
      <rect
        x="200"
        y="100"
        width="250"
        height="50"
        rx="8"
        fill="white"
        stroke="#3b82f6"
        strokeWidth="2"
      />
      <text x="325" y="130" textAnchor="middle" fontSize="14" fontWeight="600">
        React (Frontend)
      </text>
      <rect
        x="650"
        y="100"
        width="250"
        height="50"
        rx="8"
        fill="white"
        stroke="#3b82f6"
        strokeWidth="2"
      />
      <text x="775" y="130" textAnchor="middle" fontSize="14" fontWeight="600">
        Navegador / Mobile
      </text>

      {/* Capa de Aplicación */}
      <rect
        x="100"
        y="220"
        width="1000"
        height="180"
        rx="10"
        fill="#fef3c7"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      <text
        x="600"
        y="250"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="#1e293b"
      >
        Capa de Aplicación
      </text>
      <rect
        x="150"
        y="280"
        width="200"
        height="50"
        rx="8"
        fill="white"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      <text x="250" y="310" textAnchor="middle" fontSize="14" fontWeight="600">
        Node.js + Express
      </text>
      <rect
        x="400"
        y="280"
        width="150"
        height="50"
        rx="8"
        fill="white"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      <text x="475" y="305" textAnchor="middle" fontSize="12" fontWeight="600">
        JWT Auth
      </text>
      <rect
        x="600"
        y="280"
        width="200"
        height="50"
        rx="8"
        fill="white"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      <text x="700" y="310" textAnchor="middle" fontSize="14" fontWeight="600">
        API REST
      </text>
      <rect
        x="850"
        y="280"
        width="200"
        height="50"
        rx="8"
        fill="white"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      <text x="950" y="310" textAnchor="middle" fontSize="14" fontWeight="600">
        Controllers
      </text>

      {/* Capa de Datos */}
      <rect
        x="100"
        y="450"
        width="1000"
        height="180"
        rx="10"
        fill="#d1fae5"
        stroke="#059669"
        strokeWidth="2"
      />
      <text
        x="600"
        y="480"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="#1e293b"
      >
        Capa de Datos
      </text>
      <rect
        x="200"
        y="510"
        width="200"
        height="50"
        rx="8"
        fill="white"
        stroke="#059669"
        strokeWidth="2"
      />
      <text x="300" y="540" textAnchor="middle" fontSize="14" fontWeight="600">
        PostgreSQL
      </text>
      <rect
        x="450"
        y="510"
        width="200"
        height="50"
        rx="8"
        fill="white"
        stroke="#059669"
        strokeWidth="2"
      />
      <text x="550" y="540" textAnchor="middle" fontSize="14" fontWeight="600">
        Knex.js (ORM)
      </text>
      <rect
        x="700"
        y="510"
        width="250"
        height="50"
        rx="8"
        fill="white"
        stroke="#059669"
        strokeWidth="2"
      />
      <text x="825" y="540" textAnchor="middle" fontSize="14" fontWeight="600">
        S3 (MinIO / AWS)
      </text>

      {/* Infraestructura */}
      <rect
        x="150"
        y="50"
        width="150"
        height="40"
        rx="8"
        fill="#ede9fe"
        stroke="#7c3aed"
        strokeWidth="2"
      />
      <text x="225" y="75" textAnchor="middle" fontSize="12" fontWeight="600">
        Docker
      </text>
      <rect
        x="900"
        y="50"
        width="150"
        height="40"
        rx="8"
        fill="#ede9fe"
        stroke="#7c3aed"
        strokeWidth="2"
      />
      <text x="975" y="75" textAnchor="middle" fontSize="12" fontWeight="600">
        GitHub Actions
      </text>

      {/* Monitoreo */}
      <rect
        x="950"
        y="350"
        width="180"
        height="80"
        rx="8"
        fill="#fed7aa"
        stroke="#ea580c"
        strokeWidth="2"
      />
      <text x="1040" y="380" textAnchor="middle" fontSize="14" fontWeight="600">
        Monitoreo
      </text>
      <text x="1040" y="400" textAnchor="middle" fontSize="12">
        Prometheus
      </text>
      <text x="1040" y="420" textAnchor="middle" fontSize="12">
        Grafana
      </text>

      {/* Flechas de conexión */}
      <line
        x1="325"
        y1="150"
        x2="250"
        y2="280"
        stroke="#1e40af"
        strokeWidth="2"
        markerEnd="url(#arrow-arch)"
      />
      <line
        x1="775"
        y1="150"
        x2="700"
        y2="280"
        stroke="#1e40af"
        strokeWidth="2"
        markerEnd="url(#arrow-arch)"
      />
      <line
        x1="250"
        y1="330"
        x2="300"
        y2="510"
        stroke="#1e40af"
        strokeWidth="2"
        markerEnd="url(#arrow-arch)"
      />
      <line
        x1="475"
        y1="330"
        x2="550"
        y2="510"
        stroke="#1e40af"
        strokeWidth="2"
        markerEnd="url(#arrow-arch)"
      />
      <line
        x1="700"
        y1="330"
        x2="825"
        y2="510"
        stroke="#1e40af"
        strokeWidth="2"
        markerEnd="url(#arrow-arch)"
      />
      <line
        x1="950"
        y1="330"
        x2="1000"
        y2="350"
        stroke="#ea580c"
        strokeWidth="2"
        markerEnd="url(#arrow-arch)"
      />
    </svg>
  </div>
);

// Componente principal
export const Diagrama = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Diagrama de Navegación del Sistema",
      content: <DiagramaNavegacion />,
      description:
        "Flujo de navegación entre las páginas y funcionalidades principales del sistema",
    },
    {
      title: "Diagrama de Base de Datos - Esquema Relacional",
      content: <DiagramaBaseDatos />,
      description:
        "Estructura completa de la base de datos con tablas, campos y relaciones",
    },
    {
      title: "Diagrama de Arquitectura del Sistema",
      content: <DiagramaArquitectura />,
      description:
        "Capas del sistema: Cliente, Aplicación, Datos e Infraestructura",
    },
  ];

  return (
    <div className="presentation min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Navegación */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                currentSlide === index
                  ? "bg-blue-600 text-white shadow-lg scale-105 transform"
                  : "bg-white text-blue-600 hover:bg-blue-50 shadow-md"
              }`}
            >
              {index === 0
                ? "Navegación"
                : index === 1
                ? "Base de Datos"
                : "Arquitectura"}
            </button>
          ))}
        </div>

        {/* Contenido del slide */}
        <Slide
          title={slides[currentSlide].title}
          content={
            <div>
              <p className="text-center text-gray-600 mb-6 text-lg italic">
                {slides[currentSlide].description}
              </p>
              {slides[currentSlide].content}
            </div>
          }
        />

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
