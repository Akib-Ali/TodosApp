export const TodoList=(props)=>{

    const space= props.elem.split(" ").length-1

    return(
        <div>
           <p>{`Total WiteSpace : ${space}`}</p>
          {props.elem}
        </div>
    )
}