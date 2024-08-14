import React from 'react'
import { useState } from 'react' 
import './Body.css'
import Antes from './antes';
import Depois from './Depois';

function Body() {
    
    
    const [central, setCentral] = useState(<Antes />)

    function changeText(){
        setCentral(<Depois />)
    }

  return (
    <>
      <div className='content'>
        {central}
        <button onClick={changeText}>Prazer!</button>
      </div>
    </>
  )
}

export default Body
