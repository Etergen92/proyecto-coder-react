import React from 'react'
import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc} from "firebase/firestore";



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const {itemid} = useParams();

    useEffect(() => {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, 'productos', itemid)
      getDoc(queryDoc)
      .then(res => setProducto({id: res.id, ...res.data()}))
    }, [itemid])

  return (
      <ItemDetail producto={producto}/>
)}

export default ItemDetailContainer;