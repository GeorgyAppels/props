import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Stars from './App';
import * as serviceWorker from './serviceWorker';

const count = 3; 

ReactDOM.render(
  <React.StrictMode>
    <Stars count = {count}/>
  </React.StrictMode>,
  document.getElementById('root')
);
