import { useState } from 'react' 
import './App.css'

function App() {

  const [count,setCount] = useState(23)
  let cont = 0;

  function tratarClick(){
    cont++
    console.log(cont)
  }

  function iscrementoContador(){
    setCount(count+1)
  }

  function zeraContador(){
    setCount(0)
  }

  return (
    <>
      <h1>Contador</h1>
      <button onClick={tratarClick}>Clica ai nengue</button>
      <div>
      {cont}
      </div>

        <button onClick={iscrementoContador}>ainC</button>
      
      <div>
        {count}
      </div>

        <button onClick={zeraContador}>Zera saporra</button>
    </>
  )
}

export default App
