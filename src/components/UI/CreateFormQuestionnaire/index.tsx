import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { useFormContext } from "react-hook-form";
import { Question, QuizBasicInfo } from "../..";

interface CreateFormQuestionnaireProps {
  isEdit?: boolean
}

const CreateFormQuestionnaire = ({ isEdit }: CreateFormQuestionnaireProps) => {
  const { formState } = useFormContext();
  return (
    <Stack spacing={2}>
      <QuizBasicInfo />
      {new Array(4).fill(0).map((_, index) => (
        <Question key={index} number={index + 1} isEdit={isEdit} />
      ))}
      <Button variant='contained' type='submit' disabled={!formState.isValid}>
        Submit
      </Button>
    </Stack>
  );
};

export default CreateFormQuestionnaire