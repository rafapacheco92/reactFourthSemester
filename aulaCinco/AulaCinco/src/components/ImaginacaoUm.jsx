import "../components/ImaginacaoUm.css"

function ImaginacaoUm(props) {

    let p = props.dream
  return (
    <div class="dreamContainer">
      <h2>{p.picture}</h2>
      <h2>{p.action}</h2>
      <h2>{p.what}</h2>
      <h2>{p.and}</h2>
      <p>id: {p.id}</p>
    </div>
  )
}

export default ImaginacaoUm
