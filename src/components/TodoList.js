import React, { useState } from 'react';
import { useTodoListContext } from '../contexts/TodoListContext';

const TodoList = () => {
  const { tasks, addTask, toggleTaskCompletion, deleteTask } = useTodoListContext();
  const [taskInput, setTaskInput] = useState('');

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      addTask({ id: Date.now(), text: taskInput, completed: false });
      setTaskInput('');
    }
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
        <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-1 rounded">
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
              className="mr-2"
            />
            <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} className="ml-4 text-red-500">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
