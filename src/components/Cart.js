import { Link } from "react-router-dom";
import { useCartContext } from "./app/CartContext"
import CartItemDetail from "./assets/CartItemDetail";
import { Button } from "react-bootstrap";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Form from 'react-bootstrap/Form';


// Prueba de alertas con Sweet Alert
const MySwal = withReactContent(Swal)

const Cart = () => {

  const {cart, totalPrecioCarrito, vaciarCart} = useCartContext();
  
  const [user, setUser] = useState({
    nombre: '',
    telefono: '',
    email: ''
  },
  )

  const order = {
    productos: cart.map(producto =>({id: producto.id, disco: producto.disco, precio: producto.precio, cantidad: producto.cantidad})),
    total: totalPrecioCarrito() ,
  }

  if(cart.length === 0){
    return(
      <div className="contenedorCarritoVacio">
        <p className="carritoVacio">No agregaste productos a tu carrito</p>
        <Link to='/'><Button className="botonVerProductos" variant="secondary">Ver Productos</Button></Link>
      </div>
    ) 
  }

  const handleOrder = async (e) =>{
   
    const date = new Date()
    e.preventDefault()
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, {order, user, date})

    // ID de orden de compra
    .then(({id}) => console.log(id))


    // Alerta que notifica compra terminada con exito
    MySwal.fire({
      title: <strong>Compra Terminada</strong>,
      html: <i>Recibiras en tu email el ID de compra:</i>,
      icon: 'success'
    })

    // Limpieza de carrito una vez terminada la compra
    vaciarCart()
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
      
      <div className="seccionTerminarCompra">
        <h1>Termina tu Compra</h1>
        <Form onSubmit={handleOrder} className='formularioCompra'>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su Nombre" value={user.nombre} onChange ={(e) => setUser({...user, nombre: e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Telefono</Form.Label>
            <Form.Control type="number" placeholder="Ingrese su Telefono" value={user.telefono} onChange ={(e) => setUser({...user, telefono: e.target.value})}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su E-mail" value={user.email} onChange ={(e) => setUser({...user, email: e.target.value})}/>
          </Form.Group>

          <Button onClick={handleOrder} className="botonVerProductos" variant="secondary">Terminar Compra</Button>
        </Form>
      </div>
    </div>
    
  )
}

export default Cart