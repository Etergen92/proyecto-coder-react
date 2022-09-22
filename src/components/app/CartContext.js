import React from 'react'
// import { createContext } from 'react';
import { useState, useContext } from 'react'

export const useCartContext = () => useContext(CartContext);

const CartContext = React.createContext([]);
    

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const agregarProducto = (item, nuevaCantidad) =>{
        const nuevoCarrito = cart.filter(producto => producto.id !== item.id);
        nuevoCarrito.push({...item, cantidad: nuevaCantidad});
        setCart(nuevoCarrito)
    }

    console.log('carrito: ', cart)

    //Funcion para vaciar el carrito
    const vaciarCart = () => setCart([]);

    const borrarDeCart = (id) => setCart(cart.filter(product => product.id !== id));

    const estaEnCart = (id) => cart.find(product => product.id === id) ? true : false;

    return (
        <CartContext.Provider value={{
            agregarProducto,
            vaciarCart,
            borrarDeCart,
            estaEnCart
        }}>
            {children}
        </CartContext.Provider>
  )
}

export default CartProvider;