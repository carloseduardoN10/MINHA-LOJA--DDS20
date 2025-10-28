// Importando o componente formulário de produto
import FormularioProduto from '../../components/FormularioProduto/FormularioProduto'

// Importando o container do bootstrap
import { Container } from 'react-bootstrap'

const EditarProduto = () => {
  return (
    <div>
      <Container>
        <h1 className='text-center'> Cadastrar Produto </h1>
      <FormularioProduto page="cadastro"/>
    </Container>
    </div>
  )
}

export default EditarProduto
