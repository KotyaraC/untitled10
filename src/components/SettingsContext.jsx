import React, { createContext, useState, useContext } from "react";
import config from "../config.json";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");
    const [theme, setTheme] = useState("light");
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const themeStyles = config.themes[theme] || { background: "#ffffff", color: "#000000" };
    const greeting = config.languages[language]?.greeting || "Hello, User!";
    const languageButtonLabel = config.languages[language]?.languageButton || "Switch Language";

    const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);

    const changeLanguage = (lang) => {
        if (config.languages[lang]) setLanguage(lang);
    };

    const changeTheme = (themeName) => {
        if (config.themes[themeName]) setTheme(themeName);
    };

    const value = {
        language,
        setLanguage: changeLanguage,
        theme,
        setTheme: changeTheme,
        notificationsEnabled,
        toggleNotifications,
        themeStyles,
        greeting,
        languageButtonLabel,
    };

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error("useSettings must be used within a SettingsProvider");
    }
    return context;
};
