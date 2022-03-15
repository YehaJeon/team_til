import logo from './logo.svg';
import './App.css';


function App() {
let select="가위"
  return (
    <div className="App">
     
      <div className="left">
<p>you</p>

<span onClick={ ()=>{select="good"} className="s">✌️</span>
<span className="r">✊</span>
<span className="p">🖐️</span>
      </div>
  
      <div className='right'>
me
      </div>
    </div>
  
  );
}

export default App;
