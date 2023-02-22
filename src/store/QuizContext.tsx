import { createContext } from "react";
import { QuizType } from "../types/quiz";

interface IQuizContext {
  quizes: QuizType.RootObject[];
  addQuiz: () => void;
  updateQuiz: () => void;
}
export const QuizContext = createContext<IQuizContext>({
  quizes: [],
  addQuiz: () => {},
  updateQuiz: () => {},
});
