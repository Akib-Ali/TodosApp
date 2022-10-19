import { useState } from "react"

export const WiteSpaceCount=()=>{

    const[data,setdata]= useState(null)
    const [store,setstore]= useState(true)

    // const space = data.split(' ').length-1

    console.log(data)

    // console.log(space)



    function getdata(event){
        event.target.value;
        setdata(event.target.value)
        setstore(false)

    }

    


    return(
        <div>
            <h1> Wite Space Count </h1>

            <div>
                {/* <h3>  Total WiteSpace : {space}</h3> */}
               <input type ="text" placeholder="Enter Your Name" onChange={getdata}/> 
                
                <button style={{backgroundColor:"black" , color: "white"}} onClick={()=> setstore(true)}>Submit</button>
            </div>

            <div> 
              
              {setstore ?<h4> {`My Result Is : ${data}`} </h4> : <h1>some thimg</h1>}

                        </div>
        </div>
    )
}