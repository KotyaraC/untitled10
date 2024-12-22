import React, { createContext, useState, useEffect, useContext } from 'react';

const GeolocationContext = createContext();

export const GeolocationProvider = ({ children }) => {
    const [location, setLocation] = useState(null);
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getGeolocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        setLocation(position.coords);
                    },
                    () => {
                        alert("Не вдалося отримати геолокацію.");
                        setLoading(false);
                    }
                );
            }
        };

        getGeolocation();
    }, []);

    useEffect(() => {
        if (location) {
            const apiKey = "2f0fc3bb086b293e013effc1db283798";
            const { latitude, longitude } = location;

            const fetchWeatherData = async () => {
                try {
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=uk`
                    );
                    const data = await response.json();
                    setWeather(data);
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching weather data:", error);
                    setLoading(false);
                }
            };

            fetchWeatherData();
        }
    }, [location]);

    const value = {
        location,
        weather,
        loading,
    };

    return (
        <GeolocationContext.Provider value={value}>
            {children}
        </GeolocationContext.Provider>
    );
};

export const useGeolocation = () => useContext(GeolocationContext);
