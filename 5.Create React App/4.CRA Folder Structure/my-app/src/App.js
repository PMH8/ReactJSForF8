import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter,setCounter]=useState(1);
  return (
    <div className="App">
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
