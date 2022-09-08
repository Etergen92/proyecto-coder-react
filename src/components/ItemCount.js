import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';




const ItemCount = ({stock}) => {
  const[cantidad, setContador] = useState(1)
  return (
    <>
      <div className="estiloContador">
        <ButtonGroup aria-label="Basic example">
          <Button onClick={() => cantidad > 0 ? setContador(cantidad - 1) : cantidad}variant="secondary">-</Button>
          <p className="contadorCantidad d-inline">{cantidad}</p>
          <Button onClick={() => cantidad < stock ? setContador(cantidad + 1) : cantidad} variant="secondary">+</Button>
      </ButtonGroup>
      </div>
      <Button variant="secondary" className='botonAnadir'>Añadir al Carrito</Button>
    </>
  )
}

export default ItemCount