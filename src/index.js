import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/master.css';
import Web from './components/Web';
/*
import headerComponent from './components/Header';
import bannerComponent from './components/Banner';
import productComponent from './components/Produto';
import footerComponent from './components/Footer';
*/
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Web/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();