import React from 'react'
import ItemCount from './ItemCount';
import foto from "./assets/vinilo-prueba.jpg"


const ItemDetail = ({producto}) => (
  <div className='detalleProducto'>
      <h1>Detalle de Producto</h1>
      <div className='detalleProductoFlex'>
        <div>
          <img src={foto} alt="producto"></img>
        </div>
        <div className='detalleProductoFlex_info'>
          <h1>Disco: {producto.disco} </h1>
          <h2>Artista: {producto.artista}</h2>
          <h3>Genero: {producto.genero}</h3>
          <h3>Año: {producto.año}</h3>
          <h3>Formato: {producto.formato}</h3>
          <h3>Origen: {producto.origen}</h3>
          <ItemCount stock={producto.stock}/> 
        </div>
      </div>
    </div>
  )


export default ItemDetail;