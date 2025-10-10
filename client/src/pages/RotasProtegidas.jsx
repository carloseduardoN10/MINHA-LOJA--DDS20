import { Outlet, Navigate } from "react-router-dom"

const RotasProtegidas = () => {
  //Variavel para saber se está logado ou não 
  const estaLogado = true
  // Se não estiver, joga para tela de login
  if(!estaLogado){
    return <Navigate to="/login"/> 
  }

  return (
    <div className="App d-flex">
        {/* Barra de navegação fixa na lateral */}
        <div className="position-fixed top-0 start-0 start-0 min-vh-100">
            <h1>Barra de navegação</h1>
        </div>
        {/* Conteúdo principal, dependendo de qual rota está */}
        <div className="d-flex flex-column min-vh-100">
            <h1>Conteúdo principal</h1>
        </div>
      

    </div>
  )
}

export default RotasProtegidas
