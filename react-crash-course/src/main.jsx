import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App'
import NewPost from './components/NewPost'
import Modal from './components/Modal'  
import './index.css'

const router = createBrowserRouter([
    {path: '/', element: <App />},
    {path: '/create-post', element: <NewPost />},
    {path: '/post-detail', element: <Modal />},
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
