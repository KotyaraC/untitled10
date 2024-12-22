import React from "react";
import { useTestDifficulty } from "./TestDifficultyContext";

const DifficultySelector = () => {
    const { difficulty, changeDifficulty } = useTestDifficulty();

    return (
        <div className="text-center">
            <h5>Виберіть рівень складності</h5>
            <div className="btn-group" role="group">
                <button
                    className={`btn btn-outline-primary ${difficulty === "easy" ? "active" : ""}`}
                    onClick={() => changeDifficulty("easy")}
                >
                    Легкий
                </button>
                <button
                    className={`btn btn-outline-primary ${difficulty === "medium" ? "active" : ""}`}
                    onClick={() => changeDifficulty("medium")}
                >
                    Середній
                </button>
                <button
                    className={`btn btn-outline-primary ${difficulty === "hard" ? "active" : ""}`}
                    onClick={() => changeDifficulty("hard")}
                >
                    Важкий
                </button>
            </div>
        </div>
    );
};

export default DifficultySelector;
