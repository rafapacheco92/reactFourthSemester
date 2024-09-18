import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

    let usuarioNoiado = 'Mini me'
    const [usuarios, setUsuarios] = useState([
        {
        id: Date.now(),
        nome: "Bob marte",
        email: "botaum@meuchapa.com"
        },
        {
        id: Date.now()+1,
        nome: "Bob Jupiter",
        email: "botodois@meuchapa.com"
        },
        {
        id: Date.now()+2,
        nome: "Bob Saturno",
        email: "botoohk@meuchapa.com"
        },
])

    return(
        <GlobalContext.Provider value={{usuarioNoiado, usuarios, setUsuarios}}>
            {children}
        </GlobalContext.Provider>
    )
}