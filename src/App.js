import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div >
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
