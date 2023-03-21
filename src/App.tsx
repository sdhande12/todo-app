import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './todos/Todos';

function App() {
  return (
    <div className="App">
      <h1>To-Do App</h1>
      <Todos></Todos>
    </div>
  );
}

export default App;
