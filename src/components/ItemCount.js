import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';




const ItemCount = ({stock, onAdd, initial}) => {
  const[cantidad, setContador] = useState(initial);

  const incrementar = () =>{
    setContador(cantidad + 1)
  } 

  const decrementar = () =>{
    setContador(cantidad - 1)
  } 

  return (
    <>
      <div className="estiloContador">
        <ButtonGroup aria-label="Basic example">
          <Button disabled={cantidad <= 1} onClick={decrementar}variant="secondary">-</Button>
          <p className="contadorCantidad d-inline">{cantidad}</p>
          <Button disabled={cantidad >= stock} onClick={incrementar} variant="secondary">+</Button>
      </ButtonGroup>
      </div>
      <Button variant="secondary" className='botonAnadir'onClick={() => onAdd(cantidad)}>Añadir al Carrito</Button>
    </>
  )
}

export default ItemCount