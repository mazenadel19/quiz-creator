import { ReactNode, useState } from "react";
import { QuizType } from "../types/quiz";
import { QuizeContext } from "./QuizContext";

interface IQuizeProvider {
  children: ReactNode;
}

const QuizeProvider = ({ children }: IQuizeProvider) => {
  const [quizes, setQuizes] = useState<QuizType.RootObject[]>([]);

  function addQuiz() {}
  function removeQuiz() {}
  function updateQuiz() {}

  return (
    <QuizeContext.Provider
      value={{
        quizes,
        addQuiz,
        removeQuiz,
        updateQuiz,
      }}
    >
      {children}
    </QuizeContext.Provider>
  );
};

export default QuizeProvider;
