import { useState } from "react"

export const TodoList=(props)=>{

  const space= props.elem.split(" ").length-1
  const len = props.elem.length

    const [line, setline]= useState(false)

     
   


    const Tempdeletehandle=()=>{

        setline(true)
    }
    




    return(
        <div>
        
        

           <div>
             
             <h2 style={{textDecorationColor:"red",textDecorationLine : line ? "line-through" : "none"}}>{props.elem}</h2>


             <p>{`Total Length of string :${len} `}</p>
            <p>{`Total WiteSpace : ${space}`}</p> 

             <button  
             onClick={Tempdeletehandle}
             style={{marginLeft: "30px" , border:"2px solid black", color:"green"}}>
             Temparory Delete

             </button>

              <button style={{marginLeft: "40px" , border: "2px solid black" , color: "red"}} 
             onClick={()=> props.handleDelete(props.index)}>
            Prmanent Delete
            </button>
           </div>


        </div>
    )
}