import { Grid, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { Form, Input, RadioButtons } from "../../../components";

const Create = () => {
  function submitHandler(data: any) {
    console.log(data);
  }

  return (
    <Form submitHanlder={submitHandler}>
      <Stack spacing={2}>
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

        <fieldset>
          <legend>Question 1</legend>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Input name="text" label="The Question" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input name="feedback_true" label="True Answer Feedback" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Input name="feedback_false" label="False Answer Feedback" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Input name="answer1" label="First Answer" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Input name="answer2" label="Second Answer" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Input name="answer3" label="Third Answer" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Input name="answer4" label="Fourth Answer" />
            </Grid>
            <Grid item xs={12} sm={12}>
              <RadioButtons
                name={"is_true_answer"}
                label={"Correct Answer"}
                option1={"First Answer"}
                option2={"Second Answer"}
                option3={"Third Answer"}
                option4={"Fourth Answer"}
              />
            </Grid>
          </Grid>
        </fieldset>

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </Form>
  );
};

export default Create;
