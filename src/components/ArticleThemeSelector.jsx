import React from 'react';
import { useArticleTheme } from './ArticleThemeContext';
import { Dropdown } from 'primereact/dropdown';

const ArticleThemeSelector = () => {
    const { theme, changeTheme } = useArticleTheme();

    const themeOptions = [
        { label: 'Технології', value: 'technology' },
        { label: 'Здоров\'я', value: 'health' },
        { label: 'Бізнес', value: 'business' },
        { label: 'Наука', value: 'science' }
    ];

    const handleThemeChange = (e) => {
        changeTheme(e.value);
    };

    return (
        <div className="p-mb-3">
            <Dropdown
                value={theme}
                options={themeOptions}
                onChange={handleThemeChange}
                placeholder="Виберіть тему"
                className="p-dropdown p-component"
            />
        </div>
    );
};

export default ArticleThemeSelector;
