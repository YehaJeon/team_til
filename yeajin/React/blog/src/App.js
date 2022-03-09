/*eslint-disable*/
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let[글제목, 글제목변경]=useState(["여자 원피스 추천","일본 라멘 맛집","한국식 마라탕 맛집"]);
  let[따봉,따봉변경]=useState(0);
  let posts ='딸기 라떼 맛집';
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'blue', fontSize :'30px'}}>개발 blog</div>
      </div>
      <button>버튼</button>
        <div className='list'>
          <h3>{글제목[0]}<span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span>{따봉}</h3>
          <p>3월 7일 발행</p>
          <hr/>
        </div>
        <div className='list'>
          <h3>{글제목[1]}</h3>
          <p>3월 8일 발행</p>
          <hr/>
        </div>
        <div className='list'>
          <h3>{글제목[2]}</h3>
          <p>3월 9일 발행</p>
          <hr/>
        </div>
    </div>
  );
}
export default App;