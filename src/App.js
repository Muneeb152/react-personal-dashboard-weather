import React from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import TodoList from './components/TodoList';
import { TodoListProvider } from './contexts/TodoListContext';
import { WeatherProvider } from './contexts/WeatherContext';
import './styles.css';

function App() {
  return (
    <TodoListProvider>
      <WeatherProvider>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Personal Dashboard</h1>
          <WeatherDisplay />
          <TodoList />
        </div>
      </WeatherProvider>
    </TodoListProvider>
  );
}

export default App;
