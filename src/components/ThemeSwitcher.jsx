import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button className="btn btn-outline-secondary mt-3" onClick={toggleTheme}>
            {theme === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
        </button>
    );
};

export default ThemeSwitcher;
