import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Import the App component
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
