import React from 'react'
// import foto from "./assets/vinilo-prueba.jpg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({artista, disco, genero, precio, id, img}) => {
    return(
      <div>
        <Card style={{ width: '18rem' }} className='cardShadow'>
           <Card.Img variant="top" src={`/${img}`} className='imgTarjeta'/>
           <Card.Body>
             <Card.Title>{disco}</Card.Title>
             <Card.Text>{artista}</Card.Text>
             <Card.Text>{genero}</Card.Text>
             <Card.Text>${precio}</Card.Text>
             <Link to={`/item/${id}`}><Button variant="secondary">Ver Mas</Button></Link>
            </Card.Body>
        </Card>
      </div>   
    )
    
}


export default Item