import React from "react";
import { useSearch } from "./SearchContext";

const SearchResults = () => {
    const { searchResults } = useSearch();

    if (!Array.isArray(searchResults)) {
        return <div>Невірні дані для пошуку.</div>;
    }

    if (searchResults.length === 0) {
        return <div>Нічого не знайдено.</div>;
    }

    return (
        <div>
            {searchResults.map((result, index) => (
                <div key={index}>
                    {result.name}
                </div>
            ))}
        </div>
    );
};

export default SearchResults;
