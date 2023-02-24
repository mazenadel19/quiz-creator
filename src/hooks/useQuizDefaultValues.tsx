import { QuizType } from "../types/quiz";

const useQuizDefaultValues = (quiz: QuizType.RootObjectRequired | undefined) => {
    let defaultQuiz = {}

    const quizWithQuestionIndex = quiz ? {
        ...quiz,
        questions: quiz.questions.map(({ answers, text, feedback_false, feedback_true, id }, i) => {
            const default_answers: { [x: string]: any }[] = []

            answers.forEach(({ text, is_true, id }, j) => {
                default_answers.push({ [`Q${i + 1}_answer${j + 1}`]: text, id })
                is_true && default_answers.push({ [`Q${i + 1}_is_true`]: `${j + 1}` })
            });

            return {
                answers: default_answers,
                [`Q${i + 1}_text`]: text,
                [`Q${i + 1}_feedback_false`]: feedback_false,
                [`Q${i + 1}_feedback_true`]: feedback_true,
                id
            };
        })
    } : {}

    
    function findArraysAndReturnObjects(key: string, value: string | number | boolean | any[]) {
        if (Array.isArray(value)) {
            for (let index = 0; index < value.length; index++) {
                const obj = value[index]
                flatter(obj)
            }
        }
        else {
            return { [key]: value }
        }
    }


    function flatter(obj: { [key: string]: string | number | boolean | any[] }) {
        for (const [key, value] of Object.entries(obj)) {
            const output = findArraysAndReturnObjects(key, value)
            defaultQuiz = { ...defaultQuiz, ...output }
        }
        return defaultQuiz
    }

    const quizDefaultValues = flatter(quizWithQuestionIndex)


    return { quizDefaultValues }
}

export default useQuizDefaultValues