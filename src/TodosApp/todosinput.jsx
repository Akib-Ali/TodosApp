export const TodoInput=(props)=>{


    const ChangeInputvalue=(event)=>{
        props.setinputval(event.target.value)
   }

   const handleSubmit=()=>{
    props.settodos((allitem)=>{
        return ([...allitem, props.inputval])
    })
    props.setinputval(" ")
   }
    

    return (


        <div>
            <input placeholder="Enter Text" value={props.inputval} onChange={ChangeInputvalue}/>
            <button style={{marginLeft: "50px", backgroundColor: "black" ,color: "green"}} 
            onClick={handleSubmit}>
            Submit Task
            </button>
        </div>
    )
}