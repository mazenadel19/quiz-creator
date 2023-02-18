// Store
import { useContext } from "react";
import { QuizeContext } from "../../store/QuizContext";
// MUI
import { Typography, Grid, List, Box, Stack } from "@mui/material";
// Component
import Quiz from "../Quiz";

export default function Quizes() {
  const { quizes } = useContext(QuizeContext);

  if (quizes.length === 0) {
    return (
      <Stack spacing={5}>
        <Typography variant='h1' textAlign={"center"}>
          No Quizes Yet ...
        </Typography>
        <Typography variant='h2' textAlign={"center"}>
          Create A Quiz
        </Typography>
      </Stack>
    );
  }

  console.log({quizes});
  return (
    <Box sx={{ flexGrow: 1 }}>
      <List>
        <Grid container spacing={2}>
          {quizes.map((quiz) => (
            <Grid key={quiz.id} item xs={12} sm={6} md={4} lg={3}>
              <Quiz quiz={quiz} />
            </Grid>
          ))}
        </Grid>
      </List>
    </Box>
  );
}
