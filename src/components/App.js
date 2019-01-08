import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import styles from './App.css';


const App = () => {
  const [todos, addTodo, deleteTodo] = useTodoState([]);

  return (
    <div className={styles.app}>
      <h1>Todos</h1>
      <TodoForm 
        saveTodo={todoText => {
          const trimmedText = todoText.trim();
          if(trimmedText.length > 0) {
            addTodo([trimmedText]);
          }
        }}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

 
export default App;