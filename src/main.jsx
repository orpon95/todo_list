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
import AuthProvide from './Components/AuthProvider/AuthProvide.jsx';
import Register from './Components/Register/Register.jsx';
import Login from './Components/Login/Login.jsx';
import Explore from './Components/Explore/Explore.jsx';
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainroot></Mainroot>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/explore",
        element: <Explore></Explore>
      },

    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvide><RouterProvider router={router} /></AuthProvide>
      


    </QueryClientProvider>

  </React.StrictMode>,
)
