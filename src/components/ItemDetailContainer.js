import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { llamarProductos } from './app/api'
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const {itemid} = useParams();

    useEffect(() => {
      llamarProductos().then(data => setProducto(data.find(producto => producto.id === parseInt(itemid))));
        }, [itemid])

  return (
      <ItemDetail producto={producto} />
)}

export default ItemDetailContainer;