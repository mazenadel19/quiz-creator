import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import { Grid } from "@mui/material";
// React-Router
import { Link } from "react-router-dom";
// Type
import { QuizType } from "../../../types/quiz";

interface QuizProps {
  quiz: QuizType.RootObject;
}

const Quiz = ({ quiz }: QuizProps) => (
  <ListItem
    secondaryAction={
      <Grid container spacing={2}>
        <Grid item>
          <IconButton
            edge='end'
            aria-label='edit'
            title='edit'
            component={Link}
            to={`edit/${quiz.id}`}
            sx={{ backgroundColor: "#eee" }}
          >
            <EditIcon color='warning' />
          </IconButton>
        </Grid>
      </Grid>
    }
  >
    <ListItemText primary={quiz.title} />
  </ListItem>
);

export default Quiz;
