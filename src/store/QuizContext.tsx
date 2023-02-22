import { createContext } from "react";
import { QuizType } from "../types/quiz";

interface IQuizContext {
  quizes: QuizType.RootObject[];
  addQuiz: (data: QuizType.RootObject) => void;
  updateQuiz: (data: QuizType.RootObject) => void;
}
export const QuizContext = createContext<IQuizContext>({
  quizes: [],
  addQuiz: (data: QuizType.RootObject) => {},
  updateQuiz: (data: QuizType.RootObject) => {},
});
