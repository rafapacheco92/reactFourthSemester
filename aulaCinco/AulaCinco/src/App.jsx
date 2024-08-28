import './App.css';
import ImaginacaoUm from './components/ImaginacaoUm';
import Titulo from './components/Titulo';
import { useState } from 'react';

function App() {

  const [nameInput, setNameInput] = useState('');

  const [imagination, setImagination] = useState([{
    id: Date.now(),
    picture: "A dog with a horn and wings",
    action: "Flies and stabs",
    what: "my belly",
    and: "and it hurts"
    },
    {
      id: Date.now() + 1,
      picture: "A cat wearing a space suit",
      action: "Jumps between planets",
      what: "my bed",
      and: "it bounces"
    },
    {
      id: Date.now() + 2,
      picture: "A giant jellyfish with a monocle",
      action: "Sings opera",
      what: "the moon",
      and: "it echoes"
    },
    {
      id: Date.now() + 3,
      picture: "A rainbow-colored penguin",
      action: "Rides a unicycle",
      what: "a mountain peak",
      and: "it sparkles"
    },
    {
      id: Date.now() + 4,
      picture: "A robot with butterfly wings",
      action: "Dances in the rain",
      what: "a giant teacup",
      and: "it swirls"
    },
    {
      id: Date.now() + 5,
      picture: "A dragon made of cotton candy",
      action: "Breathes out glitter",
      what: "in my shoes",
      and: "they sparkle"
    }
  ])

  function nameChanger(event){
    setNameInput(event.target.value)
  }

  function sleepWell(){
    let sleeper = {
      id: Date.now(),
      picture: nameInput,
      action: "[name]",
      what: 0,
      and: 0
    }

    setImagination([sleeper, ...imagination])
    console.log(imagination)

  }

  return (
    <>
      
        <Titulo emojiUm={"=]"} texto={"Fantástico Mundo de Bobby"} emojiDois={"[="}/>

        <div className='formSignin'>
            <h2>Dreamer</h2>
            <label>Dreamer's name:</label>
            <input type="text" placeholder='your fkng name'
              value={nameInput} 
              onChange={nameChanger}
            />
            <button onClick={sleepWell}>Sleep... but awake</button>
        </div>

        <div className='cards'>
          {imagination.map( (i) => (
            <ImaginacaoUm dream={i} key={i.id}/>
          ))}
        </div>

    </>
  )
}

export default App
