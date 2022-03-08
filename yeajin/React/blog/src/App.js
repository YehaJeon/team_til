import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let[글제목, 글제목변경]=useState("여자 원피스 추천");
  
  let posts ='딸기 라떼 맛집';
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'blue', fontSize :'30px'}}>개발 blog</div>
      </div>
        <div className='list'>
          <h3>{글제목}</h3>
          <p>2월 17일 발행</p>
          <hr/>
        </div>
    </div>
  );
}

export default App;
