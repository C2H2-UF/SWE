import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Search from './Search';
import reportWebVitals from './reportWebVitals';

//Render multiple components by just adding them to the array.
ReactDOM.render(
    [ <App />,
    ],
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
