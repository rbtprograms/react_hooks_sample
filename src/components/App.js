import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import styles from './App.css';


class App extends Component {
  render() { 
    return (
      <div className={styles.app}>
        <Typography
          component='h1'
          variant='h2'
        >
          Todos
        </Typography>
      </div>
    );
  }
}
 
export default App;