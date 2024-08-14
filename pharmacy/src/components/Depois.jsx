import React from 'react'
import './Depois.css'

function Depois(props) {

    const invite = `Olá ${props.nome}, ficamos muito felizes com sua visita virtual! no dia 39 de Janembro teremos nossa inauguração, seria um prazer de conhecer você farmarciano pessoalmente! Teremos uns breguenets pra você ficar shaolin!`;


  return (
    <div>
      {invite}
    </div>
  )
}

export default Depois
