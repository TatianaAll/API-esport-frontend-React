import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/root.jsx';
import "./style.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Add router -> npm i react-router-dom */}
    <RouterProvider router = {router} />
  </StrictMode>,
)
