import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />, 
  },
  {
    path: '/home',
    element: <Home />, 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
