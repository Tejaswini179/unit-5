import React from "react";
import { TaskItem } from "./taskItem";
 function Todo(){
     const [query,setQuery] = React.useState("");
     const [tasks, setTask] = React.useState([]);

     const handelChange = (e)=>{
     const {value} = e.target;
     setQuery(value)
     }
     const handelTask = ()=>{
        const payload = {
            title:query,
            status:false
        }
        let newTask = [...tasks,payload];
        setTask(newTask)
     }

     console.log(tasks)
return(
    <div>
    <h1>ToDo</h1>
        <div>
            <input value={query} onChange={handelChange} placeholder="type here"/>
            <button onClick={handelTask}>Add Task</button>
        </div>

        <div>
           { tasks.map((item,index) =>{
               return <TaskItem color ={index %2===0 ? "green": "blue"} {...item}/>
           })}
        </div>

    </div>
 )

 }
 export  {Todo}