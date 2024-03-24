import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          placeholder="Enter a new task"
          className="border border-gray-300 rounded px-2 py-1 mr-2"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-1 rounded">Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="mr-2"
            />
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} className="ml-4 text-red-500">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
