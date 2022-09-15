import Item from "./Item";
import { llamarProductos } from './app/api'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";

const ItemList = () => {

  const [productos, setProductos] = useState([]);
  const {categoryid} = useParams();

  useEffect(() => {
  if(categoryid){
    llamarProductos().then(data => setProductos(data.filter(productos => productos.category === categoryid)));
  }else{
    llamarProductos().then((data)=>{
      setProductos(data);  
    })  
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
                />
            })
            
          }  
        </div>
      )
  }
  



export default ItemList;