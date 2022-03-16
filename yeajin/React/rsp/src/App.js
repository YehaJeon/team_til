import React,{ useState} from 'react';
import './App.css';


function App() {

  const group= ['✌️','✊','🖐️'];
  const [chosenrsp,chosenrsp변경]=useState(group[Math.floor(Math.random()*3)]);
  let [rsp,rsp변경]=useState('?');
  let [rsp2,rsp변경2]=useState('?');


  
  return (
    <div className="App">
      <div className='you'>
      <h2>you</h2>
      <h1 className='rsp'>{rsp}</h1>
      <button onClick={()=>{rsp변경('✌️');rsp변경2(chosenrsp)}}>가위  </button>
      <button onClick={()=>{rsp변경('✊');rsp변경2(chosenrsp)}} > 바위 </button>
      <button onClick={()=>{rsp변경('🖐️');rsp변경2(chosenrsp)}}  > 보 </button>
    
      </div>
      
      <div className='me'>
      <h1> me</h1>
      <h1 className='rsp'>{rsp2}</h1>
      </div>
    </div>
  );
}

export default App;
