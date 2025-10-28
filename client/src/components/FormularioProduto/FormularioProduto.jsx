// Importação componentes Bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Buttonfrom from "react-bootstrap/Button"
import  Image  from "react-bootstrap/Image"

// Importando o useForm do pacote react-hook-form
import { useForm } from "react-hook-form"

const FormularioProduto = (props) => {

  // register = cria um objeto com os valores retirados dos inputs
  // handleSumbit = envia os dados formulário, caso dê erro ou sucesso
  // formState { errors } = objeto que guarda uma lista de erros que aconteceram na tentativa do envio
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <div className="text-center">
        <form className="mt-3 w-full" onSubmit={""}>
            <Row>
                <Col md={12} lg={6}>
                {/* Caixinha de SKU */}
                <FloatingLabel controlId="FI-SKU" label="SKU" className="mb-5">
                    <Form.Control type="text" {...register("sku", {
                        required: "O campo SKU é obrigatório",
                        minLength: {
                            value: 2,
                            message: "O SKU deve ter no mínimo 2 caracteres"
                        },
                        maxLength: {
                            value: 10,
                            message: "O SKU deve ter no máximo 10 caracteres"
                        }
                    })}>
                    </Form.Control>
                   { errors.sku && <p className="error"> {errors.sku.message} </p> }
                </FloatingLabel>
                {/* Fim de caixinha de SKU */}
             
                {/* Caixinha de Nome */}
                <FloatingLabel controlId="FI-NOME" label="Nome" className="mb-5">
                    <Form.Control type="text" {...register("nome", {
                        required: "O campo nome é obrigatório",
                        minLength: {
                            value: 2,
                            message: "O nome deve ter no mínimo 2 caracteres"
                        },
                        maxLength: {
                            value: 100,
                            message: "O nome deve ter no máximo 100 caracteres"
                        }
                    })}>
                    </Form.Control>
                    { errors.nome && <p className="error"> {errors.nome.message} </p> }
                </FloatingLabel>
                {/* Fim de caixinha de Nome */}
                </Col>
            </Row>

        </form>
      
    </div>
  )
}

export default FormularioProduto
