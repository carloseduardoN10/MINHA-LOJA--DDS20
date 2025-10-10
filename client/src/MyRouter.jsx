import { createBrowserRouter } from "react-router-dom"

// Importação das páginas pricipais
import App from "./App.jsx"
import PaginaErro from "./pages/PaginaErro.jsx"
import Login from "./pages/Login.jsx"
import RotasProtegidas from "./pages/RotasProtegidas.jsx"
import Home from "./pages/Home.jsx"

//Variavel que ira receber a funçao e os objetos(rotas)
const router = createBrowserRouter([
    {
        //ROTA PAI
        path:"/",
        element: <App />,
        errorElement: <PaginaErro />,
        children: [
            //ROTAS FILHO login,cadastro...
            {
                index: true,
                element: <Login />
            },
            {
                path:"login",
                element: <Login />
            }
        ]
    },
    {
        //Rota pai do segundo layout
        path: "/",
        element: <RotasProtegidas />,
        errorElement: <PaginaErro />,
        children:[
            {
                path: "home",
                element: <Home/>
            },
            {
                
            }
        ]
    }
 ])

 export default router