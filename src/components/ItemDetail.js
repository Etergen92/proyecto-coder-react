import React from 'react'
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from './app/CartContext';
import { Button } from 'react-bootstrap';

const ItemDetail = ({producto}) => {

  const[irCarrito, setIrCarrito] = useState(false);
  const {agregarProducto} = useCartContext();

  const onAdd = (cantidad) => {
    setIrCarrito(true);
    agregarProducto(producto, cantidad)
  }

return(
    <div className='detalleProducto'>
      <h1 className='titulos'>Detalle de Producto</h1>
      <div className='detalleProductoFlex'>
        <div>
          <img src={`/${producto.img}`} className='imgDetalle cardShadow' alt="producto"></img>
        </div>  
        <div className='detalleProductoFlex_info cardShadow'>
          <h1>Disco: {producto.disco} </h1>
          <h1>Artista: {producto.artista}</h1>
          <h3>Genero: {producto.category}</h3>
          <h3>Precio: ${producto.precio}</h3>{
            irCarrito ?
            <div>  
              <Link to={`/cart`}><Button variant="secondary" className='terminarCompra'>Terminar Compra</Button></Link>
              <Link to={`/`}><Button variant="secondary">Seguir Comprando</Button></Link>
            </div>
            :<ItemCount stock={producto.stock} onAdd={onAdd} initial={1}/> 
          }
        </div>
      </div>
  </div>    
)}


export default ItemDetail;