import React, { useEffect } from 'react';
import { useSearch } from './SearchContext';

const SearchComponent = () => {
    const { searchResults, setSearchResults } = useSearch();

    useEffect(() => {
        setSearchResults([
            { id: 1, name: "Товар 1", description: "Опис товару 1" },
            { id: 2, name: "Товар 2", description: "Опис товару 2" },
            { id: 3, name: "Товар 3", description: "Опис товару 3" },
        ]);
    }, [setSearchResults]);

    return (
        <div>
            <h3>Результати пошуку</h3>
            {searchResults && searchResults.length === 0 ? (
                <p>Немає результатів для вашого запиту.</p>
            ) : (
                searchResults.map((item) => (
                    <div key={item.id}>
                        <h5>{item.name}</h5>
                        <p>{item.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default SearchComponent;
