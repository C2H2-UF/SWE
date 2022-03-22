import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Search';
import { isPropertySignature } from 'typescript';
import { render } from '@testing-library/react';



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
  const [renderWin, setRenderWin] = useState("App");

  useEffect(() =>{
    
  });
  const btnClick = () => {
    setValue(value+1)
  }

  if(renderWin == "App"){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <TickerBtn onClick={() => btnClick()} value={value}/>
        <button onClick={bullyGrace}>Bully Grace</button>
        <a href="https://www.youtube.com/c/helarious" target="_blank">
          <button> Subscribe! </button>
        </a>
        <HoverBtn/>
        <button onClick = {() => setRenderWin("SearchBar")}>Change to SearchBar</button> 
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
  else 
    return(
      <div>
      <SearchBar/>
      <button onClick = {() => setRenderWin("App")}>Change to App</button>
      </div>
    );
}

//Button that appears on hover
function HoverBtn() {
  const [style, setStyle] = useState({display: 'none'});

  return (
      <div className="hoverBtn">
          <div style={{border: '1px solid gray', width: 100, height: 20, padding: 0, margin: 1}}
               onMouseEnter={e => {
                   setStyle({display: 'inline'});
               }}
               onMouseLeave={e => {
                   setStyle({display: 'none'})
               }}
          >
            <button className = 'inLine' style={style}>x</button> 
            testing
          </div>
      </div>
  );
}


export default App