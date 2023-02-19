import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { useFormContext } from "react-hook-form";
import { Form, Question, QuizBasicInfo } from "../../../components";

const FormChilren = () => {
  const {formState} = useFormContext()
  return (
    <Stack spacing={2}>
      <QuizBasicInfo />
      {new Array(4).fill(0).map((_, index) => (
        <Question key={index} number={index + 1} />
      ))}
      <Button variant='contained' type='submit' disabled={!formState.isValid}>
        Submit
      </Button>
    </Stack>
  );
};

const Create = () => {
  function submitHandler(data: any) {
    console.log(data);
  }

  return <Form submitHandler={submitHandler}>
    <FormChilren/>
  </Form>;
};

export default Create;
