import React from 'react';
import { useLanguage } from './LanguageContext';

const Greeting = () => {
    const { translations } = useLanguage();

    return <h4>{translations.greeting}</h4>;
};

export default Greeting;
