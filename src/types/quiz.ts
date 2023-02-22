export declare module QuizType {
   interface Answer {
    id?: string;
    is_true: boolean;
    text: string;
  }

   interface Question {
    id?: string;
    answers: Answer[];
    feedback_false: string;
    feedback_true: string;
    text: string;
  }

   interface RootObject {
    created?: string;
    description: string;
    id?: string;
    modified?: string;
    questions: Question[];
    score?: number;
    title: string;
    url: string;
  }

  interface RootObjectRequired extends Required<RootObject> {}
}
