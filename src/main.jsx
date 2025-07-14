import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MovieProvider } from './Project-1/context/MovieContext'; 
import App from './App';
import './Project-1/css/index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MovieProvider> 
        <App />
      </MovieProvider>
    </BrowserRouter>
  </React.StrictMode>
);
