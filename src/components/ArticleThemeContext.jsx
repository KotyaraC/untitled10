import React, { createContext, useState, useContext } from 'react';

const ArticleThemeContext = createContext();

export const ArticleThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("technology");

    const changeTheme = (newTheme) => {
        setTheme(newTheme);
    };

    return (
        <ArticleThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ArticleThemeContext.Provider>
    );
};

export const useArticleTheme = () => useContext(ArticleThemeContext);
