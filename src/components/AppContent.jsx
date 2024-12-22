import React from "react";
import AuthStatus from "./AuthStatus";
import CartStatus from "./CartStatus";
import ProductList from "./ProductList";
import Greeting from "./Greeting";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import SettingsEditor from "./SettingsEditor";
import { useTheme } from "./ThemeContext";
import WeatherInfo from "./WeatherInfo";
import ArticleThemeSelector from "./ArticleThemeSelector";
import ArticleList from "./ArticleList";
import DifficultySelector from "./DifficultySelector";
import QuestionsDisplay from "./QuestionsDisplay";
import GameProfile from "./GameProfile";
import TaskManager from "./TaskManager";
import CategoryFilter from "./CategoryFilter";
import { ProductFilterProvider } from "./ProductFilterContext";
import ProductListM from "./ProductListM";
import MusicPlayerControl from "./MusicPlayerControl";
import OrderPreview from "./OrderPreview";
import OrderForm from "./OrderForm";
import TopUsersRanking from "./TopUsersRanking";
import PostList from "./PostList";
import SelectedPostsList from "./SelectedPostsList";
import { ChatProvider } from "./ChatContext";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import SoundSettings from "./SoundSettings";
import { SearchProvider } from "./SearchContext";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import {useAuthRole} from "./AuthRoleContext";

const AppContent = () => {
    const { themeStyles } = useTheme();
    const sampleQuestions = [
        { text: "Що таке React?", difficulty: "easy" },
        { text: "Як створити компонент у React?", difficulty: "easy" },
        { text: "Поясніть хук useState", difficulty: "medium" },
        { text: "Що таке контекст у React?", difficulty: "medium" },
        { text: "Як працює хук useEffect?", difficulty: "medium" },
        { text: "Як реалізувати віртуальний DOM?", difficulty: "hard" },
        { text: "Поясніть роботу React Fiber", difficulty: "hard" },
        { text: "Як налаштувати сервер-side rendering у React?", difficulty: "hard" },
    ];
    const products = [
        { id: 1, name: "Телевізор", category: "electronics", description: "Технологічний телевізор", price: 5000 },
        { id: 2, name: "Футболка", category: "clothing", description: "Стильна футболка", price: 300 },
        { id: 3, name: "Крісло", category: "home", description: "Комфортне крісло", price: 1500 },
        { id: 4, name: "Ноутбук", category: "electronics", description: "Потужний ноутбук", price: 12000 },
        { id: 5, name: "Штани", category: "clothing", description: "Комфортні штани", price: 600 },
    ];

    const { role } = useAuthRole();


    return (
        <SearchProvider>
            <div
                style={{
                    backgroundColor: themeStyles.background,
                    color: themeStyles.color,
                    minHeight: "100vh",
                    padding: "20px",
                }}
            >
                <div className="container mt-5">
                    <div className="row">
                        {/* Пошукова панель */}
                        <div className="col-12 mb-4">
                            <div className="card shadow" style={themeStyles}>
                                <div className="card-body">
                                    <SearchBar/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mb-4">
                            <div className="card shadow" style={themeStyles}>
                                <div className="card-body">
                                    <SearchResults/>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-6 mb-4">
                            <div className="card shadow" style={themeStyles}>
                                <div className="card-body text-center">
                                    <Greeting/>
                                    <LanguageSwitcher/>
                                    <ThemeSwitcher/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="card shadow" style={themeStyles}>
                                <div className="card-body">
                                    <SettingsEditor/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="card shadow" style={themeStyles}>
                                <div className="card-body">
                                    <AuthStatus/>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4">
                            <div className="card shadow" style={themeStyles}>
                                <div className="card-body">
                                    <CartStatus/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="card shadow" style={themeStyles}>
                                <div className="card-body">
                                    <ProductList/>
                                </div>
                            </div>
                        </div>

                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-12 col-md-8 mx-auto">
                                    <div className="card shadow-2 p-fluid">
                                        <div className="card-body">
                                            <WeatherInfo/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <div className="card shadow" style={themeStyles}>
                                <div className="card-body">
                                    <h5 className="text-center">Вибір теми статей</h5>
                                    <ArticleThemeSelector/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <div className="card shadow" style={themeStyles}>
                                <div className="card-body">
                                    <ArticleList/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <div className="card shadow" style={themeStyles}>
                                <div className="card-body">
                                    <h5 className="text-center">Вибір рівня складності</h5>
                                    <DifficultySelector/>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-4">
                            <div className="card shadow" style={themeStyles}>
                                <div className="card-body">
                                    <QuestionsDisplay questions={sampleQuestions}/>
                                </div>
                            </div>
                        </div>

                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <GameProfile/>
                                </div>

                                <div className="col-12 mt-4">
                                    <div className="card shadow" style={themeStyles}>
                                        <div className="card-body">
                                            <TaskManager/>
                                        </div>
                                    </div>
                                </div>

                                <ProductFilterProvider>
                                    <div
                                        style={{
                                            backgroundColor: themeStyles.background,
                                            color: themeStyles.color,
                                            minHeight: "100vh",
                                            padding: "20px",
                                        }}
                                    >
                                        <div className="container mt-5">
                                            <div className="row">
                                                {/* Блок фільтрації за категоріями */}
                                                <div className="col-12 mb-4">
                                                    <div className="card shadow" style={themeStyles}>
                                                        <div className="card-body">
                                                            <CategoryFilter/>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Список продуктів */}
                                                <div className="col-12">
                                                    <div className="card shadow" style={themeStyles}>
                                                        <div className="card-body">
                                                            <ProductListM products={products}/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 mb-4">
                                                    <div className="card shadow" style={themeStyles}>
                                                        <div className="card-body">
                                                            <MusicPlayerControl/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 mb-4">
                                                    <div className="card shadow" style={themeStyles}>
                                                        <div className="card-body">
                                                            <OrderForm/>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Перегляд замовлення */}
                                                <div className="col-12 col-md-6 mb-4">
                                                    <div className="card shadow" style={themeStyles}>
                                                        <div className="card-body">
                                                            <OrderPreview/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 mb-4">
                                                    <div className="card shadow" style={themeStyles}>
                                                        <div className="card-body">
                                                            <TopUsersRanking/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-6 mb-4">
                                                    <div className="card shadow" style={themeStyles}>
                                                        <div className="card-body">
                                                            <PostList/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-md-6 mb-4">
                                                    <div className="card shadow" style={themeStyles}>
                                                        <div className="card-body">
                                                            <SelectedPostsList/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <ChatProvider>
                                                        <div className="chat-container">
                                                            <div className="chat-header">
                                                                <h4>Чат</h4>
                                                            </div>
                                                            <div className="chat-body">
                                                                <ChatMessages/>
                                                            </div>
                                                            <div className="chat-footer">
                                                                <ChatInput/>
                                                            </div>
                                                        </div>
                                                    </ChatProvider>
                                                </div>
                                                <div className="col-12">
                                                    <div className="card shadow" style={{padding: "20px"}}>
                                                        <div className="card-body">
                                                            <h4 className="text-center">Налаштування звуку</h4>
                                                            <SoundSettings/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-4">
                                                    {role === 'admin' ? (
                                                        <div style={{ textAlign: "center" }}>
                                                            <h4 className="text-primary">Адмін панель</h4>
                                                            <button className="btn btn-danger mt-2" style={{ borderRadius: "10px", padding: "10px 20px" }}>
                                                                Управління користувачами
                                                            </button>
                                                        </div>
                                                    ) : (
                                                        <div style={{ textAlign: "center" }}>
                                                            <h4 className="text-success">Гостева панель</h4>
                                                            <button className="btn btn-info mt-2" style={{ borderRadius: "10px", padding: "10px 20px" }}>
                                                                Перегляд продуктів
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ProductFilterProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SearchProvider>
    );
};

export default AppContent;
