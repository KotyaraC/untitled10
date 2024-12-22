import React, { createContext, useState, useContext } from "react";

const ProductFilterContext = createContext();

export const useProductFilter = () => useContext(ProductFilterContext);

export const ProductFilterProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filterProductsByCategory = (category) => {
        setSelectedCategory(category);
    };

    return (
        <ProductFilterContext.Provider value={{ selectedCategory, filterProductsByCategory }}>
            {children}
        </ProductFilterContext.Provider>
    );
};
