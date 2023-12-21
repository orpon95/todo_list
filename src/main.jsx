import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Mainroot from './Components/Mainroot/Mainroot.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainroot></Mainroot>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }

    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />


    </QueryClientProvider>

  </React.StrictMode>,
)
