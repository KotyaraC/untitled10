import React from "react";
import { useSettings } from "./SettingsContext";
import {useLanguage} from "./LanguageContext";
import {useTheme} from "./ThemeContext";

const SettingsEditor = () => {
    const {
        notificationsEnabled,
        toggleNotifications,
    } = useSettings();
    const { translations, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <h3>Settings</h3>
            <div>
                <button className="btn btn-outline-secondary mt-3" onClick={toggleLanguage}>
                    {translations.languageButton}
                </button>
                <button className="btn btn-outline-secondary mt-3" onClick={toggleTheme}>
                    {theme === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
                </button>
            </div>
            <div>
                <label>Notifications: </label>
                <input
                    type="checkbox"
                    checked={notificationsEnabled}
                    onChange={toggleNotifications}
                />
            </div>
        </div>
    );
};

export default SettingsEditor;
