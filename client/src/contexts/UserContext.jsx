// Importtando o hook de criar o contexto
import { createContext , useState, useEffect } from "react";

// Criando o contexto de autorização
export const AuthContext = createContext()

//Cria o provedor do contexto
// Provider = fornece as informações para componentes filhos
export const AuthProvider = ( { children }) => {
    //State para guardar o nome do usuário logado no momento
    const[usuraioNome, setUsuarioNome] = useState ("")

    //Quando ocomponente é renderizado, busca no localStorage o usuario atual, se não tiver nenhum define como Visitante
    useEffect( () => {
        const nome = localStorage.getItem("userName") || "visitante"
        setUsuarioNome(nomeAtual)
    },[])

    // Função para receber as informações de login, e guardar no localStorage
    const login = (data) => {
        console.log("Usuário logado:", data);
        localStorage.setItem("id", data.id)
        localStorage.setItem("userName", data.nome)
        localStorage.setItem("email", data.email)
        localStorage.setItem("imagemPerfil", data.imagemUrl)
        setUsuarioNome(data.nome)
    
    }
    
    // Função para remover as informações login do localStorage e redefinir o nome de usuário para Visitante
    const logout = () => {
        localStorage.clear()
        setUsuarioNome("Visitante")

        // Retorna o provider forneceno os dados do usuário, login e logout
        return (
            <AuthProvider.Provider value={ {usuraioNome, login, logout} }>
                { children }
            </AuthProvider.Provider>
        )
        
    }
}