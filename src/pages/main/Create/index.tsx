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
        <Question number={1} />
        {/* <Question number={2} /> */}
        {/*
        <Question number={3} />
        <Question number={4} /> */}

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Stack>
    </Form>
  );
};

export default Create;
