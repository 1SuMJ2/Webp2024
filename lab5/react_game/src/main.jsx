import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Game from './index.jsx';

const root = document.getElementById('root');
const rootElement = createRoot(root); 

rootElement.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

