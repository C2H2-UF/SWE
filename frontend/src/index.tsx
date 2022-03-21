import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchBar from './Search';
import reportWebVitals from './reportWebVitals';


let renderVar = {
  toRender: "App",
  nextRender: "SearchBar",
}

function changeRenderState(){
  if(renderVar.toRender == "App")
  {
    ReactDOM.render(
      <div>
        <App/>
        <SearchBar/>  
        <button onClick = {() => changeRenderState()}> Change render state </button>
      </div>,
    document.getElementById('root')
    );
    renderVar.toRender = "SearchBar";
    
  }
  else if(renderVar.toRender == "SearchBar")
  {
    ReactDOM.render(
      <div>
        <SearchBar/>  
        <button onClick = {() => changeRenderState()}> Change render state </button>
      </div>,
    document.getElementById('root')
    );
    renderVar.toRender = "App";
  }
}

//Render multiple components by just adding them to the array.
ReactDOM.render(
  <div>
    <App/>
    <SearchBar/>  
    <button onClick = {() => changeRenderState()}> Change render state </button>
  </div>,
  document.getElementById('root')
);

    

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
