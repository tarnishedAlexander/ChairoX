import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Cursos", path: "/cursos" },
  { label: "Mis Cursos", path: "/mis-cursos" },
  { label: "Perfil", path: "/perfil" },
  { label: "Cerrar Sesión", path: "/login" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {/* Logo o nombre del portal */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
            color: "warning.dark",
            textDecoration: "none",
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          ChairoX Cursos
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color={location.pathname === item.path ? "secondary" : "inherit"}
              sx={{
                mx: 1,
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                borderBottom: location.pathname === item.path ? "2px solid #fff" : "none",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;