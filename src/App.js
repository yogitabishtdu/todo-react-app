
import {useState} from "react";

function App() {
  const[newitem, setNewitem] = useState("");
  const[items, setItems] = useState([]);

  function Additems(){
    if(!newitem){
      alert("You have to enter new task")
      return
    }

    const item = {
      id: Math.floor(Math.random()*10000),
      value: newitem
    };
    setItems((oldlist)=> [...oldlist, item]);
    setNewitem("");
  };
   function Deleteitem(id){
    const newarray2 = items.filter((y)=> y.id !==id);
    setItems(newarray2);
   }

  return (
    <>
      <h1>My First react App</h1>
      <input type="text" value={newitem} placeholder="Add new task here" onChange={(e)=>setNewitem(e.target.value)} />
      <button onClick={Additems}>Add task</button>
      <ul>
       {
        items.map((x)=>{
          return(
          <li key={x.id}>{x.value}
          <button onClick={()=>Deleteitem(x.id)}>XX</button>
          </li>
        )})
       }
     </ul>
   </>
  );
}

export default App;
