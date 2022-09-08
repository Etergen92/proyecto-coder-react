import Item from "./Item";
import { llamarProductos } from './app/api'
import { useState } from 'react';
import { useEffect } from 'react';

const ItemList = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    llamarProductos().then((data)=>{
      setProductos(data);  
    })  
    }, [])

return(
      <div className="tarjetasProductos">

        {
          productos.map((producto)=>{
            return <Item
              key={producto.id}
              artista={producto.artista}
              disco={producto.disco}
              precio={producto.precio}
              año={producto.año}
              img={producto.img}
              />
          })
        }  
      </div>
    )
  }
  



export default ItemList;