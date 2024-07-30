import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Routers from './Routers.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <Routers/>
    </BrowserRouter>
 ,
)
