import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import DarkContext from './Contexts/DarkContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkContext>
      <App />
    </DarkContext>
  </React.StrictMode>
);
