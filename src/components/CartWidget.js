// Componente Icono Carrito de Compras
import foto from "./assets/carrito-de-compras.png"
import { useCartContext } from "./app/CartContext"


const CartWidget = () => {
  const {totalProductos} = useCartContext();

  return (
    <div className="flex-carrito">
      <img src={foto} alt='carrito de compras' className='carritoCompras'/><span className="totalProductos">{totalProductos() || '0'}</span>
    </div>
  )
}

export default CartWidget