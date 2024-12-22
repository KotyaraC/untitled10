import React from 'react';
import { useGeolocation } from './GeolocationContext';
import { Card } from 'primereact/card';
import { ProgressSpinner } from 'primereact/progressspinner';
import { FaSun, FaCloud, FaCloudRain, FaSnowflake, FaSmog } from 'react-icons/fa';
import { Button } from 'primereact/button';

const WeatherInfo = () => {
    const { weather, loading } = useGeolocation();

    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <ProgressSpinner />
            </div>
        );
    }

    if (!weather) {
        return (
            <div className="alert alert-danger" role="alert">
                Не вдалося отримати дані про погоду.
            </div>
        );
    }

    const renderWeatherIcon = (description) => {
        switch (description) {
            case 'clear sky':
                return <FaSun size={50} color="#FFB300" />;
            case 'few clouds':
            case 'scattered clouds':
            case 'broken clouds':
                return <FaCloud size={50} color="#90A4AE" />;
            case 'shower rain':
            case 'rain':
                return <FaCloudRain size={50} color="#1976D2" />;
            case 'snow':
                return <FaSnowflake size={50} color="#81D4FA" />;
            case 'haze':
                return <FaSmog size={50} color="#607D8B" />;
            default:
                return <FaCloud size={50} color="#90A4AE" />;
        }
    };

    return (
        <div className="container">
            <Card title="Погода в вашій локації" className="p-mb-3 shadow-2">
                <div className="d-flex gap-3 justify-content-center align-items-center ">
                    <h5>{weather.name}</h5>
                    {renderWeatherIcon(weather.weather[0].description)}
                </div>

                <div className="d-flex flex-column align-items-center">
                    <p className="text-center" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                        <strong>Температура:</strong> {weather.main.temp}°C
                    </p>
                    <p className="text-center" style={{ fontSize: '1.1rem' }}>
                        <strong>Опис:</strong> {weather.weather[0].description}
                    </p>
                    <p className="text-center" style={{ fontSize: '1.1rem' }}>
                        <strong>Вологість:</strong> {weather.main.humidity}%
                    </p>
                    <p className="text-center" style={{ fontSize: '1.1rem' }}>
                        <strong>Швидкість вітру:</strong> {weather.wind.speed} м/с
                    </p>

                    <Button
                        label="Оновити погоду"
                        icon="pi pi-refresh"
                        className="p-button-rounded p-button-outlined p-mt-3"
                        style={{ width: '200px', marginTop: '20px' }}
                        onClick={() => window.location.reload()}
                    />
                </div>
            </Card>
        </div>
    );
};

export default WeatherInfo;
