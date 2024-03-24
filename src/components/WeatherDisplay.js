import { useState } from "react";

import 'tailwindcss/tailwind.css';

const api = {
  key: "2f741658c819ae8de6cb20e2e56a27b9",
  base: "https://api.openweathermap.org/data/2.5/",
};

function WeatherDisplay() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=2f741658c819ae8de6cb20e2e56a27b9`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="text-center"> {/* Tailwind class for text alignment */}
      <header className="bg-gray-800 min-h-screen flex flex-col justify-center items-center text-white"> {/* Tailwind classes for header */}
        <h1 className="text-4xl mb-4">Weather App</h1> {/* Tailwind classes for header text */}
        
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter city/town..."
            className="px-4 py-2 mr-2 rounded-lg border border-gray-400 focus:outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Search</button>
        </div>

        {typeof weather.main !== "undefined" && (
          <div>
            <p>{weather.name}</p>
            <p>{weather.main.temp}°C</p>
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default WeatherDisplay;