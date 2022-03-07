import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import { db } from "../../Firebase/Config"




export const Checkout = () => {
    const { cart, totalCart, vaciarCarrito } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const generarOrden = () => {
        const orden = {
            comprador: values,
            items: cart,
            total: totalCart(),
            fechayhora: Timestamp.fromDate(new Date())
        }

        const ordersRef = collection(db, "ordenes")

        addDoc(ordersRef, orden)
            .then((resp) => {

                cart.forEach((item) => {
                    const docRef = doc(db, 'productos', item.id)
                    getDoc(docRef)
                        .then((dbDoc) => {
                            if (dbDoc.data().stock >= item.cantidad){
                                updateDoc(docRef, { stock: dbDoc.data().stock - item.cantidad })
                            } else {
                                alert("Producto sin stock")
                            }
                        })
                })

                setOrderId(resp.id)
                vaciarCarrito()
            })
    }

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        tel: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 5 || values.nombre === "") {
            alert("El nombre es muy corto o vacio");
            return
        }

        if (values.email.length < 5 || values.email === "") {
            alert("El email es invalido");
            return
        }

        if (values.tel.length < 5 || values.tel === "") {
            alert("El telefono es muy corto o vacio");
            return
        }

        generarOrden()
    }

    if (orderId)
        return (
            <div className="container my-5">
                <h2>Gracias por su compra!</h2>
                <hr />
                <br />
                <h3>Su número de orden es: {orderId}</h3>
                <br />
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        )


    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    type='text'
                    placeholder="Ingrese su nombre"
                    value={values.nombre}
                    onChange={handleInputChange}
                    name='nombre'
                />
                <input
                    className="form-control my-2"
                    type='email'
                    placeholder="Ingrese su mail"
                    value={values.email}
                    onChange={handleInputChange}
                    name='email'
                />
                <input
                    className="form-control my-2"
                    type='tel'
                    placeholder="Ingrese su nro. de telefono"
                    value={values.tel}
                    onChange={handleInputChange}
                    name='tel'
                />
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
            </form>
        </div>
    )
}