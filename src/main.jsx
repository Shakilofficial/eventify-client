import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <HelmetProvider>
          <div className="max-w-[1440px] mx-auto font-dance">
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
  </React.StrictMode>,
)
