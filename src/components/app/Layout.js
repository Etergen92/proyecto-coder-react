import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"


const Layout = () => {
  return (
    <div>
        <NavBar/>
        <h1 className="tituloPaginaInicio">"Bienvenido a la Disco Tienda"</h1>
        <Outlet/>
    </div>
  )
}

export default Layout