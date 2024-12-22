import React from "react";
import { AuthProvider } from "./components/AuthContext";
import { CartProvider } from "./components/CartContext";
import { LanguageProvider } from "./components/LanguageContext";
import { ThemeProvider } from "./components/ThemeContext";
import { SettingsProvider } from "./components/SettingsContext";
import { GeolocationProvider } from "./components/GeolocationContext";
import { ArticleThemeProvider } from "./components/ArticleThemeContext";
import {TestDifficultyProvider} from "./components/TestDifficultyContext";
import {GameProfileProvider} from "./components/GameProfileContext";
import {TaskListProvider} from "./components/TaskListContext";
import {MusicPlayerProvider} from "./components/MusicPlayerContext";
import {OrderFormProvider} from "./components/OrderFormContext";
import {UserRatingProvider} from "./components/UserRatingContext";
import {SelectedPostsProvider} from "./components/SelectedPostsContext";
import {ChatProvider} from "./components/ChatContext";
import {SoundSettingsProvider} from "./components/SoundSettingsContext";
import { AuthRoleProvider } from "./components/AuthRoleContext";

const Providers = ({ children }) => {
    return (
        <SoundSettingsProvider>
            <ChatProvider>
                <SelectedPostsProvider>
                    <UserRatingProvider>
                        <OrderFormProvider>
                            <MusicPlayerProvider>
                                <SettingsProvider>
                                    <AuthProvider>
                                        <CartProvider>
                                            <LanguageProvider>
                                                <ThemeProvider>
                                                    <GeolocationProvider>
                                                        <ArticleThemeProvider>
                                                            <TestDifficultyProvider>
                                                                <GameProfileProvider>
                                                                    <TaskListProvider>
                                                                        <AuthRoleProvider>
                                                                            {children}
                                                                        </AuthRoleProvider>
                                                                    </TaskListProvider>
                                                                </GameProfileProvider>
                                                            </TestDifficultyProvider>
                                                        </ArticleThemeProvider>
                                                    </GeolocationProvider>
                                                </ThemeProvider>
                                            </LanguageProvider>
                                        </CartProvider>
                                    </AuthProvider>
                                </SettingsProvider>
                            </MusicPlayerProvider>
                        </OrderFormProvider>
                    </UserRatingProvider>
                </SelectedPostsProvider>
            </ChatProvider>
        </SoundSettingsProvider>
    );
};

export default Providers;
