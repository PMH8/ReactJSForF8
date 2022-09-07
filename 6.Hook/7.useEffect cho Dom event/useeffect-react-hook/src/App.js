import './App.css';
import { useEffect, useState } from 'react';
import Content from './Content';

function App() {
  const [status,setStatus]=useState(false)

  return (
    <div className="App">
      <button onClick={()=>{setStatus(!status)}}>Toggle</button>    
      {status && <Content/>} 
    </div>
  );
}

export default App;
