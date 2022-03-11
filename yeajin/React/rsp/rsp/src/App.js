import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}



const reducer = (state, action) => {
  const data = state.history;

  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        history: !data ? [action.newGame] : [...data, action.newGame]
      };
    case 'RESULT':
      let _comWin, _youWin;
      console.log(action.whoWins);
      console.log(state.comWin);
      if (action.whoWins === 'computer') {
        _comWin = state.comWin ? parseInt(state.comWin) + 1 : 1;
        _youWin = state.youWin;
      }
      if (action.whoWins === 'you') {
        _comWin = state.comWin;
        _youWin = state.youWin ? parseInt(state.youWin) + 1 : 1;
      }
      if (action.whoWins === 'draw') {
        _comWin = state.comWin;
        _youWin = state.youWin;
      }
      return {
        ...state,
        comWin: _comWin,
        youWin: _youWin
      };
    case 'RESET':
      return {};
  }
};
export default App;
