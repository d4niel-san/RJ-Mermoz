import { createContext, useState } from "react";
import { stock } from "../data/stock";



export const CartContext = createContext()


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const agregarAlCarrito = (item) => {
        if (!isInCart(item.id)) {
            setCart([...cart, item])
        } else {
            if ((cart.find((prod) => prod.id === item.id).cantidad) + item.cantidad > (stock.find((prod) => prod.id === item.id).stock)) {
                console.log("stock sobrepasado, no se debe agregar"); //falta aplicarlo
            } else {
                console.log("stock disponible, no agregado aun");  //falta aplicarlo
            }
        }
    }

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    }

    const cantidadCart = () => {
        return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const vaciarCarrito = () => {
        setCart([]);
    }

    const totalCart = () => {
        return cart.reduce((acc, prod) => parseFloat(acc + prod.cantidad * prod.precio).toFixed(2), 0)
    }

    const eliminarItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
    }

    return (
        <CartContext.Provider value={
            {
                cart,
                agregarAlCarrito,
                isInCart,
                cantidadCart,
                totalCart,
                vaciarCarrito,
                eliminarItem
            }
        }>
            {children}
        </CartContext.Provider>

    )
}