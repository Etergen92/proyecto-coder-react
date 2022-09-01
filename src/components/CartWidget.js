// Componente Icono Carrito de Compras
import foto from "./assets/carrito-de-compras.png"


const CartWidget = () => {
  return (
    <div>
      <img src={foto} alt='carrito de compras' className='carritoCompras'/>
    </div>
  )
}

export default CartWidget