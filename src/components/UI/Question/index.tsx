// MUI
import { Alert, Button, Grid, Typography } from "@mui/material";
// Components
import { Input, RadioButtons } from "../../";
import useAppendQuestion from "../../../hooks/useAppendQuestion";

interface QuestionProps {
  number: number
  isEdit?: boolean
}

const Question = ({ number, isEdit }: QuestionProps) => {
  const { handleAppendQuestion, register, showSuccessMessage } = useAppendQuestion(number)

  if (showSuccessMessage) {
    return (
      <Alert
        variant='standard'
        severity='success'
        sx={{ alignItems: "center" }}
      >
        <Grid container direction='column' spacing={2}>
          <Grid item>
            <Typography variant='h6'>
              Question {number} Added Successfully
            </Typography>
          </Grid>
        </Grid>
      </Alert>
    );
  }

  return (
    <fieldset>
      <legend>Question {number}</legend>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Input name={`Q${number}_text`} label='The Question' />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            name={`Q${number}_feedback_true`}
            label='True Answer Feedback'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            name={`Q${number}_feedback_false`}
            label='False Answer Feedback'
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input name={`Q${number}_answer1`} label='First Answer' />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input name={`Q${number}_answer2`} label='Second Answer' />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input name={`Q${number}_answer3`} label='Third Answer' />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Input name={`Q${number}_answer4`} label='Fourth Answer' />
        </Grid>
        <Grid item xs={12} sm={12}>
          <RadioButtons
            name={`Q${number}_is_true`}
            label={"Correct Answer"}
            option1={"First Answer"}
            option2={"Second Answer"}
            option3={"Third Answer"}
            option4={"Fourth Answer"}
          />
        </Grid>
        <Grid item display='flex' flexDirection='column' xs={12}>
          <Button
            {...register("AddQuestion", { required: true })}
            color='secondary'
            variant='contained'
            onClick={handleAppendQuestion}
          >
            {isEdit ? 'Edit Question' : 'Add Question'}
          </Button>
        </Grid>
      </Grid>
    </fieldset>
  );
};
export default Question;
