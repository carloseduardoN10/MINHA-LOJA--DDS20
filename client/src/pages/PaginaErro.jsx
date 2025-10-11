// Importação dos componentes do bootstrap
import Button from "react-bootstrap/esm/Button"

// Importação do navigate para transitar entre páginas
import { useNavigate } from "react-router-dom"

const PaginaErro = () => {
  // Variável navigate, pra guardar o retorno do hook
  const navigate = useNavigate()
  return (
    <div className='text-center d-flex min-vh-100 flex-column justify-content-center align-items-center'>
      <h2>Essa página no existe</h2>
      <button variant="Warning" onClick={() => { navigate ("/home")}}>Voltar para home</button>
    </div>
  )
}

export default PaginaErro
