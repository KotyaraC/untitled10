import React, { createContext, useContext, useState } from 'react';
import config from '../config.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [translations, setTranslations] = useState(config.languages[language]);

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'ua' : 'en';
        setLanguage(newLanguage);
        setTranslations(config.languages[newLanguage]);
    };

    return (
        <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
