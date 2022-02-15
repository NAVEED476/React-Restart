import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState([]);
  const [todo,settodo] = useState("")



  const Handlesubmit = (e) =>{
     e.preventDefault();


     const  Newtodo = {
       id:new Date().getTime(),
       text:todo,
       completed:false,
     }

     setCount([...count].concat(Newtodo))
     settodo("")
  }


  const Deletetodo= (id)=>{
    const updatedtodo = [...todo].filter((todo)=>todo.id !== id)
    setCount(updatedtodo)
  }

 
  return (
    <div className="App">
      <form onSubmit={Handlesubmit}>  
        <input type="text" onChange={(e) => settodo(e.target.value)} value={todo} />
        <button type="submit">Add</button>
      </form>

      {count.map((ele)=><div key={ele.id}>
        <div>{ele.text}</div>
        <button onClick={() => Deletetodo(ele.id) }>Delete</button>

      </div>)}
    </div>
  );
}

export default App;
