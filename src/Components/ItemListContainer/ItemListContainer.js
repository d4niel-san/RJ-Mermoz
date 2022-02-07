import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { Contenedor } from "../Contenedor/Contenedor"
import { Item } from "../Item/Item"



export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
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
            })
    }, [])

    return (
        <Contenedor>
            <div className="row">
                {productos.map((el, i) => <Item key={i} {...el}/>)} 
            </div> 
        </Contenedor>
    )
}