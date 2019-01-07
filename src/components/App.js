import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import styles from './App.css';


const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className={styles.app}>
      <h1>Todos</h1>
      <TodoForm 
        saveTodo={todoText => {
          const trimmedText = todoText.trim();
          if(trimmedText.length > 0) {
            setTodos([...todos, trimmedText]);
          }
        }}
      />
      <TodoList
        todos={todos}
        deleteTodo={todosIndex => {
          const newTodos = todos.filter((_, index) => index !== todosIndex);
          setTodos(newTodos);
        }}
      />
    </div>
  );
};

 
export default App;