
import { Button, Card } from "react-bootstrap"

export const Item = ( {nombre, precio, img, desc}) => {

return (
  <Card style={{ width: '15rem', margin: '12px' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>{nombre}</Card.Title>
      <Card.Text>
        {desc}
      </Card.Text>
      <Card.Text>
        Precio: ${precio}
      </Card.Text>
      <Button variant="success">Agregar al carrito</Button>
    </Card.Body>
  </Card>
  )
}