import React, { createContext, useState, useContext } from "react";

const SelectedPostsContext = createContext();

export const useSelectedPosts = () => useContext(SelectedPostsContext);

export const SelectedPostsProvider = ({ children }) => {
    const [selectedPosts, setSelectedPosts] = useState([]);

    const addPostToSelected = (post) => {
        setSelectedPosts((prevPosts) => [...prevPosts, post]);
    };

    const removePostFromSelected = (postId) => {
        setSelectedPosts((prevPosts) =>
            prevPosts.filter((post) => post.id !== postId)
        );
    };

    return (
        <SelectedPostsContext.Provider value={{ selectedPosts, addPostToSelected, removePostFromSelected }}>
            {children}
        </SelectedPostsContext.Provider>
    );
};
