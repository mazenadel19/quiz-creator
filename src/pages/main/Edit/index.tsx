import { Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { CreateFormQuestionnaire, Form } from "../../../components";
import useQuiz from "../../../hooks/useQuiz";
import useQuizDefaultValues from "../../../hooks/useQuizDefaultValues";
import { QuizType } from "../../../types/quiz";


const Edit = () => {
    const { id } = useParams()
    const { quizes, updateQuiz } = useQuiz();
    const navigate = useNavigate()
    const quiz = quizes.find(q => q.id === id)
    const { quizDefaultValues } = useQuizDefaultValues(quiz)

    console.log({ quizes, quiz, quizDefaultValues })
    
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

    function submitHandler(data: QuizType.RootObjectRequired) {
        updateQuiz(data)
        navigate('/')
    }

    return (
        <Form submitHandler={submitHandler} defaultValues={quizDefaultValues}>
            <CreateFormQuestionnaire isEdit />
        </Form>
    );
}

export default Edit
