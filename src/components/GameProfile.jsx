import React from "react";
import { useGameProfile } from "./GameProfileContext";

const GameProfile = () => {
    const { profile } = useGameProfile();

    return (
        <div className="card shadow">
            <div className="card-body text-center">
                <h5>Ігровий профіль</h5>
                <p>Ім'я: {profile.name}</p>
                <p>Рівень: {profile.level}</p>
                <p>Бали: {profile.points}</p>
            </div>
        </div>
    );
};

export default GameProfile;
