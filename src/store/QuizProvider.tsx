import { ReactNode, useState } from "react";
import { QuizType } from "../types/quiz";
import { QuizContext } from "./QuizContext";

interface IQuizeProvider {
  children: ReactNode;
}
const localQuizes = localStorage.getItem("quizes")
const localData = localQuizes ? JSON.parse(localQuizes) : [];

const QuizeProvider = ({ children }: IQuizeProvider) => {
  const [quizes, setQuizes] = useState<QuizType.RootObjectRequired[]>(localData);

  function addIndexToQuestionsAndAnswers(questions: QuizType.Question[]) {
    return questions.map((question) => {
      const answers = question.answers.map((answer) => ({
        ...answer,
        id: crypto.randomUUID(),
      }));
      return { ...question, answers, id: crypto.randomUUID() };
    });
  }

  function addQuiz(data: QuizType.RootObject) {
    const CURRENT_DATE = new Date().toLocaleString();
    data.created = CURRENT_DATE;
    data.modified = CURRENT_DATE;
    data.id = crypto.randomUUID();
    data.score = 0;
    data.questions = addIndexToQuestionsAndAnswers(data.questions)
    setQuizes(
      (prev: QuizType.RootObjectRequired[]) => {
        localStorage.setItem("quizes", JSON.stringify([...prev, data]));
        return [...prev, data] as QuizType.RootObjectRequired[]
      }
    );
  }

  function updateQuiz(data: QuizType.RootObjectRequired) {
    const CURRENT_DATE = new Date().toLocaleString();
    data.modified = CURRENT_DATE;
    data.questions = addIndexToQuestionsAndAnswers(data.questions)
    data.score = 0;
    const quizIndex = quizes.findIndex(quiz => quiz.id === data.id)

    setQuizes(
      (prev: QuizType.RootObjectRequired[]) => {
        prev[quizIndex] = data
        localStorage.setItem("quizes", JSON.stringify([...prev]));
        return [...prev] as QuizType.RootObjectRequired[]
      }
    );
  }

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
