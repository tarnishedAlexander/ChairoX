import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";

const navItems = [
  { label: "TDR", path: "/home" },
  { label: "Carta de aceptación", path: "/mis-cursos" },
  { label: "Riesgos", path: "/cursos" },
  { label: "Pruebas y Control de calidad", path: "/perfil" },
  { label: "Herramientas para la fase de planificación", path: "/herramientas" },
  //Alex links:
  { label: "Bitacora", path: "/bitacora" },
  { label: "Diagrama", path: "/diagrama" },
  { label: "Entrevistas", path: "/entrevistas" },
  { label: "Manual de usuario", path: "/manual-usuario" },
  { label: "Manual del sistema", path: "/manual-sistema" },
];

const Navbar = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "#fff" }}
    >
      <Toolbar sx={{ gap: 2 }}>
        {/* Logo */}
        <Box component={Link} to="/" sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJL8utslLBg6Nvy_TIg75nz83W6QEAjtXwQ&s" alt="Logo" style={{ height: 36, marginRight: 8, borderRadius: 50 }} />
          <Typography
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            ChairoX
          </Typography>
        </Box>

        {/* Barra de búsqueda */}
        {/* <Paper
          component="form"
          sx={{
            p: "2px 8px",
            display: "flex",
            alignItems: "center",
            width: 320,
            mx: 3,
            borderRadius: 2,
            boxShadow: "none",
            bgcolor: "#f7f9fa",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Buscar cursos..."
            inputProps={{ "aria-label": "buscar cursos" }}
          />
          <IconButton type="submit" sx={{ p: "6px" }} aria-label="search">
            <SearchIcon color="primary" />
          </IconButton>
        </Paper> */}

        {/* Navegación */}
        <Box sx={{ flexGrow: 1, display: "flex", gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              color={location.pathname === item.path ? "primary" : "inherit"}
              sx={{
                fontWeight: location.pathname === item.path ? "bold" : "normal",
                borderBottom: location.pathname === item.path ? "2px solid #1976d2" : "none",
                borderRadius: 0,
                textTransform: "none",
                fontSize: 16,
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Íconos de acciones */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* <Tooltip title="Notificaciones">
            <IconButton>
              <NotificationsIcon color="action" />
            </IconButton>
          </Tooltip> */}
          {/* Menú de usuario */}
          <Tooltip title="Perfil">
            <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
              <Avatar alt="Usuario" src="/avatar.png" />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem component={Link} to="/perfil" onClick={handleMenuClose}>
              Perfil
            </MenuItem>
            <MenuItem component={Link} to="/mis-cursos" onClick={handleMenuClose}>
              Mis Cursos
            </MenuItem>
            <MenuItem component={Link} to="/login" onClick={handleMenuClose}>
              Cerrar Sesión
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;