import './index.css'

import { createRoot } from "react-dom/client"
import { StrictMode } from 'react'

// Provedor de rotas, do react-router
import { RouterProvider } from 'react-router-dom'

// Meu gerenciador de rotas
import MyRouter from "./MyRouter.jsx"

// Importação do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={MyRouter}/>

  </StrictMode>,
)
