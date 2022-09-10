import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { getItem } from './app/api'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    useEffect(()=>{
        getItem().then((producto)=>{
            setProducto(producto);
        });
    }, []);

  return (
        <ItemDetail producto={producto}/>
)}

export default ItemDetailContainer;