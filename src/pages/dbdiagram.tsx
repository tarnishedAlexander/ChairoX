export const DbDiagram = () => {
  return (
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

        <text x="150" y="50" fontSize="20" fontWeight="bold" fill="#1e293b">
          Permisos y Roles
        </text>
        <text x="700" y="50" fontSize="20" fontWeight="bold" fill="#1e293b">
          Usuarios y Organizaciones
        </text>
        <text x="150" y="450" fontSize="20" fontWeight="bold" fill="#1e293b">
          Cursos y Contenido
        </text>

        {/* Tables */}
        {[
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

        {/* Relationships */}
        {[
          [140, 200, 140, 180],
          [270, 235, 280, 190],
          [270, 165, 280, 165],
          [140, 340, 280, 305],
          [270, 290, 270, 260],
          [710, 220, 710, 180],
          [820, 260, 900, 230],
          [600, 340, 160, 340],
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

        {/* Legend */}
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
};

export default DbDiagram;
