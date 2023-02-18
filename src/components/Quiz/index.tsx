import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import StartIcon from "@mui/icons-material/Start";
import EditIcon from "@mui/icons-material/Edit";
import { Grid } from "@mui/material";
// React-Router
import { Link } from "react-router-dom";
// Type
import { QuizType } from "../../types/quiz";

interface IQuiz {
  quiz: QuizType.RootObject;
}

const Quiz = ({ quiz }: IQuiz) => (
  <ListItem
    secondaryAction={
      <Grid container spacing={2}>
        <Grid item>
          <IconButton
            edge='end'
            aria-label='delete'
            component={Link}
            to={`edit/${quiz.id}`}
          >
            <EditIcon color='warning' />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            edge='end'
            aria-label='delete'
            component={Link}
            to={`play/${quiz.id}`}
          >
            <StartIcon color='primary' />
          </IconButton>
        </Grid>
      </Grid>
    }
  >
    <ListItemText primary={quiz.title} />
  </ListItem>
);

export default Quiz;
