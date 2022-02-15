import react, { useState } from "react";

function App() {
  const [list, setlist] = useState("");

  const [items, setitems] = useState([]);

  const Itemevent = (event) => {
    setlist(event.target.value);
  };

  const listItems = () => {
    setitems((olditems) => {
      return [...olditems, list];
    });
  };
 
  
  const deleteitems = () =>{
    console.log("deleted")
  }
  return (
    <>
      <div className="maindiv">
        <div className="firstdiv">
          <h1 className="todo">Todo App</h1>
        </div>

        <input
          type="text"
          placeholder="Enter the input"
          className="inputbox"
          onChange={Itemevent}
        />
        <button className="but" onClick={listItems}>
          +
        </button>

        <ol>
          {items.map((itemvalue,index) => {
            
            return (
              <>
              <div>
              <button onClick={deleteitems}>delete</button>
              <li>{itemvalue}</li>
              </div>
                
              </>
            );
          })}
        </ol>
      </div>
    </>
  );
}

export default App;
