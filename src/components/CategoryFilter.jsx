import React from "react";
import { useProductFilter } from "./ProductFilterContext";

const CategoryFilter = () => {
    const { filterProductsByCategory } = useProductFilter();

    const handleCategoryChange = (event) => {
        filterProductsByCategory(event.target.value);
    };

    return (
        <div className="mb-3">
            <select className="form-control" onChange={handleCategoryChange}>
                <option value="all">Всі категорії</option>
                <option value="electronics">Електроніка</option>
                <option value="clothing">Одяг</option>
                <option value="home">Дім та сад</option>
            </select>
        </div>
    );
};

export default CategoryFilter;
