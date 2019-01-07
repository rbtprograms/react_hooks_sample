import React, { useState } from 'react';

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveTodo(value);
      }}
    >
      <input
        onChange={event => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </form>
  );
};

export default TodoForm;