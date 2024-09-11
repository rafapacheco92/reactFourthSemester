import { useState } from 'react'
import './App.css'
import UsuarioLogado from './components/UsuarioLogado'
import AreaParaAdultos from './components/AreaParaAdultos'
import CriancaMetida from './components/CriancaMetida'

function App() {
  const [usuario, setUsuario] = useState(false)
  const [idade, setIdade] = useState(0)


  return (
    <>
      <div className='renderContainer'>
        { usuario && <UsuarioLogado /> }
        <button onClick={ () => {setUsuario(true)} }>Logar</button>
        <button onClick={ () => {setUsuario(false)} }>Logout</button>
      </div>

      <div className='renderContainer'>
        <button onClick={() => setIdade(idade - 1)}>-</button> {idade} <button onClick={() => setIdade(idade + 1)}>+</button>
        { idade>=18 ? <AreaParaAdultos /> : <CriancaMetida />}
      </div>
    </>
  )
}

export default App
