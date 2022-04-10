import React from 'react';


  export default function Counter() {

  //Destructuring
  const [counter,setCounter] = React.useState(0) //return 2 value [value,updatedValue ]

  const handelIncrement = (value)=>{
    
    setCounter(counter + value)
    
  }





  return (
    <>
    <h1>Counter</h1>
    <h2>{counter}</h2>
    <button onClick={()=>handelIncrement(1)}>Add</button>
    <button onClick={()=> handelIncrement(-1)} >Reduse</button>
    </>
  );
}

// export default Counter;
