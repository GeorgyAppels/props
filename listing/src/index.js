import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Listing from './App';
import * as serviceWorker from './serviceWorker';

const url = 'data/etsy.json';

let items=[];
function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false);
    xmlHttp.send();
    return JSON.parse(xmlHttp.responseText);
}
items = httpGet(url);

ReactDOM.render(
  <React.StrictMode>
    <Listing items={items} />
  </React.StrictMode>,
  document.getElementById('root')
);
