// Context
import { useContext } from "react";
import { QuizeContext } from "../../store/QuizContext";
// MUI
import { Typography, Grid, List, Box } from "@mui/material";
// Component
import Quiz from "../Quiz";

export default function Quizes() {
  const { quizes } = useContext(QuizeContext);

  if (quizes.length >= 0) {
    return (
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant='h1' textAlign={"center"}>
            No Quizes Yet ...
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h2' textAlign={"center"}>
            Create A Quiz
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <List>
        <Grid container spacing={2}>
          {quizes.map((quiz) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Quiz key={quiz.id} quiz={quiz} />
            </Grid>
          ))}
        </Grid>
      </List>
    </Box>
  );
}
