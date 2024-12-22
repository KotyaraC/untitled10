import React from "react";
import { useTestDifficulty } from "./TestDifficultyContext";

const QuestionsDisplay = ({ questions }) => {
    const { difficulty } = useTestDifficulty();

    const filteredQuestions = questions.filter(
        (question) => question.difficulty === difficulty
    );

    return (
        <div>
            <h5>Питання ({difficulty})</h5>
            <ul>
                {filteredQuestions.map((question, index) => (
                    <li key={index}>{question.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionsDisplay;
