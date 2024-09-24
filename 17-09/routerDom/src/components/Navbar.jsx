import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"><button>Casa</button></Link>
      <Link to="/contato"><button>Me liga</button></Link>
      <Link to="/generica"><button>Genérico é mais barato</button></Link>
      <Link to="/final"><button>Finalboss</button></Link>
    </nav>
  )
}

export default Navbar
