import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import DarkModeContext from './Context/DarkModeContext.jsx';
import AuthContext from './Context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <DarkModeContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DarkModeContext>
    </AuthContext>
  </React.StrictMode>
);
