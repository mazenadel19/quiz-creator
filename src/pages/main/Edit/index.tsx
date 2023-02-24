import { Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { CreateFormQuestionnaire, Form } from "../../../components";
import useQuiz from "../../../hooks/useQuiz";
import { QuizType } from "../../../types/quiz";


const Edit = () => {
    let defaultQuiz = {}
    const { id } = useParams()
    const { quizes } = useQuiz();
    const navigate = useNavigate()
    const quiz = quizes.find(q => q.id === id)

    if (!quiz) {
        return (
            <Stack spacing={5}>
                <Typography variant='h1' textAlign={"center"}>
                    Couldn't find this quiz
                </Typography>
                <Typography variant='h2' textAlign={"center"}>
                    Are you sure it exists? 😅
                </Typography>
            </Stack>
        );
    }


    const quizWithQuestionIndex = {
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
    }

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

    const defaultValues = flatter(quizWithQuestionIndex)

    function submitHandler(data: QuizType.RootObject) {
        // addQuiz(data);
        navigate('/')
    }



    return (
        <Form submitHandler={submitHandler} defaultValues={defaultValues}>
            <CreateFormQuestionnaire isEdit />
        </Form>
    );
}

export default Edit
