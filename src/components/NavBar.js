import { Link} from "react-router-dom";
import foto from "./assets/disco-vinilo.svg"
import CartWidget from "./CartWidget";
import Button from 'react-bootstrap/Button';


const NavBar = () => {
  return (
    <div className="navBar">
        <div className="tituloLogo">
            <Link to='/'><img src={foto} alt="disco vinilo" className="logoTienda"/></Link> 
            <h1 className="tituloNavBar">Disco Tienda</h1>
        </div>
        <div>
          <ul className="botonesNav">
            <li><Link to='/category/rock' className="botonNav"><Button variant="secondary">Rock</Button></Link></li>
            <li ><Link to='/category/jazz' className="botonNav"><Button variant="secondary">Jazz</Button></Link></li>
            <li><Link to='/category/pop' className="botonNav"><Button variant="secondary">Pop</Button></Link></li>
            <li><CartWidget/></li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar;