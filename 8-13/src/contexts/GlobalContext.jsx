import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {

    const [cliente, setCliente] = useState('Seja bem vindo à Farmárcia! Como você se chama?');
    const [fila, setFila] = useState('');
    const [isLogged, setIsLogged] = useState(false);


    return(
        <GlobalContext.Provider value = {{cliente, setCliente, fila, setFila, isLogged, setIsLogged}}>
            {children}
        </GlobalContext.Provider>
    )
}






// function GlobalContext() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default GlobalContext
