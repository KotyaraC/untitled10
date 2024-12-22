import React, { createContext, useState, useContext } from "react";

const SoundContext = createContext();

export const useSound = () => {
    return useContext(SoundContext);
};

export const SoundProvider = ({ children }) => {
    const [volume, setVolume] = useState(50);
    const [isMuted, setIsMuted] = useState(false);

    const toggleMute = () => setIsMuted((prev) => !prev);
    const changeVolume = (newVolume) => setVolume(newVolume);

    return (
        <SoundContext.Provider value={{ volume, isMuted, toggleMute, changeVolume }}>
            {children}
        </SoundContext.Provider>
    );
};
