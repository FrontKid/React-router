import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter as createRouter,
  RouterProvider
} from 'react-router-dom'
import Root from './routes/root';

import ErrorPage from './ErrorPage';
import Contact from "./routes/contact";

import './App.scss'

const router = createRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />
      }
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

