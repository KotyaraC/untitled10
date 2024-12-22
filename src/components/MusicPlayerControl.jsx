import React, { useEffect } from "react";
import { useMusicPlayer } from "./MusicPlayerContext";

const MusicPlayerControl = () => {
    const { tracks, currentTrack, setCurrentTrack, isPlaying, playPauseTrack, nextTrack, previousTrack } = useMusicPlayer();

    useEffect(() => {
        if (currentTrack) {
            document.title = `Now playing: ${currentTrack.title}`;
        }
    }, [currentTrack]);

    return (
        <div className="card shadow mt-4">
            <div className="card-body text-center">
                <h5>{currentTrack ? `${currentTrack.title} - ${currentTrack.artist}` : "No track playing"}</h5>

                <div className="mt-3">
                    <button className="btn btn-secondary" onClick={previousTrack}>
                        Previous
                    </button>
                    <button className="btn btn-primary mx-3" onClick={playPauseTrack}>
                        {isPlaying ? "Pause" : "Play"}
                    </button>
                    <button className="btn btn-secondary" onClick={nextTrack}>
                        Next
                    </button>
                </div>

                <div className="mt-3">
                    <select
                        className="form-control"
                        onChange={(e) => setCurrentTrack(tracks.find((track) => track.id === parseInt(e.target.value)))}
                        value={currentTrack ? currentTrack.id : ""}
                    >
                        <option value="" disabled>
                            Select a track
                        </option>
                        {tracks.map((track) => (
                            <option key={track.id} value={track.id}>
                                {track.title} - {track.artist}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default MusicPlayerControl;
