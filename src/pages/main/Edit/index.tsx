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
            const Answers = answers.map(({ text, is_true, id }, j) => {

                return {
                    [`Q${i + 1}_answer${j + 1}`]: text,
                    [`Q${i + 1}_is_true`]: is_true ? `${j + 1}` : undefined,
                    id
                }
            });
            return {
                answers: Answers,
                [`Q${i + 1}_text`]: text,
                [`Q${i + 1}_feedback_false`]: feedback_false,
                [`Q${i + 1}_feedback_true`]: feedback_true,
                id
            };
        })
    }


    function findArrays(key: string, value: string | number | boolean | any[]) {
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
            const output = findArrays(key, value)
            defaultQuiz = { ...defaultQuiz, ...output }
        }
        return defaultQuiz
    }

    const defaultValues = flatter(quizWithQuestionIndex)

    function submitHandler(data: QuizType.RootObject) {
        // addQuiz(data);
        navigate('/')
    }

    // const defaultVals = {
    //     Q1_feedback_true: "lol"
    // }

    console.log({ quizWithQuestionIndex })

    return (
        <Form submitHandler={submitHandler} defaultValues={defaultValues}>
            <CreateFormQuestionnaire />
        </Form>
    );
}

export default Edit
