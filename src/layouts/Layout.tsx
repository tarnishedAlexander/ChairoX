import { Box, CssBaseline, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";

export const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      <Navbar />
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, backgroundColor: "#F9FAFB", minHeight: "100vh" }}
      >
        <Toolbar /> 
        <Outlet />  
      </Box>
    </Box>
  );
};