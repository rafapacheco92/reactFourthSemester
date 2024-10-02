import React from 'react'
import './Body.css'
import Antes from './antes';
import Depois from './Depois';
import { useState, useContext } from 'react' 
import { GlobalContext } from "../contexts/GlobalContext"
import Senha from './Senha';


function Body() {
    
    const { cliente, isLogged, setIsLogged } = useContext(GlobalContext)
    // const [botao, setBotao] = useState('Prazer!')

    // function changeText(){
    //     setIsLogged(true)
    //     setBotao('Podes Crer!')
    // }

  return (
    <>
      <div className='content'>
        {isLogged ? <Depois /> : <Antes />}
        <Senha />
      </div>
    </>
  )
}

export default Body
