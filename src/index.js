import React from 'react';
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Globalstyled from './styles/Globalstyled';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Globalstyled />
    <App />
  </BrowserRouter>,
);
