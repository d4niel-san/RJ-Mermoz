import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { Contenedor } from "../Contenedor/Contenedor"
import { Item } from "../Item/Item"



export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {

        setLoading(true)

        pedirDatos()
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
            })
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