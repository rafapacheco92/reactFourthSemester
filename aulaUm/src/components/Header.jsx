import './Header.css'
import { NihonIchi } from './icons/NihonIchi'

function Header() {

  const iconBig = {
    width: '28px',
    height: '28px'
  }

  return (
    <div className="containerHeader">
      <h1>Nihon</h1>
      <NihonIchi style={iconBig} />
    </div>
  )
}

export default Header
