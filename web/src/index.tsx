import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log('lol', 'lol');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
