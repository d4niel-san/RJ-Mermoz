import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

export const ItemDetail = ({ id, nombre, img, desc, precio, stock, categoria }) => {

    const [cantidad, setCantidad] = useState(0);

    const { agregarAlCarrito, isInCart } = useContext(CartContext);

    const handleAgregar = () => {
        if (cantidad === 0) return;

        const addItem = {
            id, nombre, precio, cantidad,
        }

        agregarAlCarrito(addItem);


    }


    return (
        <div>
            <h3>{nombre}</h3>
            <img src={img} alt={nombre} />
            <p>{desc}</p>
            <h5>Precio: ${precio}</h5>

            {isInCart(id)
                ? <Link to="/cart" className="btn btn-success my-3">
                    Terminar la compra
                </Link>
                : <>
                    <ItemCount
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                    />

                    <button
                        className="btn btn-success my-2"
                        onClick={handleAgregar}
                    >
                        Agregar al carrito
                    </button>
                </>
            }

        </div>
    )
}