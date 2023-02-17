
import { ReactNode, useState } from "react";
import req from "../assets/requirment.json";
import { QuizType } from "../types/quiz";
import { QuizeContext } from "./QuizContext";

interface IQuizeProvider {
  children: ReactNode;
}

const STATIC_DATA = new Array(10).fill(req);

const QuizeProvider = ({ children }: IQuizeProvider) => {
  const [quizes, setQuizes] = useState<QuizType.RootObject[]>(STATIC_DATA);

  function addQuiz() {}
  function updateQuiz() {}

  return (
    <QuizeContext.Provider
      value={{
        quizes,
        addQuiz,
        updateQuiz,
      }}
    >
      {children}
    </QuizeContext.Provider>
  );
};

export default QuizeProvider;
