import React, { createContext, useState, useContext } from 'react';

const SoundSettingsContext = createContext();

export const SoundSettingsProvider = ({ children }) => {
    const [volume, setVolume] = useState(50);
    const [isMuted, setIsMuted] = useState(false);

    const changeVolume = (newVolume) => {
        if (!isMuted) {
            setVolume(newVolume);
        }
    };

    const toggleMute = () => {
        setIsMuted((prev) => !prev);
    };

    return (
        <SoundSettingsContext.Provider value={{ volume, isMuted, changeVolume, toggleMute }}>
            {children}
        </SoundSettingsContext.Provider>
    );
};

export const useSoundSettings = () => useContext(SoundSettingsContext);
