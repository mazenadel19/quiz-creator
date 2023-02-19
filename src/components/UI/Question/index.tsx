// MUI
import { Alert, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
// RHF
import { useFormContext, useFieldArray } from "react-hook-form";
// Components
import { Input, RadioButtons } from "../../";
// Type
import { QuizType } from "../../../types/quiz";

const Question = ({ number }: { number: number }) => {
  const { getValues, setError, unregister } = useFormContext();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const { append } = useFieldArray({ name: "Questions" });

  const handleAddQuestion = () => {
    const fields = [
      `Q${number}_text`,
      `Q${number}_feedback_true`,
      `Q${number}_feedback_false`,
      `Q${number}_answer1`,
      `Q${number}_answer2`,
      `Q${number}_answer3`,
      `Q${number}_answer4`,
      `Q${number}_is_true`,
    ];
    for (let i = 0; i < fields.length; i++) {
      if (!getValues(fields[i])) {
        setError(
          fields[i],
          { type: "required", message: "required" },
        );
        return;
      }
    }

    const question: QuizType.Question = {
      text: getValues(`Q${number}_text`),
      answers: [
        {
          text: getValues(`Q${number}_answer1`),
          is_true: getValues(`Q${number}_is_true`) === "1",
        },
        {
          text: getValues(`Q${number}_answer2`),
          is_true: getValues(`Q${number}_is_true`) === "2",
        },
        {
          text: getValues(`Q${number}_answer3`),
          is_true: getValues(`Q${number}_is_true`) === "3",
        },
        {
          text: getValues(`Q${number}_answer4`),
          is_true: getValues(`Q${number}_is_true`) === "4",
        },
      ],
      feedback_false: getValues(`Q${number}_feedback_false`),
      feedback_true: getValues(`Q${number}_feedback_false`),
    };

    append(question);
    unregister(fields);
    setShowSuccessMessage(true);
  };

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
            color='secondary'
            variant='contained'
            onClick={handleAddQuestion}
          >
            Add Question
          </Button>
        </Grid>
      </Grid>
    </fieldset>
  );
};
export default Question;
