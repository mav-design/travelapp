import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from '@pages/Home/Home';

const container = document.getElementById('root')!;
const root = createRoot(container);
const router = createBrowserRouter([{
  path:"./",
  element:<Home/>
  },
])
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
