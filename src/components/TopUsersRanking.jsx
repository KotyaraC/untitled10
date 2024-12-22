import React from "react";
import { useUserRating } from "./UserRatingContext";

const TopUsersRanking = () => {
    const { ratings } = useUserRating();

    const topUsers = [...ratings]
        .sort((a, b) => b.points - a.points)
        .slice(0, 3);

    return (
        <div className="card shadow mt-4">
            <div className="card-body">
                <h5 className="card-title text-center mb-4">Топ-3 користувачів</h5>
                <div className="d-flex justify-content-between">
                    {topUsers.map((user, index) => (
                        <div key={index} className="card mb-3" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title d-flex justify-content-between align-items-center">
                                    {index + 1}.
                                    <span
                                        className={`badge ${
                                            index === 0
                                                ? "bg-warning"
                                                : index === 1
                                                    ? "bg-secondary"
                                                    : "bg-bronze"
                                        }`}
                                    >
                                        {index === 0 ? "Gold" : index === 1 ? "Silver" : "Bronze"}
                                    </span>
                                </h5>
                                <h6 className="card-subtitle mb-2 text-muted">{user.name}</h6>
                                <p className="card-text">Балів: {user.points}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopUsersRanking;
