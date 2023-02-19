import { Grid } from "@mui/material";
import { Input } from "../../";

const QuizBasicInfo = () => {
  return (
    <fieldset>
          <legend>Basic Info</legend>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Input name="title" label="Title" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Input name="description" label="Description" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Input name="url" label="url" type="url" />
            </Grid>
          </Grid>
        </fieldset>
  )
}
export default QuizBasicInfo