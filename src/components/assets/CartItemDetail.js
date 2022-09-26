import Button from 'react-bootstrap/Button';
import { useCartContext } from '../app/CartContext';


const CartItemDetail = ({producto}) => {
    const {borrarDeCart} = useCartContext();
  return (
    <div className='vistaCarrito'>
        <div>
          <img src='' alt='imagen producto'></img>
        </div>
        <div>
          <h3>Producto</h3>
          <p>{producto.disco}</p>
          <p>{producto.artista}</p>
        </div>
        <div>
          <h3>Cantidad</h3>
          <p>
          {producto.cantidad}
          </p>
        </div>
        <div>
          <h3>Precio</h3>
          <p>
          ${producto.precio}
          </p>
        </div>
        <div>
          <h3>Subtotal</h3>
          ${producto.precio * producto.cantidad}
        </div>
        <Button onClick={()=> borrarDeCart(producto.id)} variant="secondary" className='botonEliminar'>Eliminar de Carrito</Button>
      </div>   
  )
}

export default CartItemDetail