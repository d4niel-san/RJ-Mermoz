import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../Firebase/Config"
import { Contenedor } from "../Contenedor/Contenedor"
import { Item } from "../Item/Item"


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    console.log(catId)

    useEffect(() => {

        setLoading(true)

        //1. Armo referencia
        const productosRef = collection(db, 'productos');
        const q = catId ? query(productosRef, where("categoria", "==", catId)) : productosRef
        //2. Pedir Referencia
        getDocs(q)
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
            })
    }, [catId])

    return (
        loading
            ? <h3>Cargando...</h3>
            :
            <>
                <div className="logoimage" ></div>
                <Contenedor>
                    <div className="row">
                        {productos.map((el, i) => <Item key={i} {...el} />)}
                    </div>
                </Contenedor>
            </>
    )

    //return (loading && <Navigate to="/"/>)
}