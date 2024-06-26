import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPages from './pages/LandingPages.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Statistic from './pages/Statistic.jsx'
import Login from './pages/LogIn.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPages />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/statistic",
    element: <Statistic />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
