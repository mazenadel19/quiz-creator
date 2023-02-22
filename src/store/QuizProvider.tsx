import { ReactNode, useState } from "react";
import req from "../assets/requirment.json";
import { QuizType } from "../types/quiz";
import { QuizContext } from "./QuizContext";

interface IQuizeProvider {
  children: ReactNode;
}

const STATIC_DATA = new Array(10)
  .fill(req)
  .map((item) => ({ ...item, id: crypto.randomUUID() }));

const QuizeProvider = ({ children }: IQuizeProvider) => {
  const [quizes, setQuizes] = useState<QuizType.RootObject[]>(STATIC_DATA);

  function addQuiz() {}
  function updateQuiz() {}

  return (
    <QuizContext.Provider
      value={{
        quizes,
        addQuiz,
        updateQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizeProvider;
