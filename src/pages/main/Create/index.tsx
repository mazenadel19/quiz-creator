import { useNavigate } from "react-router-dom";
import { CreateFormQuestionnaire, Form } from "../../../components";
import useQuiz from "../../../hooks/useQuiz";
import { QuizType } from "../../../types/quiz";

const Create = () => {
  const { addQuiz } = useQuiz();
  const navigate = useNavigate()
  function submitHandler(data: QuizType.RootObject) {
    addQuiz(data);
    navigate('/')
  }

  return (
    <Form submitHandler={submitHandler}>
      <CreateFormQuestionnaire />
    </Form>
  );
};

export default Create;
