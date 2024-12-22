import React, { createContext, useContext, useState } from "react";

const TestDifficultyContext = createContext();

export const TestDifficultyProvider = ({ children }) => {
    const [difficulty, setDifficulty] = useState("easy");

    const changeDifficulty = (level) => {
        setDifficulty(level);
    };

    return (
        <TestDifficultyContext.Provider value={{ difficulty, changeDifficulty }}>
            {children}
        </TestDifficultyContext.Provider>
    );
};

export const useTestDifficulty = () => useContext(TestDifficultyContext);
