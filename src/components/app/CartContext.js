import React from 'react'
import { useState, useContext } from 'react'

export const useCartContext = () => useContext(CartContext);

const CartContext = React.createContext([]);
    

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    //Funcion para cargar productos al carrito:
    const agregarProducto = (item, nuevaCantidad) =>{
        const nuevoCarrito = cart.filter(producto => producto.id !== item.id);
        nuevoCarrito.push({...item, cantidad: nuevaCantidad});
        setCart(nuevoCarrito)
    }

    const totalPrecioCarrito = () =>{
        return cart.reduce((total, producto) => total + producto.cantidad * producto.precio, 0 );
    }

    const totalProductos = () => cart.reduce((contador, producto)=> contador + producto.cantidad, 0)

    //Funcion para vaciar el carrito:
    const vaciarCart = () => setCart([]);

    //Funcion para borrar un producto del carrito:
    const borrarDeCart = (id) => setCart(cart.filter(product => product.id !== id));

    //Funcion para controlar que el producto a ingresar se encuentra cargado en el carrito o no
    const estaEnCart = (id) => cart.find(product => product.id === id) ? true : false;

    return (
        <CartContext.Provider value={{
            agregarProducto,
            vaciarCart,
            borrarDeCart,
            estaEnCart,
            totalPrecioCarrito,
            totalProductos, 
            cart
        }}>
            {children}
        </CartContext.Provider>
  )
}

export default CartProvider;