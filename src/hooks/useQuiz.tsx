import { useContext } from "react";
import { QuizContext } from "../store/QuizContext";

const useQuiz = () => {
  const { quizes, addQuiz, updateQuiz } = useContext(QuizContext);

  return { quizes, addQuiz, updateQuiz };
};

export default useQuiz;
