import { render } from '@testing-library/react';
import React,{ useCallback,useEffect,useState} from 'react';
import './App.css';


function App() {

  const group= ['✌️','✊','🖐️'];
  const [chosenrsp,chosenrsp변경]=useState(group[Math.floor(Math.random()*3)]);
  let [rsp,rsp변경]=useState('?');
  let [rsp2,rsp변경2]=useState('!');
  let [gameResult,gameResultF]=useState('Game Result')
  const result=["이김","짐","비김"]
function 가바보변경(){
  const newRsp = [...chosenrsp]
  rsp변경2(newRsp);
}
 
const whoWin = useCallback(()=>{
  if (rsp===rsp2){
    gameResultF(result[2])
    
  }
  
  
  else if ((rsp==="✊" & rsp2 === "🖐️")|(rsp==="🖐️"&rsp2==="✌️")|(rsp==="✌️"&rsp2==="✊")){
    gameResultF(result[1])
  }
  else if(
    (rsp==="🖐️" & rsp2 === "✊")|(rsp==="✌️"&rsp2==="🖐️")|(rsp==="✊"&rsp2==="✌️")
  ){
    gameResultF(result[0])
  }
  
},[rsp,rsp2])


  
useEffect(() => {
  console.log(rsp,rsp2)
  
  whoWin()
  return () => {
    console.log("cleanup")
  };
}, [rsp,rsp2,whoWin]);
  return (
    <div className="App">
      <div className='you'>
      

<h2 className='you1'>player</h2>
<h3 className='gameResult'>{gameResult}</h3>
      <h1 className='rsp'>{rsp}</h1>
     
<div className='flex'>
 <span className='button btn1' onClick={()=>{rsp변경('✌️'); 가바보변경()}}>가위  </span>
      <span className='button btn2' onClick={()=>{rsp변경('✊'); 가바보변경()}} > 바위 </span>
      <span className='button btn3' onClick={()=>{rsp변경('🖐️'); 가바보변경()}}  > 보 </span>

</div>




      <br></br>
      <p className='reset' onClick={()=>{window.location.reload()}}>reset</p>
 
      
   
 
      
      
      </div>
      
      <div className='me'>
      <h2 className='me1'> cpu</h2>
      <h1 className='rsp'>{rsp2}</h1>
      </div>
    </div>
  
 
  );
}

export default App;
