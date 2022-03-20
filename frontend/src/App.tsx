import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Search';



function TickerBtn(props: { onClick: () => void, value: number}) {
  return (
    <button
      className="ticker"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );

}

function bullyGrace() {
  alert('I <3 DILFS');
}

/*
const ButtonGroup = () => {
  return (
    <>
      <button>BOB DUNCAN</button>
      <button>MR. MOSEBY</button>
      <button>SHANG CHI'S DAD</button>
      <button>DICKRELL</button>
    </>
  );
};
*/

function App() {

  const [value, setValue] = useState<number>(0)

  const btnClick = () => {
    setValue(value+1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <SearchBar/>
        <TickerBtn onClick={() => btnClick()} value={value}/>
        <button onClick={bullyGrace}>Bully Grace</button>
        <a href="https://www.youtube.com/c/helarious" target="_blank">
          <button> Subscribe! </button>
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

     
  );
}

export default App