import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPages from './pages/LandingPages.jsx'
import Login from './pages/LogIn.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPages />
  },
  {
    path: "/login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
