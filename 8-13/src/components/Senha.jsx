import {useState} from 'react'
import "./Senha.css"
import QueueDisplay from './QueueDisplay';


function Senha() {
  
  const [normal, setNormal] = useState([]);
  const [preferencial, setPreferencial] = useState([]);
  const [senhaAtual, setSenhaAtual] = useState(0)
  const [contadorNormal, setContadorNormal] = useState(0)
  const [contadorPreferencial, setContadorPreferencial] = useState(0)
  
  function GeraSenhaNormal(){
    setContadorNormal(contadorNormal + 1)
    setNormal([...normal, contadorNormal])
  }
  
  function GeraSenhaPreferencial(){
    setContadorPreferencial(contadorPreferencial + 1)
    setNormal([...preferencial, contadorPreferencial])
  }

  function ChamaSenha(){
    if (preferencial.length > 0){
        const senha = preferencial[0]
        setPreferencial(preferencial.slice(1))
        setSenhaAtual(senha)
    } else if (normal.length > 0) {
        const senha = normal[0]
        setNormal(normal.slice(1))
        setSenhaAtual(senha)
    } else {
        setSenhaAtual("Sem senhas")
    }
  }
  
  
    return (
    <>
      <div className='content'>
      <h1>Fila do pão</h1>
      
      <div className='contentDois'>
        <button onClick={GeraSenhaNormal} style={{ marginRight: '10px' }}>
          Gerar Senha Normal
        </button>
        <button onClick={GeraSenhaPreferencial}>
          Gerar Senha Preferencial
        </button>
      </div>

      <div className='contentTres'>
        <button onClick={ChamaSenha}>Chamar Próxima Senha</button>
      </div>

      <div className='contentQuatro'>
        Senha Atual: {senhaAtual ? senhaAtual : 'Nenhuma senha chamada'}
      </div>

      <QueueDisplay 
        normal={normal} 
        preferencial={preferencial} 
        atual={senhaAtual} 
      />
    </div>
    </>
  )
}

export default Senha
