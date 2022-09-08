import React from 'react'
import foto from "./assets/vinilo-prueba.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = (producto) => {
    return(
      <div>
        <Card key={producto.id} style={{ width: '18rem' }}>
           <Card.Img variant="top" src={foto}/>
           <Card.Body>
             <Card.Title>{producto.disco}</Card.Title>
             <Card.Text>{producto.artista}</Card.Text>
             <Card.Text>${producto.precio}</Card.Text>
             <Card.Text>{producto.año}</Card.Text>
             <Button variant="secondary">Ver Mas</Button>
            </Card.Body>
        </Card>
      </div>   

    )
    
}


export default Item