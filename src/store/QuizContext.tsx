import { createContext } from "react";
import { QuizType } from "../types/quiz";

interface IQuizContext {
  quizes: QuizType.RootObject[];
  addQuiz: (data: QuizType.RootObject) => void;
  updateQuiz: (data: QuizType.RootObjectRequired) => void;
}
export const QuizContext = createContext<IQuizContext>({
  quizes: [],
  addQuiz: (data: QuizType.RootObject) => {},
  updateQuiz: (data: QuizType.RootObjectRequired) => {},
});
