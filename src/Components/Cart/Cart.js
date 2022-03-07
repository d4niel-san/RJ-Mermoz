import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { FaTrash } from "react-icons/fa"
import { CartInfo } from "./CartInfo"


export const Cart = () => {

    const { cart, eliminarItem } = useContext(CartContext)

    return (
        <div className="container my-4">
            <h2>Tu Compra</h2>
            <hr />
            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${parseFloat(item.precio * item.cantidad).toFixed(2)}</p>
                        <button className="btn btn-danger" onClick={() => eliminarItem(item.id)}><FaTrash /></button>
                    </div>
                ))
            }
            <CartInfo/>

        </div>
    )
}