import React, { createContext, useContext, useState } from "react";

const GameProfileContext = createContext();

export const GameProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState({
        name: "Гравець 1",
        level: 1,
        points: 0,
    });

    const updateProfile = (newProfile) => {
        setProfile((prevProfile) => ({ ...prevProfile, ...newProfile }));
    };

    return (
        <GameProfileContext.Provider value={{ profile, updateProfile }}>
            {children}
        </GameProfileContext.Provider>
    );
};

export const useGameProfile = () => useContext(GameProfileContext);
