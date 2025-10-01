import { Login } from "@mui/icons-material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Cursos } from "../pages/Cursos";
import { MisCursos } from "../pages/MisCursos";
import { Perfil } from "../pages/Perfil";
import { Home } from "../pages/Home";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={< Home />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="mis-cursos" element={<MisCursos />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
