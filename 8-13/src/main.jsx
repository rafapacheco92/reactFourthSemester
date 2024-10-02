import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/routes'
import { GlobalContextProvider } from './contexts/GlobalContext'
import './index.css'

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
  <RouterProvider router={router}>

  </RouterProvider>
  </GlobalContextProvider>
)
