import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
function App() {


  const [counter,setCounter] = useState(0);

 const hadleChange =(value)=>{
   setCounter(counter +value)
 }

  return (
    <div className="App">
     
     <h3>Counter:{counter}</h3>
     <button onClick={()=>{ hadleChange(1)}} >Add 1</button>
      <button onClick={()=>{hadleChange(-1)}} >sub 1</button>

    </div>
  );
}

export default App;
