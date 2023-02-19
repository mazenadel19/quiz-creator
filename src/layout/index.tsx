// MUI
import { Grid, Box, Toolbar } from "@mui/material";
// React-Router
import { Outlet } from "react-router-dom";
// Components
import { Header } from "../components";

const AppLayout = () => (
  <Grid container>
    <Grid item xs={12}>
      <Header />
    </Grid>
    <Grid item xs={12}>
      <Box component='main' sx={{ p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Grid>
  </Grid>
);

export default AppLayout;
