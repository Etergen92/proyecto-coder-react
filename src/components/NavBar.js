import foto from "./assets/disco-vinilo.svg"

const NavBar = () => {
  return (
    <div className="navBar">
        <div className="tituloLogo">
            <img src={foto} alt="disco vinilo"className="logoTienda"/>
            <h1 className="tituloNavBar">Disco Tienda</h1>
        </div>
        <div className="botonesNav">
            <button className="botonNav"><a href="#">Home</a></button>
            <button className="botonNav"><a href="#">Productos</a></button>
            <button className="botonNav"><a href="#">Carrito</a></button>
        </div>
    </div>
  )
}

export default NavBar;