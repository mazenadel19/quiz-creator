import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import StartIcon from "@mui/icons-material/Start";
import EditIcon from "@mui/icons-material/Edit";

// Type
import { QuizType } from "../../types/quiz";
import { Grid } from "@mui/material";

interface IQuiz {
  quiz: QuizType.RootObject;
}

const Quiz = ({ quiz }: IQuiz) => (
  <ListItem
    secondaryAction={
      <Grid container spacing={2}>
        <Grid item>
          <IconButton edge='end' aria-label='delete'>
            <EditIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton edge='end' aria-label='delete'>
            <StartIcon />
          </IconButton>
        </Grid>
      </Grid>
    }
  >
    <ListItemText primary={quiz.title} />
  </ListItem>
);

export default Quiz;
