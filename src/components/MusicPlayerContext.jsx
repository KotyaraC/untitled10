import React, { createContext, useState, useContext, useEffect } from "react";

const MusicPlayerContext = createContext();

export const useMusicPlayer = () => useContext(MusicPlayerContext);

export const MusicPlayerProvider = ({ children }) => {
    const [tracks] = useState([
        { id: 1, title: "Bad Boys", artist: "Inner Circle", src: "/path/to/inner-circle-bad-boys-theme-from-cops.mp3" },
        { id: 2, title: "Say mMy Name", artist: "Bebe Rexha", src: "/path/to/David_Guetta_feat._Bebe_Rexha_Ft_J_Balvin_-_Say_My_Name.mp3" },
    ]);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(null);

    useEffect(() => {
        if (currentTrack) {
            const newAudio = new Audio(currentTrack.src);
            setAudio(newAudio);
        }
    }, [currentTrack]);

    const playPauseTrack = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const nextTrack = () => {
        const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id);
        const nextIndex = (currentIndex + 1) % tracks.length;
        setCurrentTrack(tracks[nextIndex]);
    };

    const previousTrack = () => {
        const currentIndex = tracks.findIndex((track) => track.id === currentTrack.id);
        const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
        setCurrentTrack(tracks[prevIndex]);
    };

    return (
        <MusicPlayerContext.Provider
            value={{
                tracks,
                currentTrack,
                setCurrentTrack,
                isPlaying,
                playPauseTrack,
                nextTrack,
                previousTrack,
            }}
        >
            {children}
        </MusicPlayerContext.Provider>
    );
};
