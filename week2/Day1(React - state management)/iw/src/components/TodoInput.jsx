
import { useState } from "react"

 export const TodoInput = ({getData})=>{
    
    // text is whole input settext is 1 by 1 print events
    const [text,setText] = useState("")
    return (
        <div>

        <input 
        onChange={(e)=>{
            //input value 1 by 1
            // console.log(e.target.value)
            setText(e.target.value)
        }} 
        type="text" placeholder="Enter Todo" />

        <button
        onClick={()=>{
            getData(text)
        }}
        >Add Todo</button>

        {/* text showing bunch of input */}
          {/* {text} */}
        </div>
    )
 }