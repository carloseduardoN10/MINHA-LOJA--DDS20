import './index.css'

import { createRoot } from "react-dom/client"
import { StrictMode } from 'react'

// Provedor de rotas, do react-router
import { RouterProvider } from 'react-router-dom'

// Meu gerenciador de rotas
import MyRouter from "./MyRouter.jsx"

// Importação do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// importação do contexto de usuário
import { AuthProvider } from './contexts/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Fornece as informções de contexto para toda a aplicação */}
    <AuthProvider>
      {/* Faz o provedor utilizar as rotas que você definiu n MyRouter */}
    <RouterProvider router={MyRouter}/>
    </AuthProvider>
  </StrictMode>,
)
