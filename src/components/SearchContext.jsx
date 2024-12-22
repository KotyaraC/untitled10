import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
    return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    const products = [
        { id: 1, name: "Телевізор", category: "electronics", description: "Технологічний телевізор", price: 5000 },
        { id: 2, name: "Футболка", category: "clothing", description: "Стильна футболка", price: 300 },
        { id: 3, name: "Крісло", category: "home", description: "Комфортне крісло", price: 1500 },
        { id: 4, name: "Ноутбук", category: "electronics", description: "Потужний ноутбук", price: 12000 },
        { id: 5, name: "Штани", category: "clothing", description: "Комфортні штани", price: 600 },
    ];
    const search = (query) => {
        if (!Array.isArray(searchResults)) {
            setSearchResults([]);
        }

        const results = products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );

        setSearchResults(results);
    };

    return (
        <SearchContext.Provider value={{ searchResults, search }}>
            {children}
        </SearchContext.Provider>
    );
};
