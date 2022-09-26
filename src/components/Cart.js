import { Link } from "react-router-dom";
import { useCartContext } from "./app/CartContext"
import CartItemDetail from "./assets/CartItemDetail";
import { Button } from "react-bootstrap";

const Cart = () => {

  const {cart, totalPrecioCarrito} = useCartContext();

  if(cart.length === 0){
    return(
      <div className="contenedorCarritoVacio">
        <p className="carritoVacio">No agregaste productos a tu carrito</p>
        <Link to='/'><Button className="botonVerProductos" variant="secondary">Ver Productos</Button></Link>
      </div>
    ) 
  }

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Carrito</h1>  
      <div className="inicioCarrito">
        {
          cart.map(producto => <CartItemDetail key={producto.id} producto={producto} className='tarjetaCarrito'></CartItemDetail>)
        }
      </div>
      <p className="totalPrecioCompra">Total: ${totalPrecioCarrito()}</p>
    </div>
  )
}

export default Cart