import React from 'react';
import { useSoundSettings } from './SoundSettingsContext';
import { Slider } from 'primereact/slider';
import { Button } from 'primereact/button';

const SoundSettings = () => {
    const { volume, isMuted, changeVolume, toggleMute } = useSoundSettings();

    return (
        <div className="sound-settings">
            <div className="d-flex align-items-center">
                <Button
                    label={isMuted ? "Unmute" : "Mute"}
                    icon={isMuted ? "pi pi-volume-off" : "pi pi-volume-up"}
                    onClick={toggleMute}
                    className="mr-3"
                />

                <Slider
                    value={isMuted ? 0 : volume}
                    onChange={(e) => changeVolume(e.value)}
                    disabled={isMuted}
                    min={0}
                    max={100}
                    step={1}
                    className="flex-grow-1"
                />
            </div>

            <div className="volume-display mt-2">
                <span>Volume: {isMuted ? "Muted" : volume}</span>
            </div>
        </div>
    );
};

export default SoundSettings;
