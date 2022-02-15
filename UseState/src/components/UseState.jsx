import react, { useState } from "react";


const UseModel = ()=>{
      const [number,numberstate] = useState(0)
      
      console.log("hi its working")
      return (
            <div>
                  <h1>{number}</h1>
                  
                  <button onClick={()=>{numberstate(number+1)}}>clickme</button>
                  <button>clickme once again</button>
                  <button>cleat</button>
            </div>
      )

     
}

export default UseModel;