// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  const [cri,setCri]=useState({
    wicket:0,
    over:0,
    score:0,
    ball:0
  })
  const handelchange= (item,value,changeval)=>{
    if(value+changeval<0){
      return
    }
    if(item ==="wicket"){
      setCri({...cri,"wicket":value+changeval})
    }
    else if(item === "score"){
      setCri({...cri,"score":value+changeval})
    }
    else if(item === "ball"){
      setCri({...cri,"ball":value+changeval})
    }
    else if(item === "over"){
      setCri({...cri,"over":6+changeval})
    }
  }
  let over = 6;
  let total=cri.over+cri.wicket+cri.ball+cri.score
  
  return (
    <div className="App">
    
      <h3>India: {cri.over+cri.wicket+cri.ball+cri.score}</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              // show "score" here
             cri.score
              
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              cri.wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              cri.ball+"."+cri.over
             
          
            }
            
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={()=>handelchange("score",cri.score,1)} className="addscore1" >Add 1</button>
        <button onClick={()=>handelchange("score",cri.score,4)} className="addscore4"  >Add 4</button>
        <button  onClick={()=>handelchange("score",cri.score,6)} className="addScore6" >Add 6</button>

      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={()=>handelchange("wicket",cri.wicket, 1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>handelchange("ball",cri.ball, 1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h1>
       {total>100?"India Won":"Not Yet"}
      </h1>
    </div>
  );
}

export default App;
