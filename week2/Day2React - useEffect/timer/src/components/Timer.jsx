
import React from "react";
import "./Timer.css"
import { useState } from "react";

   function Timer(){

    const [second,setSeconds] = useState(0);
    const [min,setMin] = useState(0)
    return (
       
        <div className="timer">
         
         <div className="container">
         <div className="timer-container">
             <h1>Timer</h1>
             <h1>10:30</h1>
         </div>

         </div>
        </div>
    )
   }

   export {Timer}