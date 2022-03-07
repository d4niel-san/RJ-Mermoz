import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"




export const CartInfo = () => {

    const { totalCart, vaciarCarrito, cantidadCart } = useContext(CartContext)
    console.log(cantidadCart());
    if (!cantidadCart()) {
        return (
            <>
                <h2> Tu carro esta vacio</h2>
                <Link to="/" className="btn btn-success mx-2">Volver a inicio</Link>
            </>
        )
    }

    return (<>
        <hr />
        <h2>Total: ${totalCart()}</h2>
        <div className="my-2">
            <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar Carrito</button>
            <Link to="/Checkout" className="btn btn-success mx-2" >Terminar mi compra</Link>
        </div>
    </>)
}