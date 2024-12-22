
import React, { createContext, useState, useContext } from "react";

const UserRatingContext = createContext();

export const useUserRating = () => useContext(UserRatingContext);

export const UserRatingProvider = ({ children }) => {
    const [ratings, setRatings] = useState([
        { name: "User1", points: 150 },
        { name: "User2", points: 200 },
        { name: "User3", points: 250 },
        { name: "User4", points: 100 },
        { name: "User5", points: 180 },
    ]);

    const addUserRating = (name, points) => {
        setRatings((prevRatings) => {
            const existingUser = prevRatings.find((user) => user.name === name);
            if (existingUser) {
                return prevRatings.map((user) =>
                    user.name === name ? { ...user, points } : user
                );
            } else {
                return [...prevRatings, { name, points }];
            }
        });
    };

    return (
        <UserRatingContext.Provider value={{ ratings, addUserRating }}>
            {children}
        </UserRatingContext.Provider>
    );
};
