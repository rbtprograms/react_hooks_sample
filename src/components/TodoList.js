import React from 'react';

const TodoList = ({ todos, deleteTodo }) => (
  <ul style={{ listStyleType: 'none' }}>
    {todos.map((todo, index) => (
      <li
        key={index.toString()}
      >
        <input
          type='checkbox'
        />
        <span>{todo}</span>
        <button
          onClick={() => {
            deleteTodo(index);
          }}
        >Delete Todo</button>
      </li>
    ))}
  </ul>
);

export default TodoList;