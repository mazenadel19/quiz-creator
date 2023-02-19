import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { Form, Question, QuizBasicInfo } from "../../../components";

const Create = () => {
  function submitHandler(data: any) {
    console.log(data);
  }

  return (
    <Form submitHanlder={submitHandler}>
      <Stack spacing={2}>
        <QuizBasicInfo />
        {new Array(4).fill(0).map((_, index) => <Question number={index + 1} />)}
        <Button variant='contained' type='submit'>Submit</Button>
      </Stack>
    </Form>
  );
};

export default Create;
