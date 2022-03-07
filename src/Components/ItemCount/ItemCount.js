


export const ItemCount = ({ max, min = 0, cantidad, setCantidad }) => {
    

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1);
    }
    const handleRestar = () => {
        cantidad > min && setCantidad(cantidad - 1);
    }

    return (
        <div>
            <button className="btn btn-outline-primary" onClick={handleRestar}>-</button>
            <span className="mx-4">{cantidad}</span>
            <button className="btn btn-primary" onClick={handleSumar}>+</button>
        </div>
    )
}