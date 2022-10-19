import { useState } from "react"
import { TodoList } from "./todolist"
import { TodoInput } from "./todosinput"

export const TodoMain=()=>{

    const [inputval, setinputval]= useState("")
    const [todos , settodos]= useState([])

    return(
        <div>
            <h1>Todo App </h1>
            <TodoInput 
                inputval={inputval}
                setinputval={setinputval}
                todos={todos}
                settodos={settodos}
            />


             {todos.map((elem,index)=>(
                <TodoList 
                    key={index}
                    id={index}
                    elem={elem}
                />

             ))}
           
        </div>
    )
}