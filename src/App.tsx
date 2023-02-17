// MUI
import { Grid, Box, Toolbar } from "@mui/material";
// Components
import Header from "./components/Header";
import Quizes from "./components/Quizes";

function App() {

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Box component='main' sx={{ p: 3 }}>
          <Toolbar />
          <Quizes/>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
