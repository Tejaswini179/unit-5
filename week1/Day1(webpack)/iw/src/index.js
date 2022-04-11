

 import {sum} from "./cal"; //import sum function
 
 import "./index.css"
 const mykey = "1234"; // new variable declared and initialized


 console.log(sum(1,3,mykey)) // calling sum  function  and print console

 const root = document.getElementById("root");

 const h1 = document.createElement("h1");
 h1.innerHTML ="Hello world !!!!";

 h1.setAttribute("class","redtext");
//  h1.classList.add("class","redtext")

 root.appendChild(h1)