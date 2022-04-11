
 import "./index.css"

 import React from "react";
 import ReactDOM from "react-dom"



 
 //main container 
 const root = document.getElementById("root");

//  //create h1 tag
//  const h1 = React.createElement("h1", {className:"redtext"}, "Hello React !!!!!!");
 
//  //create img tag
//  const img = React.createElement("img",
//  {
//      width:"400px",
//      height:"400px",
//      src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDJ5-IKojn4Rn2dlrRjCzDUjJ8G-TYuh0Aw&usqp=CAU"
//  })

//  const toShow =true;

//  //here only one main container
//  const p = React.createElement(
//      "p",
//      {className:"redtext",id:"uniqID"},
//      h1,
//      "test",
    
//     img
//  )

//  const toshow =true;
 ReactDOM.render(
    
    <div>
    <h1>Hello React</h1>

    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrDJ5-IKojn4Rn2dlrRjCzDUjJ8G-TYuh0Aw&usqp=CAU"/>
   
    </div>, //what:JSX
   
    document.getElementById("root")//where we have to put
 )


 root.appendChild(h1)





