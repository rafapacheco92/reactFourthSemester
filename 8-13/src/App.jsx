import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'

function App() {

  const [nome, setNome] = useState('');

  return (
    <>
      <Header />
      <Body nome={nome}/>
    </>
  )
}

export default App
