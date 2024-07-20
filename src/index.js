// src/index.js
import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';
ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  
);
