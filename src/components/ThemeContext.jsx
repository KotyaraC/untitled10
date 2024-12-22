import React, { createContext, useContext, useState } from 'react';
import config from '../config.json';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const [themeStyles, setThemeStyles] = useState(config.themes[theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setThemeStyles(config.themes[newTheme]);
    };

    return (
        <ThemeContext.Provider value={{ theme, themeStyles, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
