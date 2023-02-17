import { createContext, } from "react";
import { QuizType } from "../types/quiz";

interface IQuizeContext {
  quizes: QuizType.RootObject[];
  addQuiz: () => void;
  removeQuiz: () => void;
  updateQuiz: () => void;
}

export const QuizeContext = createContext<IQuizeContext>({
  quizes: [],
  addQuiz: () => {},
  removeQuiz: () => {},
  updateQuiz: () => {},
});
