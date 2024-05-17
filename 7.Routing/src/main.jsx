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
import Booklayout from './pages/Booklayout.jsx';
import Book from './pages/Book.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/books',
        element: <Booklayout />,
        children: [
          {
            path: '/books',
            element: <Booklist />,
          },
          {
            path: ':id',
            element: <Book />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
