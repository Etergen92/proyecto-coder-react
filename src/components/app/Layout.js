import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
import Footer from "../Footer"
import bienvenida from '../assets/disco-inicio.png';

const Layout = () => {
  return (
    <div>
        <NavBar/>

        <img src={bienvenida} className='imgBienvenida' alt="imagen disco"></img>
        <Outlet/>
        <Footer/>
        
    </div>
  )
}

export default Layout