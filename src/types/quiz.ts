export declare module QuizType {
   interface Answer {
    id: number;
    is_true: boolean;
    text: string;
  }

   interface Question {
    id: number;
    answers: Answer[];
    feedback_false: string;
    feedback_true: string;
    text: string;
  }

   interface RootObject {
    created: string;
    description: string;
    id: string;
    modified: string;
    questions: Question[];
    score?: any;
    title: string;
    url: string;
  }
}
