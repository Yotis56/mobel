import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from 'react-router-dom'
import { App } from './routes/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ App } />
  </React.StrictMode>,
)
