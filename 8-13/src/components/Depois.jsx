import {useState, useContext} from 'react'
import './Depois.css'
import { GlobalContext } from "../contexts/GlobalContext"

function Depois(props) {

    const {cliente} = useContext(GlobalContext);

    const invite = `Olá ${cliente}, ficamos muito felizes com sua visita virtual! no dia 39 de Janembro teremos nossa inauguração, seria um prazer de conhecer você farmarciano pessoalmente! Teremos uns breguenets pra você ficar shaolin!`;


  return (
    <div>
      {invite}
    </div>
  )
}

export default Depois
