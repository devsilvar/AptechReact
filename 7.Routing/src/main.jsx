import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx';
import Contact from './Contact.jsx';
import Root from './routes/root.jsx';
import About from './pages/About.jsx';
import Booklist from './pages/Booklist.jsx';
import Notfound from './pages/Notfound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
