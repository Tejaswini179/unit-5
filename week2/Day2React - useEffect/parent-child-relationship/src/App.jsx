import logo from './logo.svg';
import './App.css';

import { useState } from 'react';


// parent function
function App() {

  // using useState passing one child data to another child 
  const [message,setMessage]  = useState("")

  // getting data from child:
  const getData = (data)=>{
    console.log("getting data from child:",data);
    // passing data to setMessage
    setMessage(data)
  }

  // parent data
  const data  ="hello c1";
  return(
    <div className="App">

    {/* calling first child function  and passing parent data*/}
   <First data={data}/>

   {/* calling second child function */}
   <Second getData={getData}/>

   {/* passing sibling data from parent */}
   <Third message={message} />

    </div>
  )
}

// first child function
function First({data}){

  const [x,setX] = useState(30)
  console.log("recived data from parents",data);
return <div>First Child,{x}</div>
}

// Second child function
function Second({getData}){
  //passing data to parent function
  const data = "Hello c2";
  getData(data);

  return <div>First Child
  <button
  onClick={()=>{
    getData(data)
  }}
  >Send data</button>
  </div>
}


function Third({message}){

  console.log("recived data from second sibling:",message);
  return<div>Third Child</div>
}
export default App;
