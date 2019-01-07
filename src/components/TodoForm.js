import React from 'react';
import TextField from '@material-ui/core';

const TodoForm = ({ saveTodo }) => {
  return (
    <form>
      <TextField
        variant='outlined'
        placeholder='Add Todo'
        margin='normal'
      />
    </form>
  );
};

export default TodoForm;