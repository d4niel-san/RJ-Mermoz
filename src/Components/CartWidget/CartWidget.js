
import { useContext } from 'react'
import { FaOpencart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'


export const CartWidget = () => {
    
    const { cantidadCart } = useContext(CartContext)
    
    const MostrarCantidad = () => {
        
        if (cantidadCart()) {
            return (<span>{cantidadCart()}</span>);
        }
    }
        
    return (
        <Link to="/cart" className='cart-widget'>
            <FaOpencart />
            {MostrarCantidad()}
        </Link>
    )
}