import { Login } from "@mui/icons-material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Cursos } from "../pages/Cursos";
import { MisCursos } from "../pages/MisCursos";
import { Perfil } from "../pages/Perfil";
import { Home } from "../pages/Home";
import { Herramientas } from "../pages/Herramientas";
import { Bitacora } from "../pages/Bitacora";
import { Diagrama } from "../pages/Diagrama";
import { ManualUsuario } from "../pages/ManualUsuario";
import { ManualSistema } from "../pages/ManualSistema";
import { Entrevistas } from "../pages/Entrevistas";
import { DbDiagram } from "../pages/dbdiagram";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="mis-cursos" element={<MisCursos />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="login" element={<Login />} />
          <Route path="herramientas" element={<Herramientas />} />

          <Route path="bitacora" element={<Bitacora />} />
          <Route path="diagrama" element={<Diagrama />} />
          <Route path="dbdiagram" element={<DbDiagram />} />

          <Route path="entrevistas" element={<Entrevistas />} />
          <Route path="manual-usuario" element={<ManualUsuario />} />
          <Route path="manual-sistema" element={<ManualSistema />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
