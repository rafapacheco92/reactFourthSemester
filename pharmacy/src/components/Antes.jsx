import React from 'react'
import { useState } from 'react' 
import './Antes.css'

function Antes(props) {

    const [bemVindo, setBemVindo] = useState('Seja bem vindo à Farmárcia! Como você se chama?');

    function alteraNome(event){
        setNome(event.target.value);
      }

    

  return (
    <div className='mainAntes'>
        <p>{bemVindo}</p>
        <div className='inpBut'>
            <input type="text" value={props.nome} onChange={alteraNome}/>
            
        </div>
    </div>
  )
}

export default Antes
