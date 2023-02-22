import { ReactNode, useState } from "react";
import req from "../assets/requirment.json";
import { QuizType } from "../types/quiz";
import { QuizContext } from "./QuizContext";

interface IQuizeProvider {
  children: ReactNode;
}

// const STATIC_DATA = new Array(10)
//   .fill(req)
//   .map((item) => ({ ...item, id: crypto.randomUUID() }));

const QuizeProvider = ({ children }: IQuizeProvider) => {
  const [quizes, setQuizes] = useState<QuizType.RootObjectRequired[]>([]);
  console.log({quizes});


  function addQuiz(data: QuizType.RootObject) {
    console.log(data)
    const CURRENT_DATE = new Date().toLocaleString();
    data.created = CURRENT_DATE;
    data.modified = CURRENT_DATE;
    data.id = crypto.randomUUID();
    data.score = 0;
    data.questions = data.questions.map((question) => {
      const answers = question.answers.map((answer) => ({
        ...answer,
        id: crypto.randomUUID(),
      }));
      return { ...question, answers, id: crypto.randomUUID() };
    });
    setQuizes(
      (prev: QuizType.RootObjectRequired[]) =>
        [...prev, data] as QuizType.RootObjectRequired[]
    );
  }

  function updateQuiz(data: QuizType.RootObject) {}

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
