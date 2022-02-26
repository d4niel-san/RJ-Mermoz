import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../Firebase/Config"
import { Contenedor } from "../Contenedor/Contenedor"
import { Item } from "../Item/Item"



export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {

        setLoading(true)

        //1. Armo referencia
        const productosRef = collection(db, 'productos');
        //2. Pedir Referencia
        getDocs(productosRef)
            .then((resp) => {
                setProductos(resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
                console.log(productos)
            })
        /*pedirDatos()
        .then((res) => {
            setProductos(res)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
            .finally(() => {
                console.log('Productos Cargados')
                setLoading(false)
            })*/
    }, [])

    return (
        loading
            ? <h3>Cargando...</h3>
            :
            <Contenedor>
                <div className="row">
                    {productos.map((el, i) => <Item key={i} {...el} />)}
                </div>
            </Contenedor>
    )

    //return (loading && <Navigate to="/"/>)
}