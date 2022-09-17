import React from 'react'
import ItemCount from './ItemCount';
import foto from "./assets/vinilo-prueba.jpg"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({id, artista, disco, genero, precio, stock}) => {

  // const [count, setCount] = useState(0);

  const[irCarrito, setIrCarrito] = useState(false);

  const onAdd = (cantidad) => {
    setIrCarrito(true)
  }

return(

  <div className='detalleProducto'>
      <h1>Detalle de Producto</h1>
      <div className='detalleProductoFlex'>
        <div>
          <img src={foto} alt="producto"></img>
        </div>
        <div className='detalleProductoFlex_info'>

          <h1>ID: {id} </h1>
          <h1>Artista: {artista}</h1>
          <h1>Disco: {disco} </h1>
          <h3>Genero: {genero}</h3>
          <h3>Precio: {precio}</h3>{
            irCarrito ?
            <Link to={`/cart`}>Terminar Compra</Link>
            :<ItemCount stock={stock} onAdd={onAdd} initial={1}/> 
          }
        </div>
      </div>
    </div>
)}


export default ItemDetail;