import foto from "./assets/disco-vinilo.svg"

const Footer = () => {
  return (
    <div className="navBar">
    <div className="tituloLogo">
        <img src={foto} alt="disco vinilo" className="logoTienda"/>
        <h3 className="tituloNavBar">Disco Tienda</h3>
    </div>
    <div>
        <p className="copyright">© Copyright 2022 por Disco Tienda</p>
    </div>
</div>
  )
}

export default Footer