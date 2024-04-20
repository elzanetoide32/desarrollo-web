// TodoItem.js
import React from 'react';
import "./index.css"
const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div class="conteiner">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
    </div>
  );
};

export default TodoItem;
