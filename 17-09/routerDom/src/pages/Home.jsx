import Navbar from "../components/Navbar"
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function Home() {
  const {usuarioNoiado, usuarios, setUsuarios} = useContext(GlobalContext)
  const [inputName, setInputName] = useState("")
  const [inputEmail, setInputEmail] = useState("")

  function inventaUser(){
    let usuarioNovo = {
        id: Date.now(),
        nome: "Cadeirudo",
        email: "botabaixo@nengue.com"
    }
      setUsuarios([...usuarios, usuarioNovo])
  }

  function criaUser(){
    let usuarioNovo = {
        id: Date.now(),
        nome: inputName,
        email: inputEmail
    }
      setUsuarios([...usuarios, usuarioNovo])
  }
  
    return (
    <div>
        <Navbar />
      <h1>Pagina Home</h1>
      <p>{usuarioNoiado} Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus beatae dignissimos fugiat reiciendis placeat temporibus rem mollitia fugit, soluta, sit, nesciunt modi aliquid harum. Totam vitae atque blanditiis cumque in est voluptas explicabo.</p>
      <div>
        {
            usuarios.map(usuario => (
                <div>
                    <p>Nome: {usuario.nome}</p>
                    <p>Email: {usuario.email}</p>
                    <p>Id: {usuario.id}</p>
                </div>
            ))
        }
      </div>
      <button onClick={inventaUser}>Inventar User</button>

      <label htmlFor="">Nome</label>
      <input type="text"
      value={inputName}
      onChange={(event) => setInputName(event.target.value)} />
      <label htmlFor="">Email</label>
      <input type="email"
      value={inputEmail}
      onChange={(event) => setInputEmail(event.target.value)} />

      <button onClick={criaUser}>Criar Usuario</button>
    </div>
  )
}

export default Home