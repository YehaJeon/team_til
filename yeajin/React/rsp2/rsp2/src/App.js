import logo from './logo.svg';
import './App.css';
import React,{useState, useCallback, useEffect} from 'react';

function App() {
  const group=["🖐️","✌️","✊"];
  const [rsp,rspF]=useState('');
  const [rsp2,rsp2F]=useState("?");
  let newrsp2=[...rsp2]
  let rst="";
  const [result,resultF]=useState("Game Result");
 

   

  function useRspF(){
    newrsp2=group[Math.floor(Math.random()*3)];
    rsp2F(newrsp2);
    
  }
  const rspS = () => {
    rspF("✌️");
  }

  const rspR = () => {
    rspF("✊")
  }

  const rspP = () =>{
    rspF("🖐️")
  }
  
  
   const selectWinnerSci = () => {
    if (newrsp2==="✌️") {
      rst="draw";
      resultF(rst);
      
    } else if ( newrsp2 === "🖐️") {
      rst="win";
      resultF(rst);
      
    } else if (newrsp2 === "✊") {
      rst="lose";
      resultF(rst);
   
  };
  }
  const selectWinnerRoc = () => {
    if (newrsp2==="✊") {
      rst="draw";
      resultF(rst);
      
    } else if ( newrsp2 === "✌️") {
      rst="win";
      resultF(rst);
      
    } else if (newrsp2 === "🖐️") {
      rst="lose";
      resultF(rst);
   
  };
  }
  const selectWinnerPap = () => {
    if (newrsp2==="🖐️") {
      rst="draw";
      resultF(rst);
      
    } else if ( newrsp2 === "✊") {
      rst="win";
      resultF(rst);
      
    } else if (newrsp2 === "✌️") {
      rst="lose";
      resultF(rst);
   
  };
  }
  function useRspSc() {
    rspS();
    useRspF();
   selectWinnerSci();
  }

  function useRspRo() {
    rspR()
    useRspF()
    selectWinnerRoc()
   
  }
  
  function useRspPa() {
    rspP()
    useRspF()
    selectWinnerPap()
    
  }
  return (
    <div className="App">

      <div className="left">
        <h2>user</h2>
        <div className="userFlex">
            <div className="userRsp">
              <p className="userSelect">{rsp}</p>
            </div>
            
            
        </div>
        <button onClick={useRspSc} className="btn sci">가위</button>
        <button onClick={useRspRo} className="btn roc">바위</button>
        <button onClick={useRspPa} className="btn pap">보</button>
        
         
      
      </div>

<p className="result">{result}</p>

      <div className="right">
        <h2 className="cpu">cpu</h2>
        <div className="cpuFlex">
          <div className="cpuRsp">
            <p className="cpuSelect">{rsp2}</p>
            </div>
          </div>
        </div>
        
      </div>
    
  );
}

export default App;
