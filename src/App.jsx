// src/App.jsx
import React from 'react';
import TaskList from './components/TaskList';
import TodoList from './components/TodoList';
const App = () => {
  return (
    <div id="app">
      <TodoList />
    </div>
  );
};
export default App
