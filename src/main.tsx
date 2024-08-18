import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import setup from './utils/setup';
import './assets/css/app.css';

(async () => await setup())();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
