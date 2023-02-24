// RHF
import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
// Type
import { QuizType } from "../types/quiz";



const useAppendQuestion = (number: number) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const { getValues, setError, unregister, register } = useFormContext();
    const { append } = useFieldArray({ name: "questions" });


    const handleAppendQuestion = () => {
        const fields = [
            `Q${number}_text`,
            `Q${number}_feedback_true`,
            `Q${number}_feedback_false`,
            `Q${number}_answer1`,
            `Q${number}_answer2`,
            `Q${number}_answer3`,
            `Q${number}_answer4`,
            `Q${number}_is_true`,
        ];

        for (let i = 0; i < fields.length; i++) {
            if (!getValues(fields[i])) {
                setError(fields[i], { type: "required", message: "required" });
                return;
            }
        }

        const question: QuizType.Question = {
            text: getValues(`Q${number}_text`),
            answers: [
                {
                    text: getValues(`Q${number}_answer1`),
                    is_true: getValues(`Q${number}_is_true`) === "1",
                },
                {
                    text: getValues(`Q${number}_answer2`),
                    is_true: getValues(`Q${number}_is_true`) === "2",
                },
                {
                    text: getValues(`Q${number}_answer3`),
                    is_true: getValues(`Q${number}_is_true`) === "3",
                },
                {
                    text: getValues(`Q${number}_answer4`),
                    is_true: getValues(`Q${number}_is_true`) === "4",
                },
            ],
            feedback_false: getValues(`Q${number}_feedback_false`),
            feedback_true: getValues(`Q${number}_feedback_false`),
        };

        append(question);
        unregister(fields);
        unregister("AddQuestion");
        setShowSuccessMessage(true);
    };

    return { handleAppendQuestion, register, showSuccessMessage }
}

export default useAppendQuestion