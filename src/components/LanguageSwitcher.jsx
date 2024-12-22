import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageSwitcher = () => {
    const { translations, toggleLanguage } = useLanguage();

    return (
        <button className="btn btn-outline-secondary mt-3" onClick={toggleLanguage}>
            {translations.languageButton}
        </button>
    );
};

export default LanguageSwitcher;
