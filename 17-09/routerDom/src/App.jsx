import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Contato from './pages/Contato'
import Generica from './pages/Generica'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <Contato />
      <Generica />
    </>
  )
}

export default App
