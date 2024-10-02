import React from 'react'
import { useState, useContext } from 'react' 
import { GlobalContext } from "../contexts/GlobalContext"
import './Antes.css'

function Antes(props) {

    const {cliente, setCliente, isLogged, setIsLogged} = useContext(GlobalContext)
    const [botao, setBotao] = useState('Prazer!')


    function alteraNome(event){
        setCliente(event.target.value);
      }

    function changeText(){
        setIsLogged(true)
        setBotao('Podes Crer!')
    }
    

  return (
    <div className='mainAntes'>
        <p>Seja bem vindo à Farmarcia! Qual seu nome?</p>
        <div className='inpBut'>
            <input type="text" value={props.cliente} onChange={alteraNome}/>
            <button onClick={changeText}>{botao}</button>

        </div>
    </div>
  )
}

export default Antes
