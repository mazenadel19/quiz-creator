// Hook
import useQuiz from "../../../hooks/useQuiz";
// MUI
import { Typography, Grid, List, Box, Stack } from "@mui/material";
// Component
import { Quiz } from "../.."

export default function Quizes() {
  const { quizes } = useQuiz()

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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <List>
        <Grid container spacing={2} >
          {quizes.map((quiz) => (
            <Grid
              justifyContent="space-evenly"
              display={"flex"}
              key={quiz.id}
              item
              xs={12}
              sm={quizes.length > 1 && 6}
              md={quizes.length > 2 && 4}
              lg={quizes.length > 3 && 3}
            >
              <Quiz quiz={quiz} />
            </Grid>
          ))}
        </Grid>
      </List>
    </Box>
  );
}
