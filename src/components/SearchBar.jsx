import React, { useState } from "react";
import { useSearch } from "./SearchContext";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const { search } = useSearch();

    const handleSearch = (e) => {
        setQuery(e.target.value);
        search(e.target.value);
    };

    return (
        <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Пошук..."
        />
    );
};

export default SearchBar;
