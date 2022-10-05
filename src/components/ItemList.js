import Item from "./Item";
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";


const ItemList = () => {

  const [productos, setProductos] = useState([]);
  const {categoryid} = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productos')
    if(categoryid){
      const queryFiltro = query(queryCollection, where('category', '==', categoryid))
      getDocs(queryFiltro)
        .then(res => setProductos(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
    }else{
      getDocs(queryCollection)
        .then(res => setProductos(res.docs.map(producto => ({id: producto.id, ...producto.data()}))))
    }
  }, [categoryid])

  return(
        <div className="tarjetasProductos">

          {
            productos.map((producto)=>{
              return <Item
                id={producto.id}
                artista={producto.artista}
                disco={producto.disco}
                genero={producto.category}
                precio={producto.precio}
                img={producto.img}
                />
            })
            
          }  
        </div>
      )
  }
  



export default ItemList;