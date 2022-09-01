import foto from "./assets/disco-vinilo.svg"
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="navBar">
        <div className="tituloLogo">
            <img src={foto} alt="disco vinilo" className="logoTienda"/>
            <h1 className="tituloNavBar">Disco Tienda</h1>
        </div>
        <div className="botonesNav">
            <button className="botonNav">Home</button>
            <button className="botonNav">Productos</button>
            <button className="botonNav">Carrito</button>
            <CartWidget/>
        </div>
    </div>
  )
}

export default NavBar;