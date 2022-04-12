

//delete todo

function TodoItem({todo,handeleStatus}){
return(
    
        <div>
        {/* <div>id: {todo.id}</div> */}
        {todo.title} - {todo.status ? "Done": "not Done"} <button
        onClick={()=> handeleStatus(todo.id)}
        >Toggle</button> 
       </div>
    
)
}

export {TodoItem}