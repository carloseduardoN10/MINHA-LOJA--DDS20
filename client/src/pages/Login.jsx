// Importação dos componentes do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/esm/Container"
import Alert from "react-bootstrap/Alert"

// Importaçãp do icone de login
import { BsBoxArrowInRight } from "react-icons/bs";

// importando o hook para verificar o login, vindo do useUsuarios
import { useVerificaLogin } from "../hooks/useUsuarios"

// importando a função useform do pacote hook-form
import { useForm } from "react-hook-form"

// Importando o useState para tratar de variáveis
import { useState } from "react"


const Login = () => {

  // register = cria um objeto com os valores retirados dos inputs
  // handleSubmit = envia o formulário, caso dê erro ou sucesso
  // formState { erros } = guarda uma lista de erros que aconteceram na tentativa do envio
  const {register, handleSubmit, formState: {errors} } = useForm()

  //Váriavel para classes do Alert
  const [alertaClasse, setAlertaClasse] = useState("d-none")

  // Caso o envio de certo
  // data = objeto com todas as informações preenchidas nos campos do formulario
  const onSubmit = (data) => {
    console.log("Dados enviados:", data);
    
  };

  // Caso o envio dê errado
  // errors = objeto com todos os erros do envio
  const onError = (errors) => {
    console.log("Erros:", errors);
  };

  return (
    <div>
      <Container className="justify-content-center align-content-center min-vh-100">
      {/* Linha para campos de login e nome */}
      <Row className="bg-info">
        {/* Coluna com o ícone da página */}
        <Col>
          {/* ícone de login */}
          <BsBoxArrowInRight style={{fontSize:"500px", color:"white" }} />
        </Col>
        {/* Coluna com o ícone da página */}
        <Col className="d-flex flex-column">
          <Form style={{width: "75%", margin:"auto", textAlign: "center"}} 
          // Utilizar o evento onSubmit para envio do formulário
          // e o HandleSubmit vindo do hookForm
          onSubmit={handleSubmit(onSubmit,onError)}>

            {/* Caixinha de email */}
              <FloatingLabel 
              controlId="inputEmail"
              label="Email"
              className="mb-5"
              >
                
                <Form.Control 
                type="email"
                {...register("email", {
                  required: "O email é obrigatório",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email inválido"
                  },
                  validate: (value) => value.includes("@") || "Email deve possuir um @"
                })}/>
                {errors.email && (<p className="error">{errors.email.message}</p>) }
              </FloatingLabel>
            {/* Fim de caixinha de email */}

            {/* Caixinha de senha */}
            <FloatingLabel
              controlId="inputSenha"
              label="Senha"
              className="mb-5">
                <Form.Control
                type="password"
                {...register("senha", {
                  required: "A senha é obrigatória"
                })}/>
                {errors.senha && (<p className="error">{errors.senha.message}</p>) }
            </FloatingLabel>
            {/* Fim da caixinha de senha */}

            {/* Botão para envio */}
            <Button variant="primary" type="submit" className="mb-5" size="lg">
              Login
            </Button>

            {/* Alerta, caso haja algum erro */}
            <Alert variant="danger" className={AlertaClasse}>
              Usuário ou senha inválidos
            </Alert>
          </Form>
        </Col>

      </Row>
      </Container>
    </div>
  )
}

export default Login
