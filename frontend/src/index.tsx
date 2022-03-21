import {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchBar from './Search';
import reportWebVitals from './reportWebVitals';


  const renderVar = {
    toRender: "App",
  };
  export {renderVar};

  function RenderManager(props : any) {
    const toRender = props.toRender;
    if(props.renderType == "App")
    {
      return <App/>;
    }
    else if(props.renderType == "SearchBar")
    {
      return <SearchBar/>;
    }
    else 
      return <></>;
  }


//Render multiple components by just adding them to the array.
ReactDOM.render(
    [  <RenderManager renderType={renderVar.toRender}/>,
    ],
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
