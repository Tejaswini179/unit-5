import { TodoInput } from "./TodoInput";
import { useState  } from "react";
import { TodoItem } from "./TodoItem";

// npm i nanoid for random id
import { nanoid } from "nanoid"; 

  function Todo(){

    const [todosList, setTodosList] = useState([]);

    const getData = (todo)=>{

        // console.log("Recived", todo);

        const todoArr = {
            title: todo,
            status: false,
            // used nonoid 
            id:nanoid(5)
        }

        setTodosList([...todosList,todoArr])
    }

    const handeleStatus =(id)=>{
        //find this id from todoList
        console.log("id:",id)
        
        //toggle it's status
        setTodosList(todosList.map(e => e.id === id ? {...e, status: !e.status}: e))
        //get new array, set it again
    }


    return (
    <div>
        
         <TodoInput getData={getData}/>
        {/* Todo List */}

        {todosList.map((e) =>(
            <TodoItem handeleStatus={handeleStatus} todo={e}></TodoItem>
     
        ))}

    </div>
    );
  }
  export {Todo}