import { createContext } from "react";
import { QuizType } from "../types/quiz";

interface IQuizeContext {
  quizes: QuizType.RootObject[];
  addQuiz: () => void;
  updateQuiz: () => void;
}
export const QuizeContext = createContext<IQuizeContext>({
  quizes: [],
  addQuiz: () => {},
  updateQuiz: () => {},
});
