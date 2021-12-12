import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase from './utils/Firebase';

Firebase.init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
