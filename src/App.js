import React from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import TodoList from './components/TodoList';
import './styles.css';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Personal Dashboard</h1>
      <WeatherDisplay />
      <TodoList />
    </div>
  );
}

export default App;
