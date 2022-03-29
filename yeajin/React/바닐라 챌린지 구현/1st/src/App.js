
import './App.css';
import React,{useState} from "react";

function App() {

const [title,setTitle] = useState("hello") 

function mouseleave(){
    title.innerText="The mouse is gone!"
    
}
function contextmenu(){
    title.innerText="That was a right click!"
    
}
function resize(){
    title.innerText="You just resized!"
   
}
  return (
    <div className="App">
      <h2>{title}</h2>
    </div>
  );
}

export default App;
