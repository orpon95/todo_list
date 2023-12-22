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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
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
        element: <PrivateRoute><Explore></Explore></PrivateRoute>
      },

    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
    <QueryClientProvider client={queryClient}>
      <AuthProvide><RouterProvider router={router} /></AuthProvide>
      


    </QueryClientProvider>
    </DndProvider>
    

  </React.StrictMode>,
)
