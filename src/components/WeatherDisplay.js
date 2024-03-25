import React, { useState, useEffect } from 'react';
import { useWeatherContext } from '../contexts/WeatherContext';

function WeatherDisplay() {
  const { selectedLocation, setSelectedLocation } = useWeatherContext();
  const [weather, setWeather] = useState({});
  const [inputLocation, setInputLocation] = useState('');

  useEffect(() => {
    if (selectedLocation) {
      fetchWeather(selectedLocation);
    }
  }, [selectedLocation]);

  const fetchWeather = (location) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2f741658c819ae8de6cb20e2e56a27b9`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  const handleLocationChange = (e) => {
    setInputLocation(e.target.value);
  };

  const handleSearch = () => {
    if (inputLocation.trim() !== '') {
      setSelectedLocation(inputLocation);
    }
  };

  return (
    <div className="text-center">
      <header className="bg-gray-800 min-h-screen flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl mb-4">Weather App</h1>

        <div className="mb-4">
          <input
            style={{color:"black"}}
            type="text"
            value={inputLocation}
            onChange={handleLocationChange}
            placeholder="Enter city/town..."
            className="px-4 py-2 mr-2 rounded-lg border border-gray-400 focus:outline-none"
          />
          <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Search</button>
        </div>

        {typeof weather.main !== "undefined" && (
          <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        )}

        <button onClick={() => fetchWeather(selectedLocation)} className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg">Refresh</button>
      </header>
    </div>
  );
}

export default WeatherDisplay;
