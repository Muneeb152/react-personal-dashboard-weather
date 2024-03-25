import React, { createContext, useContext, useState } from 'react';

const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState('');

  return (
    <WeatherContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </WeatherContext.Provider>
  );
};
