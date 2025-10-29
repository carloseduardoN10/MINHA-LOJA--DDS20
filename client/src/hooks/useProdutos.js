// url da API
const url = "http://localhost:5000";

//Importando o hook de useState para controlar as variáveis
import { useState, useEffect, use } from "react";

export function useListaCategorias() {
    // Váriavel para armazenar as categorias
    const [categorias, setCategorias] = useState([])

    // Puxa os dados da API assim que o componente for renderizado
    useEffect(()=>{
        async function fetchCategorias(){
            try{
                // Fetch abre conexão com a api, na rota especificada e guarda a resposta em req
                const req = await fetch(`${url}/categorias`)
                // como a resposta vem em texto, preciso converter para json 
                const res = await req.json()
                // Assim que estiver convertido, guarda na variável de categorias
                setCategorias(res)
            } 
            // Se tver erro na tentativa de conexão, mostrar qual foi no console
            catch(erro){
                console.log(erro.message);
            }
        }
        // Executa a função para buscar as categorias na api
        fetchCategorias()
    },[])
    // Retorna para quem chamou a função, a lista de categorias
    return categorias
}

export function useListaMedidas(){
    // Lista com medida
    const [medidas] = useState([
        { 
            id:1, nome:"mL",
            id:2, nome:"L"
        }
    ])
    return medidas
}