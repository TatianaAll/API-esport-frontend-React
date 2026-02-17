import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/root.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Ajout du router npm i react-router-dom */}
    <RouterProvider router = {router} />
  </StrictMode>,
)
